import styled from "styled-components";
import { ButtonGold } from "../button/button.styles";

export const RoomContainer = styled.article`
  box-shadow: var(--lightShadow);
  background-color: var(--darkGrey);
  transition: var(--mainTransition);

  &:hover {
    cursor: pointer;
    box-shadow: var(--darkShadow);

    .image-container {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .room-image {
      opacity: 0.3;
    }

    .price-container {
      opacity: 0;
    }

    a {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 85%;
  transition: var(--mainTransition);
`;

export const RoomImage = styled.img`
  height: 100%;
  width: 100%;
  transition: var(--mainTransition);
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  padding: 0.5rem 1rem;
  border-bottom-right-radius: 2rem;
  opacity: 1;
  transition: var(--mainTransition);
`;

export const PriceNumber = styled.span`
  letter-spacing: var(--mainSpacing);
`;

export const PricePerNight = styled.span`
  font-size: 1rem;
`;

export const ButtonRoom = styled(ButtonGold)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: var(--mainTransition);
`;

export const RoomName = styled.p`
  height: 15%;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
`;
