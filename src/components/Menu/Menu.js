"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
const HeroiconsOutline_1 = require("../HeroiconsOutline");
require("./style.css");
const Menu = ({ className, heroiconsOutline = "/img/heroicons-outline-home.svg", dashboardClassName, img = "/img/heroicons-outline-inbox-stack.svg", accountsClassName, hasMenuItem = true, hasDiv = true, }) => {
    return (react_1.default.createElement("div", { className: `menu ${className}` },
        react_1.default.createElement("div", { className: "frame" },
            react_1.default.createElement("div", { className: "div" },
                react_1.default.createElement("div", { className: "logo" },
                    react_1.default.createElement("div", { className: "frame-2" },
                        react_1.default.createElement("img", { className: "k", alt: "K", src: "/img/k-2-1.png" }))),
                react_1.default.createElement("div", { className: "menu-wrapper" },
                    react_1.default.createElement("div", { className: "div-2" },
                        react_1.default.createElement("div", { className: "menu-item" },
                            react_1.default.createElement("img", { className: "img", alt: "Heroicons outline", src: heroiconsOutline }),
                            react_1.default.createElement("div", { className: `dashboard ${dashboardClassName}` }, "Dashboard")),
                        react_1.default.createElement("div", { className: "menu-item" },
                            react_1.default.createElement("img", { className: "img", alt: "Heroicons outline", src: img }),
                            react_1.default.createElement("div", { className: `text-wrapper-2 ${accountsClassName}` }, "Accounts")),
                        react_1.default.createElement("div", { className: "menu-item" },
                            react_1.default.createElement("img", { className: "heroicons-outline-2", alt: "Heroicons outline", src: "/img/heroicons-outline-banknotes.svg" }),
                            react_1.default.createElement("div", { className: "text-wrapper-2" }, "Transactions")),
                        hasMenuItem && (react_1.default.createElement("div", { className: "menu-item" },
                            react_1.default.createElement("img", { className: "img", alt: "Heroicons outline", src: "/img/heroicons-outline-credit-card.svg" }),
                            react_1.default.createElement("div", { className: "text-wrapper-2" }, "Cards"))),
                        hasDiv && (react_1.default.createElement("div", { className: "menu-item" },
                            react_1.default.createElement("img", { className: "img", alt: "Heroicons outline", src: "/img/heroicons-outline-user-plus.svg" }),
                            react_1.default.createElement("div", { className: "text-wrapper-2" }, "Recipients")))))),
            react_1.default.createElement("div", { className: "menu-wrapper" },
                react_1.default.createElement("div", { className: "div-2" },
                    react_1.default.createElement("div", { className: "menu-item" },
                        react_1.default.createElement(HeroiconsOutline_1.HeroiconsOutline, { className: "heroicons-outline-envelope", heroiconsOutline: "/img/heroicons-outline-envelope.svg" }),
                        react_1.default.createElement("div", { className: "text-wrapper-2" }, "Messages"),
                        react_1.default.createElement("div", { className: "group" },
                            react_1.default.createElement("div", { className: "overlap-group" },
                                react_1.default.createElement("div", { className: "element" }, "3"))))))),
        react_1.default.createElement("div", { className: "user-account" },
            react_1.default.createElement("div", { className: "frame-2" },
                react_1.default.createElement("img", { className: "ellipse", alt: "Ellipse", src: "/img/ellipse-2.png" }),
                react_1.default.createElement("div", { className: "frame-3" },
                    react_1.default.createElement("div", { className: "david-wise" }, "David Wise"),
                    react_1.default.createElement("div", { className: "partner" }, "david@gmail.com"))),
            react_1.default.createElement("img", { className: "img", alt: "Heroicons outline", src: "/img/heroicons-outline-ellipsis-horizontal.svg" }))));
};
exports.Menu = Menu;
exports.Menu.propTypes = {
    heroiconsOutline: prop_types_1.default.string,
    img: prop_types_1.default.string,
    hasMenuItem: prop_types_1.default.bool,
    hasDiv: prop_types_1.default.bool,
};
