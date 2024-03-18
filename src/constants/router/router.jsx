import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ROUTES } from "./route";

export const router = createBrowserRouter(
    createRoutesFromElements(ROUTES)
);
  