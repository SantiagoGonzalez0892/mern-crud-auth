import { styled } from "styled-components";
import { Card } from "../../components/styledComponents/styledComponents";


export const PageVisualizer = styled.div`
  margin: 0 auto;
  align-items: center;
  display: inline-flex;
  span {
    width: 30px;
    height: 30px;
    color: white;
    display: flex;
    background: #ccc;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    position: relative;
    align-items: center;
    justify-content: center;
    transition: background .7s;
    svg {
      font-size: 1.375rem; 
    }
    &::after {
      content: '';
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${props => props.$colors.bg_Secondary};
    }
    &.actual {
      background: ${props => props.$colors.bg_Secondary};
      box-shadow: 0 0 4px ${props => props.$colors.shadowColor};
      &::after {
        content: '';
        top: 6px;
        left: 6px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        position: absolute;
        background: #40A8F5;
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
    height: 3px;
    width: 100px;
    background: #ccc;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: #40A8F5;
      transition: width .4s;
    }
    &.completed::after {
      width: 100%; 
    }
  }
`;
export const SliderContainer = styled.div`
  max-width: 900px;
  overflow: hidden;
  width: calc(100vw - 40px);
`;
export const Slider = styled.ul`
  width: 200%;
  display: flex;
  transition: transform .4s ease;
  &.actived {
    transform: translateX(-50%);
  }
  li {
    padding: 1px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:nth-child(2) {
      padding:0 10px;
    }
  }
`;
export const CardItem = styled(Card)`
  width: 25%;
  cursor: pointer;
  min-width: 95px;
  max-width: 155px;
  transition: transform .25s;
  &.selected {
    transform: scale(1.1);
    border: 1px solid #40A8F5;
    box-shadow: 0 0 10px #40A8F5cc;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
