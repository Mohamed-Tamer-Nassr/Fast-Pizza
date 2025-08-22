import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline md:text-xl"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-700 hover:underline md:text-xl"
    >
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired, // text, element(s), etc.
  to: PropTypes.string.isRequired, // the route to navigate to
};

export default LinkButton;
