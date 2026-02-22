import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { Home } from "./pages/app/home/home";
import { Recipes } from "./pages/app/recipes/recipes";
import { Ingredients } from "./pages/app/ingredients/ingredients";
import { Profile } from "./pages/app/profile/profile";

export const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/ingredients", element: <Ingredients /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
