import { styled } from "styled-components";
import {useTheme} from "../context/themeContext";

const ButtonStyled = styled.button`
  background: ${({$background}) => $background ? $background : 'transparent'};
  color: ${({color}) => color ? color : 'white'};
  padding: 5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: ${({$borderr}) => $borderr ? $borderr : '30px'};

  &:disabled {
    background: ${({$colors}) => $colors && $colors.disabled};
    cursor: default;
  }
`;



function Button ({ background, color, text, icon, event, prevent, borderr, disabled }) {
  const { colors } = useTheme();
  const handleClick = (e) => {
    if (prevent) e.preventDefault();
    if (event) event();
  }


  return (
    <ButtonStyled $colors={colors} color={color} $borderr={borderr} $background={background} onClick={handleClick} disabled={disabled}>
      {icon && icon}
      {text && text}
    </ButtonStyled>
  );
}


export default Button;
