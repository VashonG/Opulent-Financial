"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = require("../../components/Button");
const Menu_1 = require("../../components/Menu");
require("./style.css");
const Accounts = () => {
    return (react_1.default.createElement("div", { className: "accounts" },
        react_1.default.createElement("div", { className: "div-3" },
            react_1.default.createElement("div", { className: "frame-4" },
                react_1.default.createElement("img", { className: "frame-5", alt: "Frame", src: "/img/frame-120.png" }),
                react_1.default.createElement("img", { className: "frame-6", alt: "Frame", src: "/img/frame-121.png" })),
            react_1.default.createElement("div", { className: "navigation" },
                react_1.default.createElement("div", { className: "text-wrapper-3" }, "Accounts"),
                react_1.default.createElement("div", { className: "button-wrapper" },
                    react_1.default.createElement(Button_1.Button, { className: "button-instance", level: "primary", state: "default", text: "Pay Bill" }))),
            react_1.default.createElement(Menu_1.Menu, { accountsClassName: "menu-2", className: "menu-instance", dashboardClassName: "design-component-instance-node", hasDiv: false, hasMenuItem: false, heroiconsOutline: "/img/heroicons-outline-home-6.svg", img: "/img/heroicons-outline-inbox-stack-1.svg" }))));
};
exports.Accounts = Accounts;
