"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom")); // Correct the import statement
const Accounts_1 = require("./screens/Accounts");
const rootElement = document.getElementById("app"); // Use "app" as the root element ID
if (rootElement) {
    const root = react_dom_1.default.createRoot(rootElement); // Type assertion to 'any' to access createRoot method
    root.render(react_1.default.createElement(Accounts_1.Accounts, null));
}
else {
    console.error("Root element 'app' not found.");
}
