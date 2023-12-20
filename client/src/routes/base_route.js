import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../components/main/Main";
import AnimeName from "../components/anime_name/Index";
import Layout from "../components/general/layout/Layout";
import ErrorPage from "../components/general/ErrorPage/ErrorPage";
import Genre from "../components/genre/Index";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/anime/:anime_name",
        element: <AnimeName />,
      },
      {
        path: "/genre/:anime_name",
        element: <Genre />,
        // see SEO
        children: [
          {
            path: ":genre_name",
            element: <Genre />,
          }
        ]
      },
      
    ],
  },
]);
