import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-2 uppercase sm:px-6 sm:py-3">
      <Link to="/" className="tracking-widest md:text-2xl">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
