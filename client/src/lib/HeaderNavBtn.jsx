import React from "react";

export default function HeaderNavBtn({ src, alt, margin }) {
  if (margin === true) {
    return (
      <div className="header_nav_item mb-4 header_nav_btn">
        <img src={src} alt={alt} className="icon" />
      </div>
    );
  } else {
    return (
      <div className="header_nav_item header_nav_btn">
        <img src={src} alt={alt} className="icon" />
      </div>
    );
  }
}
