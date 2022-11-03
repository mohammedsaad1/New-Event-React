import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { ImageWrapper, Image, OurprogramsWrapper, IconWrapper } from "./style";

const Ourprograms = ({
  id,
  img,
  time,
  roomnumber,
  title,
  alt,
  name,
  description,
}) => {
  return (
    <OurprogramsWrapper key={id}>
      <ImageWrapper>
        <Image src={img} alt={alt} />
      </ImageWrapper>
      <div>
        <IconWrapper>
          <div>
            <FontAwesomeIcon size="xs" icon={faClock} /> {time}
          </div>
          <div>
            <FontAwesomeIcon size="xs" icon={faMapMarker} /> {roomnumber}
          </div>
        </IconWrapper>
        <h2>{title}</h2>
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </OurprogramsWrapper>
  );
};
export default Ourprograms;
