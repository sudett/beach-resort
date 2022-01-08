import React from "react";

import Hero from "../../components/hero/hero.component";
import Banner from "../../components/banner/banner.component";
import SearchBox from "../../components/search-box/search-box.component";
import FilteredRooms from "../../components/filtered-rooms/filtered-rooms.component";

// import "./rooms.styles.scss";
import { SectionRooms } from "./rooms.styles";

const Rooms = () => {
  return (
    <>
      <Hero roomsHero>
        <Banner title="Our rooms" url="/" text="Return home" />
      </Hero>

      <SectionRooms>
        <SearchBox />
        <FilteredRooms />
      </SectionRooms>
    </>
  );
};

export default Rooms;
