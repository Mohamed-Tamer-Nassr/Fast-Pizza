import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="space-y-6">
      <Button to="/menu">&larr; Back to menu</Button>

      <p className="font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
