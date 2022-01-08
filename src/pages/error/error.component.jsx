import React from "react";
import heroImage from "../../images/defaultBcg.jpeg";

import Banner from "../../components/banner/banner.component";
import Hero from "../../components/hero/hero.component";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subTitle="Page not found" url="/" text="Return home" />
    </Hero>
  );
};

export default Error;
