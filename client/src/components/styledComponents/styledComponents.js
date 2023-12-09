import { styled } from "styled-components";



export const Input = styled.input`
  background: ${props => props.$colors && props.$colors.bg_Primary};
  color: grey;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  font-weight: 300;
  
  &:focus { ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
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

export const Card = styled.div`
  box-shadow: 0 0 10px ${({$colors}) => $colors && $colors.shadowColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({width}) => width && width};
  margin: ${({$margin}) => $margin && $margin};
  padding: ${({$padding}) => $padding && $padding};
  border-radius: ${({$borderr}) => $borderr && $borderr};
  background: ${({$colors}) => $colors && $colors.bg_Secondary};
  ${({$background}) => $background ? `background: ${$background};` : ''}
  position: ${({$position}) => $position ? $position : 'relative'};
  ${({$center}) => $center ? 'top: 50%; left: 50%; transform: translate(-50%, -50%);' : ''}

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

export const Select = styled.select`
  background: ${({$colors}) => $colors && $colors.bg_Primary};
  color: grey;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  font-weight: 300;

  &:focus { ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} }
`;

export const Textarea = styled.textarea`
  background: ${({$colors}) => $colors && $colors.bg_Primary};
  color: grey;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  font-weight: 300;

  &:focus { ${({$outline}) => $outline && 'outline: 1px solid #40A8F5;'} }
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
