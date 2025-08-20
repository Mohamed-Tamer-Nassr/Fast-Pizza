import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  // the third and the last Step for fetching data using react router
  const menu = useLoaderData();
  console.log(menu);
  return <h1>Menu</h1>;
}
// The First Step for fetching data with react router
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
