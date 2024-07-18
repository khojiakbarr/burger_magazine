import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import AddCategory from "./Pages/AddCategory";
import AddFoots from "./Pages/AddFoots";
import Foots from "./Pages/Foots";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <h1 className="text-2xl dark:text-white text-center">Welcome</h1>
          }
        />
        <Route path=":category" element={<Foots />} />
        <Route path="category" element={<AddCategory />} />
        <Route path="foot" element={<AddFoots />} />
      </Route>
    </Routes>
  );
}

export default App;
