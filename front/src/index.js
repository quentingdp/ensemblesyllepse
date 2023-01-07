//Imports of external libraries
import React from "react"
import ReactDOM from "react-dom/client"

//Internal dependancies
import Router from "./Router"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)
