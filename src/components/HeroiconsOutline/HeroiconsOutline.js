"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroiconsOutline = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
require("./style.css");
const HeroiconsOutline = ({ className, heroiconsOutline = "/img/heroicons-outline-envelope-1.svg", }) => {
    return react_1.default.createElement("img", { className: `heroicons-outline ${className}`, alt: "Heroicons outline", src: heroiconsOutline });
};
exports.HeroiconsOutline = HeroiconsOutline;
exports.HeroiconsOutline.propTypes = {
    heroiconsOutline: prop_types_1.default.string,
};
