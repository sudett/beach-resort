import React from "react";

import Title from "../title/title.component";

import { FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// import "./services.styles.scss";
import {
  SectionServices,
  SectionContainer,
  Service,
  ServiceIcon,
  ServiceTitle,
} from "./services.styles";

const Services = () => {
  return (
    <SectionServices>
      <Title title="services" />
      <SectionContainer>
        <Service>
          <ServiceIcon />
          <ServiceTitle>Free cocktails</ServiceTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            temporibus?
          </p>
        </Service>

        <Service>
          <ServiceIcon as={FaHiking} />
          <ServiceTitle>Endless hiking</ServiceTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            temporibus?
          </p>
        </Service>

        <Service>
          <ServiceIcon as={FaShuttleVan} />
          <ServiceTitle>Free shuttle</ServiceTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            temporibus?
          </p>
        </Service>

        <Service>
          <ServiceIcon as={FaBeer} />
          <ServiceTitle>Strongest beer</ServiceTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            temporibus?
          </p>
        </Service>
      </SectionContainer>
    </SectionServices>
  );
};

export default Services;
