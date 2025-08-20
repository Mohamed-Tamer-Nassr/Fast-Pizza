import { Outlet } from "react-router-dom";
import CartOverview from "../features/menu/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1 style={{ color: "red" }}>The Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
