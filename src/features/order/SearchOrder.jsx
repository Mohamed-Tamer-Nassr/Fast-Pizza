import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full focus:ring focus:ring-yellow-500 focus:ring-offset-1 focus:outline-none px-4 py-2 text-sm bg-yellow-100 transition-all duration-300 sm:focus:w-72 w-28 sm:w-64 placeholder:text-stone-400"
      />
    </form>
  );
}

export default SearchOrder;
