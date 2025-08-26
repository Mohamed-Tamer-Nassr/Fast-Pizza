import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeFromCart } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(removeFromCart(pizzaId))}>Delete</Button>
  );
}

export default DeleteItem;

DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};
