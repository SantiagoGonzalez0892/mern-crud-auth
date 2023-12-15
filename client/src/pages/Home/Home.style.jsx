import { styled } from "styled-components";


export const HomeComponent = styled.main`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  max-width: 1200px;
  grid-column: 1 / 3;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    margin: 0 1.25rem;
    width: calc(100% - 1.25rem * 2);
  }
`;
