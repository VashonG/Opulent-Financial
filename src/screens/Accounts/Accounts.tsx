import React from "react";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import "./style.css";

export const Accounts = (): JSX.Element => {
  return (
    <div className="accounts">
      <div className="div-3">
        <div className="frame-4">
          <img className="frame-5" alt="Frame" src="/img/frame-120.png" />
          <img className="frame-6" alt="Frame" src="/img/frame-121.png" />
        </div>
        <div className="navigation">
          <div className="text-wrapper-3">Accounts</div>
          <div className="button-wrapper">
            <Button className="button-instance" level="primary" state="default" text="Pay Bill" />
          </div>
        </div>
        <Menu
          accountsClassName="menu-2"
          className="menu-instance"
          dashboardClassName="design-component-instance-node"
          hasDiv={true}
          hasMenuItem={true}
          heroiconsOutline="/img/heroicons-outline-home-6.svg"
          img="/img/heroicons-outline-inbox-stack-1.svg"
        />
      </div>
    </div>
  );
};
