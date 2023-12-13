import { styled } from "styled-components";


const TitleComponent = styled.h2`
  color: ${props => props.$color};
  margin: ${props => props.$margin};
  font-size: ${props => props.$fontSize};
  text-align: ${props => props.$textAlign};
  font-weight: ${props => props.$fontWeight};
`;


function Title ({ children, text, fontSize, fontWeight, color, margin, textAlign }) {
  return (
    <TitleComponent 
      $fontSize={fontSize} 
      $fontWeight={fontWeight} 
      $color={color} 
      $margin={margin}
      $textAlign={textAlign}
    >
      {text || children}
    </TitleComponent>
  );
}

export default Title;
