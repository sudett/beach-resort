import React from "react";

import Hero from "../../components/hero/hero.component";
import Banner from "../../components/banner/banner.component";
import Services from "../../components/services/services.component";
import FeaturedRooms from "../../components/featured-rooms/featured-rooms.component";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subTitle="Deluxe rooms starting at $299"
          url="/rooms"
          text="Our rooms"
        />
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
