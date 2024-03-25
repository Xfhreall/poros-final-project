import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContextProvider";
import Cart from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/cart",
    element: <Cart/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
