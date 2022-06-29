import React from "react";
import darklogo from "~image/logo/logo-black.png";
import lightLogo from "~image/logo/logo-white.png";
export default function BrandLogo({ logoWhite = false, ...rest }) {
  return (
    <>
      <img src={logoWhite ? lightLogo : darklogo} alt="brand logo" {...rest} />
    </>
  );
}
