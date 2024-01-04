import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ReceiptGeneratorContainer from './containers/ReceiptGeneratorContainer';
const rootElement = document.getElementById("root") || document.body

const root = createRoot(rootElement);

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReceiptGeneratorContainer />
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);