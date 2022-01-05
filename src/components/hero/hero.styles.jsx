import styled from "styled-components";

import heroImage from "../../images/defaultBcg.jpeg";

export const HeroContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
