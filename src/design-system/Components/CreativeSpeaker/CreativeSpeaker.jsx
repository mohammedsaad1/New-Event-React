import React from "react";
import { Image, SpeakerWraper } from "./Style";
export const CreativeSpeaker = ({ img, name, jop, alt }) => {
  return (
    <SpeakerWraper>
      <Image src={img} alt={alt} width="100%" />

      <h2>{name}</h2>
      <span>{jop}</span>
    </SpeakerWraper>
  );
};
