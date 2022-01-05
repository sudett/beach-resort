import React from "react";

import { HeroContainer } from "./hero.styles";

const Hero = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};

export default Hero;
