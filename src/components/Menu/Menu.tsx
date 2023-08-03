/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeroiconsOutline } from "../HeroiconsOutline";
import "./style.css";

interface Props {
  className: any;
  heroiconsOutline: string;
  dashboardClassName: any;
  img: string;
  accountsClassName: any;
  hasMenuItem: boolean;
  hasDiv: boolean;
}

export const Menu = ({
  className,
  heroiconsOutline = "/img/heroicons-outline-home.svg",
  dashboardClassName,
  img = "/img/heroicons-outline-inbox-stack.svg",
  accountsClassName,
  hasMenuItem = true,
  hasDiv = true,
}: Props): JSX.Element => {
  return (
    <div className={`menu ${className}`}>
      <div className="frame">
        <div className="div">
          <div className="logo">
            <div className="frame-2">
              <img className="k" alt="K" src="/img/k-2-1.png" />
            </div>
          </div>
          <div className="menu-wrapper">
            <div className="div-2">
              <div className="menu-item">
                <img className="img" alt="Heroicons outline" src={heroiconsOutline} />
                <div className={`dashboard ${dashboardClassName}`}>Dashboard</div>
              </div>
              <div className="menu-item">
                <img className="img" alt="Heroicons outline" src={img} />
                <div className={`text-wrapper-2 ${accountsClassName}`}>Accounts</div>
              </div>
              <div className="menu-item">
                <img
                  className="heroicons-outline-2"
                  alt="Heroicons outline"
                  src="/img/heroicons-outline-banknotes.svg"
                />
                <div className="text-wrapper-2">Transactions</div>
              </div>
              {hasMenuItem && (
                <div className="menu-item">
                  <img className="img" alt="Heroicons outline" src="/img/heroicons-outline-credit-card.svg" />
                  <div className="text-wrapper-2">Cards</div>
                </div>
              )}

              {hasDiv && (
                <div className="menu-item">
                  <img className="img" alt="Heroicons outline" src="/img/heroicons-outline-user-plus.svg" />
                  <div className="text-wrapper-2">Recipients</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="menu-wrapper">
          <div className="div-2">
            <div className="menu-item">
              <HeroiconsOutline
                className="heroicons-outline-envelope"
                heroiconsOutline="/img/heroicons-outline-envelope.svg"
              />
              <div className="text-wrapper-2">Messages</div>
              <div className="group">
                <div className="overlap-group">
                  <div className="element">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-account">
        <div className="frame-2">
          <img className="ellipse" alt="Ellipse" src="/img/ellipse-2.png" />
          <div className="frame-3">
            <div className="david-wise">David Wise</div>
            <div className="partner">david@gmail.com</div>
          </div>
        </div>
        <img className="img" alt="Heroicons outline" src="/img/heroicons-outline-ellipsis-horizontal.svg" />
      </div>
    </div>
  );
};

Menu.propTypes = {
  heroiconsOutline: PropTypes.string,
  img: PropTypes.string,
  hasMenuItem: PropTypes.bool,
  hasDiv: PropTypes.bool,
};
