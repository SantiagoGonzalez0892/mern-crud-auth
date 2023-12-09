import { styled } from "styled-components";

const Tag = styled.span`
  display: inline-block;
  border-radius: 20px;
  padding: 3px 7px;
  font-weight: 400;
  font-size: 13px;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${props => props.$background};
  color: ${props => props.$color};
`;


function CategoryTag ({ value, color, background }) {
  return <Tag $color={color} $background={background} >{value}</Tag>
}

export default CategoryTag;
