import React from "react";
import { useLocation } from "react-router-dom";
import theme from "../../../../design-system/config";
import { links } from "./Links";
import { Navlinks } from "./Navlinks";
import "../../../../design-system/main.css";

export const Navitem = () => {
  const items = links();
  const route = useLocation();

  return items.map((link, indx) => {
    return (
      <Navlinks
        className="hover"
        color={route.pathname === link.navLink ? theme.primary : theme.white}
        key={indx}
        navLink={link.navLink}
        navText={link.navText}
      />
    );
  });
};
