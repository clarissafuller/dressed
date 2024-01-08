import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Account from "./pages/Account.jsx";
import Closet from "./pages/Closet.jsx";
import NotFound from "./pages/NotFound";
import Rent from "./pages/Rent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/closet",
        element: <Closet />,
      },
      {
        path: "/rent",
        element: <Rent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
