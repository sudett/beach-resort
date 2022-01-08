import React from "react";
import { useGlobalContext } from "../../context";

import Room from "../room/room.component";

import { RoomsContainer } from "./filtered-rooms.styles";
import { HeadingPrimary } from "../../global";

export default function FilteredRooms() {
  const { filteredRooms } = useGlobalContext();

  if (filteredRooms.length === 0) return <HeadingPrimary>Unfortunately no rooms matched your search parameters</HeadingPrimary>;

  return (
    <RoomsContainer>
      {filteredRooms.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </RoomsContainer>
  );
}
