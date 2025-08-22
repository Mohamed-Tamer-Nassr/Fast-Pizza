import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const classNamePrimary =
    "mt-4 inline-block rounded-lg bg-yellow-400 px-2 py-1 text-sm font-semibold uppercase text-stone-800 transition-all duration-300 hover:bg-black hover:text-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-1.5 md:px-6 md:py-4 md:text-lg";
  const classNameSecondary =
    "mt-4 inline-block rounded-lg bg-stone-700 px-2 py-1 text-sm font-semibold uppercase text-yellow-400 border-2 border-transparent transition-all duration-300 hover:bg-stone-100 hover:border-yellow-400 hover:text-stone-800 focus:outline-none focus-visible:ring focus-visible:ring-stone-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-1.5 md:px-6 md:py-4 md:text-lg";
  if (to)
    return (
      <Link className={classNamePrimary} to={to}>
        {children}
      </Link>
    );
  if (type === "secondary")
    return (
      <button disabled={disabled} className={classNameSecondary}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={classNamePrimary}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // React element(s), text, etc.
  disabled: PropTypes.bool, // Optional, defaults to false
  to: PropTypes.string.isRequired, // the route to navigate to
  type: PropTypes.string.isRequired, // the route to navigate to
};

export default Button;
