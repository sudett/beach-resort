import React from "react";

import { ButtonGold } from "./button.styles";
import { ButtonRoom } from "../room/room.styles";

const Button = ({ url, text, btnRoom }) => {
  if (btnRoom) return <ButtonRoom to={url}>{text}</ButtonRoom>;

  return <ButtonGold to={url}>{text}</ButtonGold>;
};

export default Button;
