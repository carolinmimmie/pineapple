import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Menu from "./pages/Menu";
import OpenHours from "./pages/OpenHours";
import FindUs from "./pages/FindUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/boka-bord", element: <Bookings /> },
      { path: "/meny", element: <Menu /> },
      { path: "/hitta-hit", element: <FindUs /> },
      { path: "/oppet-tider", element: <OpenHours /> },
    ],
  },
]);
