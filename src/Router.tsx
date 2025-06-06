import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import OpenHours from "./pages/OpenHours";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <Contact /> },
      { path: "/openhours", element: <OpenHours /> },
    ],
  },
]);
