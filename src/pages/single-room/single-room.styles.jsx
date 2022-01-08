import styled from "styled-components";
import { Section } from "../../global";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
`;

export const SectionRoom = styled(Section)`
  background-color: var(--mainGrey);
  padding: 8rem;

  & > * {
    max-width: 110rem;
    margin: 0 auto;
  }

  @media only screen and (max-width: 31em) {
    padding: 8rem 4rem;
  }
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  row-gap: 3rem;
  column-gap: 5rem;
  margin-bottom: 5rem;
`;

export const RoomImage = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;

export const DetailsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8rem;
  row-gap: 4rem;
  padding-bottom: 4rem;

  @media only screen and (max-width: 50em) {
    grid-template-columns: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDetail = styled.span`
  padding-bottom: 1.5rem;
  font-weight: bold;
  letter-spacing: var(--mainSpacing);
  text-transform: capitalize;
`;

export const ExtrasItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  column-gap: 5rem;
  row-gap: 2rem;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: auto;
  }
`;
