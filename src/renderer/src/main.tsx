import "react-toastify/dist/ReactToastify.css"
import "../../../node_modules/@milon27/react-sidebar/dist/react-sidebar.css"
import "./main.css"

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
