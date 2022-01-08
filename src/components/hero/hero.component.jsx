import React from "react";

import { HeroContainer, RoomsHeroContainer } from "./hero.styles";

const Hero = ({ children, roomsHero, backImage }) => {
  if (roomsHero) return <RoomsHeroContainer backImage={backImage}>{children}</RoomsHeroContainer>;

  return <HeroContainer>{children}</HeroContainer>;
};

export default Hero;
