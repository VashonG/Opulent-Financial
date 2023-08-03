/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  text: string;
  state: "disabled" | "focused" | "hover" | "default";
  level: "primary" | "inline" | "secondary";
  className: any;
}

export const Button = ({ text = "Button", state, level, className }: Props): JSX.Element => {
  return (
    <div className={`button ${level} ${state} ${className}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  level: PropTypes.oneOf(["primary", "inline", "secondary"]),
};
