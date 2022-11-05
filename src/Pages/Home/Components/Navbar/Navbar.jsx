import React from "react";
import { links } from "./Links";
import { Navitem } from "./Navitem";
import { Navlinks } from "./Navlinks";
import {
  Event,
  LinksWrapper,
  NavbarContainer,
  NavbarWrapper,
  Navtitle,
} from "./style";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer className=" container">
        <div>
          <Navtitle>
            New <Event>Event</Event>
          </Navtitle>
        </div>
        <LinksWrapper>
          <Navitem />
        </LinksWrapper>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
