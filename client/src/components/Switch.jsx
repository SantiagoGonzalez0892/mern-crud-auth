import { useTheme } from "../context/themeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { styled } from "styled-components";


const SwitchStyled = styled.div`
  background: #343D5B;
  border-radius: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background .4s ease;
  position: relative;

  &::after {
    content: '';
    background: white;
    width: 25px;
    height: 25px;
    border: 1px solid rgba(0, 0, 0, .25);
    box-shadow: 0 0 3px rgba(0, 0, 0, .75);
    border-radius: 50%;
    position: absolute;
    transition: transform .4s ease;
    top: -1px;
    left: -1px;
  }

  &.actived {
    background: orange;

    &::after { transform: translateX(100%); }
  }
`;

const Span = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: white;
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
