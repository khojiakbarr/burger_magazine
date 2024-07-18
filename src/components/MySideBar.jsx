import { Sidebar } from "flowbite-react";
import "./style.css";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../ApiSlice";
export default function MySideBar() {
  const { data, error, isLoading } = useGetCategoriesQuery();

  return (
    <Sidebar
      aria-label="Default sidebar "
      className="h-[calc(100vh-60px)] rounded-none dark:bg-gray-800"
    >
      <Sidebar.Items>
        <h1 className="dark:text-white font-bold ">Categores:</h1>
        <Sidebar.ItemGroup>
          <ul className="text-lg dark:text-white font-normal ">
            {data?.map((el) => (
              <Link key={el.id} to={`/${el.category}`}>
                <li className="p-[5px] hover:bg-gray-500">{el.category}</li>
              </Link>
            ))}
          </ul>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
