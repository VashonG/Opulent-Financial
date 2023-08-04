"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
require("./style.css");
const Button = ({ text = "Button", state, level, className }) => {
    return (react_1.default.createElement("div", { className: `button ${level} ${state} ${className}` },
        react_1.default.createElement("div", { className: "text-wrapper" }, text)));
};
exports.Button = Button;
exports.Button.propTypes = {
    text: prop_types_1.default.string,
    state: prop_types_1.default.oneOf(["disabled", "focused", "hover", "default"]),
    level: prop_types_1.default.oneOf(["primary", "inline", "secondary"]),
};
