import React from "react";
import logo1 from "../../../Shared/assets/ourprograms/sponsor-img2.jpg";
import { Image, OursponsersWrapper } from "./style";

export const Oursponsers = ({ src, alt }) => {
  return (
    <OursponsersWrapper>
      <Image src={src} alt={alt} />
    </OursponsersWrapper>
  );
};
