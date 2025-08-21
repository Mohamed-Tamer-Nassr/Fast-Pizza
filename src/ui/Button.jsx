import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "mt-4 inline-block rounded-lg bg-yellow-400 px-2 py-1 text-sm font-semibold uppercase text-stone-800 transition-all duration-300 hover:bg-black hover:text-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-1.5 md:px-6 md:py-4 md:text-lg";
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // React element(s), text, etc.
  disabled: PropTypes.bool, // Optional, defaults to false
  to: PropTypes.string.isRequired, // the route to navigate to
};

export default Button;
