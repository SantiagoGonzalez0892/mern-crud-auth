import { styled } from "styled-components";
import { Card } from "../../components/styledComponents/styledComponents";


export const PageVisualizer = styled.div`
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #ccc;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 30px;
    position: relative;
    transition: background .7s;
    svg {
      font-size: 1.375rem; 
    }
    &::after {
      content: '';
      width: 24px;
      height: 24px;
      background: ${props => props.$colors.bg_Secondary};
      border-radius: 50%;
    }
    &.actual {
      background: ${props => props.$colors.bg_Secondary};
      box-shadow: 0 0 4px ${props => props.$colors.shadowColor};
      &::after {
        content: '';
        width: 18px;
        height: 18px;
        background: #40A8F5;
        border-radius: 50%;
        position: absolute;
        top: 6px;
        left: 6px;
        transition: background .4s;
      }
    }
    &.completed {
      background: #40A8F5;
      &::after {
        display: none;
      }
    }
  }
  div {
    width: 100px;
    height: 3px;
    background: #ccc;
    position: relative;
    &::after {
      content: '';
      width: 0%;
      height: 3px;
      background: #40A8F5;
      position: absolute;
      top: 0;
      left: 0;
      transition: width .4s;
    }
    &.completed::after {
      width: 100%; 
    }
  }
`;
export const SliderContainer = styled.div`
  width: calc(100vw - 40px);
  max-width: 900px;
  overflow: hidden;
`;
export const Slider = styled.ul`
  display: flex;
  width: 200%;
  transition: transform .4s ease;
  &.actived {
    transform: translateX(-50%);
  }
  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1px;
    &:nth-child(2) {
      padding:0 10px;
    }
  }
`;
export const CardItem = styled(Card)`
  // width: ${props => props.width};
  // height: ${props => props.height};


  width: 25%;
  min-width: 95px;
  max-width: 155px;





  cursor: pointer;
  transition: transform .25s;
  &.selected {
    border: 1px solid #40A8F5;
    box-shadow: 0 0 10px #40A8F5cc;
    transform: scale(1.1);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

