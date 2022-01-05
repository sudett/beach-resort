import React from "react";

import { GoldenLine } from "./title.styles";
import { HeadingPrimary } from "../../global";

const Title = ({ title }) => {
  return (
    <>
      <HeadingPrimary>{title}</HeadingPrimary>
      <GoldenLine></GoldenLine>
    </>
  );
};

export default Title;
