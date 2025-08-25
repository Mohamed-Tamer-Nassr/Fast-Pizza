import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return (
    <p className="hidden text-sm font-semibold tracking-wider md:block md:text-2xl">
      {userName}
    </p>
  );
}

export default Username;
