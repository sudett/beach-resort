import React from "react";

import { ButtonGold } from "./button.styles";

const Button = ({ url, text }) => {
  return <ButtonGold to={url}>{text}</ButtonGold>;
};

export default Button;
