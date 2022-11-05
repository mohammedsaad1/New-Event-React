import styled from "@emotion/styled";
import header from "../../../../Shared/assets/ourprograms/intro-bg.jpg";

export const HeaderWrapper = styled("section")`
  label: HeaderWrapper;
  height: 70vh;
  background-repeat: no-repeat;

  background: cover;
  padding: 20% 0;
  text-align: center;
  background: url(${header}) fixed;
`;

export const TitleWrapper = styled("h3")`
  label: TitleWrapper;
  font-weight: bold;
  color: white;
  font-size: x-large;
  letter-spacing: 0.1rem;
  word-spacing: 0.7rem;
`;
export const HWrapper = styled("h1")`
  label: HWrapper;
  font-weight: bold;
  margin: 9vh 0;
  color: white;
  font-size: 50px;
  letter-spacing: 0.1rem;
  word-spacing: 0.7rem;
`;

export const ButtonWrapper = styled("div")`
  label: ButtonWrapper;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
export const Button1Wrapper = styled("button")`
  label: Button1Wrapper;
  padding: 20px 60px;
  background-color: transparent;
  color: white;
  border: solid 1px white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: white;
    color: black;
  }
`;
export const Button2Wrapper = styled("button")`
  label: Button2Wrapper;
  padding: 20px 60px;
  border: solid 1px #f25464;
  background-color: #f25464;
  color: white;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: transparent;
    border-color: white;
  }
`;
