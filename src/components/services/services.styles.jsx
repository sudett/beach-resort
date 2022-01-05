import styled from "styled-components";
import { FaCocktail } from "react-icons/fa";

import { Section } from "../../global";

export const SectionServices = styled(Section)`
  background-color: var(--darkGrey);
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 7rem;
  row-gap: 3rem;
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 6rem;
`;

export const Service = styled.article`
  text-align: center;
`;

export const ServiceIcon = styled(FaCocktail)`
  color: var(--primaryColor);
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 2rem;
`;

export const ServiceTitle = styled.h3`
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  padding-bottom: 1.5rem;
`;
