import { styled } from "styled-components";


const TitleComponent = styled.h2`
  color: ${props => props.$color};
  margin: ${props => props.$margin};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$fontWeight};
`;


function Title ({ children, text, fontSize, fontWeight, color, margin }) {
  return (
    <TitleComponent 
      $fontSize={fontSize} 
      $fontWeight={fontWeight} 
      $color={color} 
      $margin={margin}
    >
      {text || children}
    </TitleComponent>
  );
}

export default Title;
