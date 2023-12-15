import { styled } from "styled-components";

const Tag = styled.span`
  padding: 3px 7px;
  font-weight: 400;
  font-size: 0.8125em;
  white-space: nowrap;
  border-radius: 20px;
  display: inline-block;
  text-overflow: ellipsis;
  color: ${props => props.$color};
  background: ${props => props.$background};
`;


function CategoryTag ({ value, color, background }) {
  return <Tag $color={color} $background={background} >{value}</Tag>
}

export default CategoryTag;
