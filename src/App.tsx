import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
