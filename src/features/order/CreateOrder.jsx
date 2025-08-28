import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import store from "../../store";
import Button from "../../ui/Button";
import { clearCart, getCart, totalPrice } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const cart = useSelector(getCart);
  const [withPriority, setWithPriority] = useState(false);
  const {
    userName,
    status: statusAddress,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const totalCartPrice = useSelector(totalPrice);
  const totalPriority = withPriority ? totalCartPrice * 0.2 : 0;
  const theEndTotal = totalCartPrice + totalPriority;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const formData = useActionData();
  const dispatch = useDispatch();
  const isLoadingAddress = statusAddress === "loading";

  // if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4">
      <h2 className="mb-8 text-xl font-semibold md:text-2xl">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            defaultValue={userName}
            className="input grow"
            type="text"
            name="customer"
            required
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formData?.phone && (
              <p className="mt-2 rounded-lg bg-red-100 px-2 py-1 text-center text-sm text-red-600 sm:text-base">
                {formData.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
          </div>
          {statusAddress === "error" && (
            <p className="sm:text-small absolute -top-2 right-1 mt-2 rounded-full bg-red-100 px-2 py-1 text-center text-sm text-red-600 sm:-top-6 sm:right-0 sm:px-1 sm:py-0 md:top-12 md:text-base">
              {errorAddress}
            </p>
          )}
          {!position.latitude && !position.longitude && (
            <span className="absolute right-0.5 top-9 z-50 sm:right-[4px] sm:top-[5.5px] md:right-2 md:top-[9px]">
              <Button
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                type="position"
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="min-h-4 min-w-4 accent-yellow-400 focus:border-none focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 sm:min-h-5 sm:min-w-5 md:min-h-7 md:min-w-7"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label
            className="font-medium sm:text-lg md:text-xl"
            htmlFor="priority"
          >
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            disabled={isLoading || isLoadingAddress}
            className="mt-4 inline-block rounded-lg bg-yellow-400 px-2 py-1 text-sm font-semibold uppercase text-stone-800 transition-all duration-300 hover:bg-black hover:text-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isLoading ? "Placing order..." : `Order now from €${theEndTotal}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = "Please give us your correct phone number for contact you.";
  if (Object.keys(error).length > 0) return error;
  // if every thing is okay. then, create a new one
  store.dispatch(clearCart());
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
