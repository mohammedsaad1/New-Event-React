import React from "react";
import theme from "../../../../design-system/config";
import { Link, LinksWrapper } from "./style";

export const Navlinks = ({ navLink, navText, active, color }) => {
  return (
    <Link style={{ color: color }} href={navLink}>
      {navText}
    </Link>
  );
};
