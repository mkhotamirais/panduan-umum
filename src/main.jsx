import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Page1_1Layout from "./pages/page1/page1_1/Page1_1Layout";
import Page1 from "./pages/page1/Page1";
import Page1Layout from "./pages/page1/Page1Layout";
import Page1_1 from "./pages/page1/page1_1/Page1_1";
import Materi1 from "./pages/page1/page1_1/materi/Materi1";
import Page2 from "./pages/page2/Page2";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="page1" element={<Page1Layout />}>
          <Route index element={<Page1 />} />
          <Route path="page1_1" element={<Page1_1Layout />}>
            <Route index element={<Page1_1 />} />
            <Route path="materi1" element={<Materi1 />} />
          </Route>
        </Route>
        <Route path="page2" element={<Page2 />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
