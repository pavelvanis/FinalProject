import React from "react";
import { add, home, menu, profile } from "../assets/icons";
import { instagram, instagramBlack } from "../assets/logos";

export default function Header() {
  return (
    <main>
      <Horizontally />
      <Vertically />
    </main>
  );
}

function Horizontally() {
  return (
    <div className="header_nav horizontal border-end flex-column ">
      <div className="header_nav_btn">er</div>
      <div className="header_nav_btn">re</div>
      <div className="header_nav_btn">geg</div>
    </div>
  );
}

function Vertically() {
  return (
    <div className="header_nav vertical fixed d-sm-flex">
      <div className="header_nav_item mb-4 mt-3 fit-content">
        <img src={instagramBlack} alt="logo" className="icon" />
      </div>

      <div className="mt-2 header_nav_bar">
        <div className="header_nav_item header_nav_btn">
          <img src={home} alt="home-icon" className="icon" />
        </div>
        <div className="header_nav_item header_nav_btn">
          <img src={add} alt="add-cion" className="icon" />
        </div>
        <div className="header_nav_item header_nav_btn">
          <img src={profile} alt="logo" className="icon" />
        </div>
      </div>
      <div className="header_nav_item mb-4 header_nav_btn">
        <img src={menu} alt="add-cion" className="icon" />
      </div>
    </div>
  );
}
