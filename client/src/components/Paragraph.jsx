import { styled } from "styled-components";

const ParagraphComponent = styled.p`
  color: ${props => props.$color};
  font-size: ${props => props.$fontSize};
`;


function Paragraph ({ children, color, fontSize }) {
  return (
    <ParagraphComponent $color={color} $fontSize={fontSize}>
      {children}
    </ParagraphComponent>
  );
}

export default Paragraph;
