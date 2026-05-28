import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "./styles/index.css";

const baseUrl = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);