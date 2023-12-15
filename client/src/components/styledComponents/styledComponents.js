import { styled } from "styled-components";



export const Input = styled.input`
  color: grey;
  width: 100%;
  border: none;
  font-weight: 300;
  padding: 7px 10px;
  border-radius: 4px;
  background: ${props => props.$colors && props.$colors.bg_Primary};
  &:focus { 
    ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} 
  }
`;

export const Row = styled.div`
  width: 100%;
  gap: 0.937rem;
  display: flex;
  align-items: center;
  margin: ${({$margin}) => $margin && $margin};
  padding: ${({$padding}) => $padding && $padding};
  background: ${({$background}) => $background && $background};
  border-radius: ${({$borderr}) => $borderr && $borderr};
  justify-content: ${({$justify}) => $justify && $justify};
`;

export const Col = styled.div`
  flex-grow: 1;
  flex-basis: 100px;
  margin: ${({$margin}) => $margin && $margin};
  padding: ${({$padding}) => $padding && $padding};
  background: ${({$background}) => $background && $background};
  border-radius: ${({$borderr}) => $borderr && $borderr};
`;

export const Select = styled.select`
  color: grey;
  width: 100%;
  border: none;
  font-weight: 300;
  padding: 7px 10px;
  border-radius: 4px;
  background: ${({$colors}) => $colors && $colors.bg_Primary};
  &:focus { 
    ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} 
  }
`;

export const Textarea = styled.textarea`
  color: grey;
  width: 100%;
  border: none;
  font-weight: 300;
  padding: 7px 10px;
  border-radius: 4px;
  background: ${({$colors}) => $colors && $colors.bg_Primary};
  &:focus { 
    ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} 
  }
`;

export const BackgroundModal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: ${({$colors}) => $colors && $colors.bg_Transparent};
`;

export const InputSubmit = styled.input`
  gap: 10px;
  border: none;
  display: flex;
  padding: 5px 12px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  color: ${({color}) => color ? color : 'white'};
  background: ${({$background}) => $background ? $background : 'transparent'};
`;

export const SVG = styled.img`
  width: ${({width}) => width && width};
  height: ${({height}) => height && height};
`;

export const Card = styled.div`
  gap: 1.25rem;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: start;
  width: ${props => props.width && props.width};
  margin: ${props => props.$margin && props.$margin};
  background: ${props => props.$colors && props.$colors.bg_Secondary};
  border-radius: ${props => props.$borderr && props.$borderr};
  box-shadow: 0 0 10px ${props => props.$colors && props.$colors.shadowColor};
  position: ${props => props.$position ? props.$position : 'relative'};
  ${props => props.$background && `background: ${props.$background};`}
  ${props => props.$center && 'top: 50%; left: 50%; transform: translate(-50%, -50%);'}
  &.checked {
    color: grey;
    text-decoration: line-through;
    background: rgba(255, 255, 255, .2);
    & span {
      color: black !important;
      background: grey !important;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin: ${props => props.$margin && props.$margin};
`;
