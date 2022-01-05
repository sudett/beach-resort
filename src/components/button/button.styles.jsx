import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonGold = styled(Link)`
  background-color: var(--primaryColor);
  border: 3px solid var(--primaryColor);
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #000;
  padding: 0.2rem 1.2rem;
  letter-spacing: var(--mainSpacing);
  transition: var(--mainTransition);

  &:hover {
    color: var(--primaryColor);
    background-color: transparent;
  }
`;
