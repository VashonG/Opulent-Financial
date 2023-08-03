/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  heroiconsOutline: string;
}

export const HeroiconsOutline = ({
  className,
  heroiconsOutline = "/img/heroicons-outline-envelope-1.svg",
}: Props): JSX.Element => {
  return <img className={`heroicons-outline ${className}`} alt="Heroicons outline" src={heroiconsOutline} />;
};

HeroiconsOutline.propTypes = {
  heroiconsOutline: PropTypes.string,
};
