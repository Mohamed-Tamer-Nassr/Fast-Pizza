import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const classNamePrimary =
    "mt-4 inline-block rounded-lg bg-yellow-400 px-2 py-1 text-sm font-semibold uppercase text-stone-800 transition-all duration-300 hover:bg-black hover:text-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-1.5 md:px-6 md:py-4 md:text-lg";
  const classNameSecondary =
    "mt-4 inline-block rounded-lg bg-stone-700 px-2 py-1 text-sm font-semibold uppercase text-yellow-400 border-2 border-transparent transition-all duration-300 hover:bg-stone-100 hover:border-yellow-400 hover:text-stone-800 focus:outline-none focus-visible:ring focus-visible:ring-stone-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-1.5 md:px-6 md:py-4 md:text-lg";
  const classNameRound =
    "inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-stone-800 transition-all duration-300 hover:bg-black hover:text-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:w-10 sm:text-base";
  const classNamePosition =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 px-3 py-1.5 text-xs font-bold uppercase text-stone-900 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-1 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:px-4 sm:py-2 sm:text-sm before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]";

  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link className={classNamePrimary} to={to}>
        {children}
      </Link>
    );
  }

  // Determine which className to use
  const className =
    type === "secondary"
      ? classNameSecondary
      : type === "round"
        ? classNameRound
        : type === "position"
          ? classNamePosition
          : classNamePrimary;

  // Render as button with appropriate props
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // React element(s), text, etc.
  disabled: PropTypes.bool, // Optional, defaults to false
  to: PropTypes.string, // Optional - the route to navigate to
  type: PropTypes.oneOf(["secondary", "round", "position"]), // Optional - button variant
  onClick: PropTypes.func, // Optional click handler
};

export default Button;
