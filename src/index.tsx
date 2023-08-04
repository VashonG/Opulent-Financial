import React from "react";
import ReactDOM from "react-dom"; // Correct the import statement
import { Accounts } from "./screens/Accounts";

const rootElement = document.getElementById("app"); // Use "app" as the root element ID
if (rootElement) {
  const root = (ReactDOM as any).createRoot(rootElement); // Type assertion to 'any' to access createRoot method
  root.render(<Accounts />);
} else {
  console.error("Root element 'app' not found.");
}
