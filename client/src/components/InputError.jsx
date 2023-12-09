import { styled } from "styled-components";

const P = styled.p`
  color: #ee2200;
  font-size: 0.85rem;
`;



function InputError ({ message }) {
  return <P>{message}</P>
}


export default InputError;
