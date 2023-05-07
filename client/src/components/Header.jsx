import React from "react";
import {
  add,
  home,
  menu,
  profile,
  notification,
  search,
} from "../assets/icons";
import { instagramText, instagramBlack } from "../assets/logos";
import HeaderNavBtn from "../lib/HeaderNavBtn";

export default function Header() {
  return (
    <header>
      <TopHeader />
      <Horizontally />
      <Vertically />
    </header>
  );
}

function TopHeader() {
  return (
    <div className="header_top_nav fixed-top d-flex flex-row text-white d-flex d-sm-none">
      <div>
        <img src={instagramText} alt="home-icon" className="logo" />
      </div>
      <div>search</div>
      <div></div>
    </div>
  );
}

function Horizontally() {
  return (
    <div className="header_nav horizontal fixed-bottom d-sm-none justify-content-evenly">
      <HeaderNavBtn src={home} alt="home-icon" />
      <HeaderNavBtn src={search} alt="home-icon" />
      <HeaderNavBtn src={add} alt="add-cion" />
      <HeaderNavBtn src={notification} alt="notification-icon" />
      <HeaderNavBtn src={profile} alt="profile-icon" />
    </div>
  );
}

function Vertically() {
  return (
    <div className="header_nav vertical d-sm-flex">
      <HeaderNavBtn src={instagramBlack} alt="logo" margin={true} />

      <div className="mt-2 header_nav_bar">
        <HeaderNavBtn src={home} alt="home-icon" />
        <HeaderNavBtn src={search} alt="home-icon" />
        <HeaderNavBtn src={add} alt="add-cion" />
        <HeaderNavBtn src={notification} alt="notification-icon" />
        <HeaderNavBtn src={profile} alt="profile-icon" />
      </div>
      <HeaderNavBtn src={menu} alt="add-cion" margin={true} />
    </div>
  );
}
