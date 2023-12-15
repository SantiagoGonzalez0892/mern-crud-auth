import { styled } from "styled-components";


export const HomeComponent = styled.main`
  grid-column: 1 / 3;
  width: 80%;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 1.25rem * 2);
    margin: 0 1.25rem;
  }
`;
