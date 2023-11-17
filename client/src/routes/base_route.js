import {
    createBrowserRouter,
    Link,
  } from "react-router-dom";
import Main from "../components/main/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main /> ,
    },
    // {
    //   path: "about",
    //   element: <App />,
    // },
  ]);
