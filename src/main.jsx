import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BackToTopButton from "./components/backToTop/BackToTopButton.JSX";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <BackToTopButton />
  </>
);
