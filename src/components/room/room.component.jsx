import React from "react";
import Button from "../button/button.component";

import { RoomContainer, ImageContainer, RoomImage, PriceContainer, PriceNumber, PricePerNight, RoomName } from "./room.styles";

const Room = ({ id, images, price, name }) => {
  return (
    <RoomContainer>
      <ImageContainer className="image-container">
        <RoomImage className="room-image" src={images[0]} alt="hotel room" />
        <PriceContainer className="price-container">
          <PriceNumber>${price}</PriceNumber>
          <PricePerNight>per night</PricePerNight>
        </PriceContainer>
        <Button btnRoom classes="btn-room" url={`/rooms/${id}`} text="Features" />
      </ImageContainer>
      <RoomName>{name}</RoomName>
    </RoomContainer>
  );
};

export default Room;
