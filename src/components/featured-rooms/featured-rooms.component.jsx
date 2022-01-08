import React from "react";

import { useGlobalContext } from "../../context";

import Room from "../room/room.component";
import Title from "../title/title.component";

import { Section } from "../../global";
import { SectionFeaturedContainer } from "./featured-rooms.styles";

const FeaturedRooms = () => {
  const { rooms } = useGlobalContext();

  return (
    <Section>
      <Title title="Featured rooms" />
      <SectionFeaturedContainer>
        {rooms
          .filter((room) => room.featured)
          .map((room) => (
            <Room key={room.id} {...room} />
          ))}
      </SectionFeaturedContainer>
    </Section>
  );
};

export default FeaturedRooms;
