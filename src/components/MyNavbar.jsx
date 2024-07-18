import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar fluid>
      <Link to={"/"}>
        <h2 className="dark:text-white font-extrabold">My Fast Foot</h2>
      </Link>
      <ul className="dark:text-white font-bold flex gap-5">
        <Link to={"/category"}>
          <li>Add Category</li>
        </Link>
        <Link to={"/foot"}>
          <li>Add Food</li>
        </Link>
      </ul>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
    </Navbar>
  );
}
