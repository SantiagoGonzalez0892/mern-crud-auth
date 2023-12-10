import { styled } from "styled-components";


export const PageVisualizer = styled.div`
  margin: 0 auto 1.25rem auto;
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

    svg { font-size: 1.375rem; }

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
    &.completed::after { width: 100%; }
  }
`;
