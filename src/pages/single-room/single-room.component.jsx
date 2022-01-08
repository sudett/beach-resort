import React from "react";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "../../context";

import Hero from "../../components/hero/hero.component";
import Banner from "../../components/banner/banner.component";
import Button from "../../components/button/button.component";

import { ErrorContainer, SectionRoom, ImageBox, RoomImage, DetailsContent, Info, InfoDetail, ExtrasItems } from "./single-room.styles";

import { HeadingSecondary, HeadingTertiary } from "../../global";

const SingleRoom = () => {
  const { roomId } = useParams();
  const { rooms } = useGlobalContext();

  const room = rooms.find((room) => room.id === roomId);

  // Render error if there is no room with this id
  if (!room) {
    console.log("no room");
    return (
      <ErrorContainer>
        <HeadingTertiary>No such room could be found</HeadingTertiary>
        <Button text="Back to rooms" url="/rooms" />
      </ErrorContainer>
    );
  }

  const { name, price, images, description, size, capacity, pets, breakfast, extras } = room;

  const [mainImage, ...otherImages] = images;

  // Render single room
  return (
    <>
      <Hero roomsHero backImage={mainImage}>
        <Banner title={`${name} room`} text="rooms" url="/rooms" />
      </Hero>

      <SectionRoom>
        <ImageBox>
          {otherImages.map((img, i) => (
            <RoomImage key={i} src={img} alt={name} />
          ))}
        </ImageBox>

        <DetailsContent>
          <div>
            <HeadingSecondary>Deatils</HeadingSecondary>
            {description}
          </div>

          <Info>
            <HeadingSecondary>Info</HeadingSecondary>
            <InfoDetail>Price: ${price}</InfoDetail>
            <InfoDetail>Size: ${size} SQFT</InfoDetail>
            <InfoDetail>
              Max capacity:
              {capacity < 2 ? ` ${capacity} person` : ` ${capacity} people`}
            </InfoDetail>
            <InfoDetail>{pets ? "Pets allowed" : "Pets NOT allowed"}</InfoDetail>
            <InfoDetail>{breakfast && "Free breakfast included"}</InfoDetail>
          </Info>
        </DetailsContent>

        <div>
          <HeadingSecondary>Extras</HeadingSecondary>
          <ExtrasItems>
            {extras.map((item, i) => (
              <span key={i}>- {item}</span>
            ))}
          </ExtrasItems>
        </div>
      </SectionRoom>
    </>
  );
};

export default SingleRoom;
