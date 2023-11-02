import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./reactRouter";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
}
