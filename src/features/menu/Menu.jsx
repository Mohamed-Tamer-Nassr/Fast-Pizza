import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // the third and the last Step for fetching data using react router
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
// The First Step for fetching data with react router
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
