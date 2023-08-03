import React from "react";
import ReactDOMClient from "react-dom/client";
import { Accounts } from "./screens/Accounts";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Accounts />);
