import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Nav from "./pages/Nav";
import Dashboard from "./Pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
