import styled from "styled-components";
import { Section } from "../../global";

export const SectionRooms = styled(Section)`
  padding: 8rem 6rem;
  max-width: 117rem;
  min-height: 100vh;
  margin: 0 auto;

  @media only screen and (max-width: 37.5em) {
    padding: 8rem 4rem;
  }
`;
