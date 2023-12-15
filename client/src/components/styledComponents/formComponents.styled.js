import { styled } from "styled-components";


export const Separator = styled.div`
  width: 100%;
  margin: 0 0 1.25rem 0;
`;

export const AuthPageStyled = styled.div`
  display: flex;
  grid-column: 1 / 3;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  .register__row .cardBody, 
  .login__row .cardBody {
    width: 40%;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 40%;
    max-width: 350px;
    min-width: 250px;

  }
  .register__row img, 
  .login__row img {
    width: 56%;
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 650px;
  }
`;
