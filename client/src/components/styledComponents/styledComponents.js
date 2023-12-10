import { styled } from "styled-components";



export const Input = styled.input`
  background: ${props => props.$colors && props.$colors.bg_Primary};
  color: grey;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  font-weight: 300;
  &:focus { 
    ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} 
  }
`;


export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.937rem;
  justify-content: ${({$justify}) => $justify && $justify};
  margin: ${({$margin}) => $margin && $margin};
  padding: ${({$padding}) => $padding && $padding};
  border-radius: ${({$borderr}) => $borderr && $borderr};
  background: ${({$background}) => $background && $background};
`;


export const Col = styled.div`
  flex-basis: 100px;
  flex-grow: 1;
  margin: ${({$margin}) => $margin && $margin};
  padding: ${({$padding}) => $padding && $padding};
  border-radius: ${({$borderr}) => $borderr && $borderr};
  background: ${({$background}) => $background && $background};
`;





export const Select = styled.select`
  background: ${({$colors}) => $colors && $colors.bg_Primary};
  color: grey;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  font-weight: 300;
  &:focus { 
    ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} 
  }
`;


export const Textarea = styled.textarea`
  background: ${({$colors}) => $colors && $colors.bg_Primary};
  color: grey;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  font-weight: 300;
  &:focus { 
    ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} 
  }
`;


export const BackgroundModal = styled.div`
  background: ${({$colors}) => $colors && $colors.bg_Transparent};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;


export const InputSubmit = styled.input`
  background: ${({$background}) => $background ? $background : 'transparent'};
  color: ${({color}) => color ? color : 'white'};
  padding: 5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 30px;
`;


export const SVG = styled.img`
  width: ${({width}) => width && width};
  height: ${({height}) => height && height};
`;













export const Card = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.25rem;
  width: ${props => props.width && props.width};
  margin: ${props => props.$margin && props.$margin};
  background: ${props => props.$colors && props.$colors.bg_Secondary};
  border-radius: ${props => props.$borderr && props.$borderr};
  box-shadow: 0 0 10px ${props => props.$colors && props.$colors.shadowColor};
  position: ${props => props.$position ? props.$position : 'relative'};
  ${props => props.$background && `background: ${props.$background};`}
  ${props => props.$center && 'top: 50%; left: 50%; transform: translate(-50%, -50%);'}
  &.checked {
    background: rgba(255, 255, 255, .2);
    text-decoration: line-through;
    color: grey;
    & span {
      background: grey !important;
      color: black !important;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
