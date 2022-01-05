import React from "react";
import Button from "../button/button.component";

import {
  BannerContainer,
  BannerTitle,
  GoldenLinePrimary,
  BannerSubtitle,
} from "./banner.styles";

const Banner = ({ title, subTitle, text, url }) => {
  return (
    <BannerContainer>
      <BannerTitle>{title}</BannerTitle>
      <GoldenLinePrimary></GoldenLinePrimary>
      <BannerSubtitle>{subTitle}</BannerSubtitle>
      <Button text={text} url={url} />
    </BannerContainer>
  );
};

export default Banner;
