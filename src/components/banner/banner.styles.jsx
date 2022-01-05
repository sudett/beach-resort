import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90rem;
  color: #fff;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  padding: 0.5rem 4rem 2rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BannerTitle = styled.h1`
  font-size: 6rem;
  padding-bottom: 1rem;
  text-align: center;
  line-height: 1.2;

  @media only screen and (max-width: 62.5em) {
    font-size: 4rem;
  }
`;

export const GoldenLinePrimary = styled.span`
  display: block;
  width: 15rem;
  height: 5px;
  background-color: var(--primaryColor);
`;

export const BannerSubtitle = styled.h4`
  font-size: 2rem;
  padding: 2rem 0;
  text-align: center;

  @media only screen and (max-width: 62.5em) {
    font-size: 1.5rem;
  }
`;
