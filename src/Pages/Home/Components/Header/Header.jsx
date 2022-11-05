import React from "react";
import {
  Button1Wrapper,
  Button2Wrapper,
  ButtonWrapper,
  HeaderWrapper,
  HWrapper,
  TitleWrapper,
} from "./style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>July 22 - 26 In San Francisco,CA</TitleWrapper>
      <HWrapper>Web Design conference</HWrapper>
      <ButtonWrapper>
        <Button1Wrapper>LEARN MORE</Button1Wrapper>
        <Button2Wrapper>REGISTER NOW</Button2Wrapper>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};
