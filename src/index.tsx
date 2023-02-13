import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./index.css";
import "./styles/colors.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
