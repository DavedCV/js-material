import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";
import LoginScreen from "../components/login/LoginScreen";
import Navbar from "../components/ui/Navbar";
import HeroScreen from "../components/hero/HeroScreen";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <MarvelScreen />,
      },
      {
        path: "/marvel",
        element: <MarvelScreen />,
      },
      {
        path: "/dc",
        element: <DcScreen />,
      },
      {
        path: "/search",
        element: <SearchScreen />,
      },
      {
        path: "/hero/:heroId",
        element: <HeroScreen />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
