import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
  removeFromCart,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch(); // ✅ Added parentheses
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const handleDecrease = () => {
    if (currentQuantity === 1) {
      // Show alert before removing item
      const shouldRemove = window.confirm(
        "This will remove the item from your cart. Are you sure?",
      );

      if (shouldRemove) {
        dispatch(removeFromCart(pizzaId));
      }
    } else {
      dispatch(decreaseItemQuantity(pizzaId));
    }
  };

  return (
    <div className="absolute -top-4 right-0.5 space-x-3 sm:right-0 sm:space-x-2 md:-top-6 md:right-2.5">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

export default UpdateItemQuantity;
