import { styled } from "styled-components";
import { useTheme } from "../context/themeContext";

const ButtonStyled = styled.button`
  border: none;
  display: flex;
  gap: 0.625rem;
  font-size: 1em;
  padding: 5px 12px;
  align-items: center;
  justify-content: center;
  color: ${({color}) => color ? color : 'white'};
  background: ${({$background}) => $background ? $background : 'transparent'};
  border-radius: ${props => props.$borderr};
  &:disabled {
    cursor: default;
    background: ${props => props.$colors.disabled};
  }
`;



function Button ({ background, color, text, icon, event, prevent, disabled, borderr }) {
  const { colors } = useTheme();
  const handleClick = (e) => {
    if (prevent) e.preventDefault();
    if (event) event();
  }

  return (
    <ButtonStyled 
      $colors={colors} 
      color={color} 
      $borderr={borderr} 
      $background={background} 
      onClick={handleClick} disabled={disabled}
    >
      {icon && icon}
      {text && text}
    </ButtonStyled>
  );
}

export default Button;
