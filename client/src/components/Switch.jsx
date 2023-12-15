import { useTheme } from "../context/themeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { styled } from "styled-components";


const SwitchStyled = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  background: #343D5B;
  border-radius: 30px;
  align-items: center;
  transition: background .4s ease;
  &::after {
    top: -1px;
    left: -1px;
    content: '';
    width: 1.25em;
    height: 1.25em;
    background: white;
    border-radius: 50%;
    position: absolute;
    transition: transform .4s ease;
    border: 1px solid rgba(0, 0, 0, .25);
    box-shadow: 0 0 3px rgba(0, 0, 0, .75);
  }
  &.actived {
    background: orange;
    &::after { 
      transform: translateX(100%); 
    }
  }
`;

const Span = styled.span`
  color: white;
  width: 1.25em;
  height: 1.25em;
  align-items: center;
  display: inline-flex;
  justify-content: center;
`;



function Switch () {
  const { changeTheme, darkmode } = useTheme();

  return (
    <SwitchStyled onClick={changeTheme} className={darkmode ? 'actived' : ''} >
      <Span><FaMoon /></Span>
      <Span><FaSun /></Span>
    </SwitchStyled>
  );
}

export default Switch;
