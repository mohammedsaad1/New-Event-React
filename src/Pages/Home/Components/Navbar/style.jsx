import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
export const NavbarWrapper = styled("section")`
  label: NavbarWrapper;
  background-color: ${theme.black};
  color: white;
  padding: 1.5rem 0;
`;
export const NavbarContainer = styled("section")`
  label: NavbarContainer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Navtitle = styled("section")`
  label: Navtitle;
  font-size: 1.5rem;
`;
export const Event = styled("span")`
  label: Event;

  color: ${theme.primary};
`;
export const Link = styled("a")`
  label: Link;
  text-decoration: none;
  color: ${theme.white};

  font-size: 1rem;
`;
export const LinksWrapper = styled("div")`
  label: LinksWrapper;
  display: flex;
  gap: 2rem;
  align-items: center;
`;
