import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { styled } from "styled-components";
import { useRef } from "react";

const Prueba = styled.div`
  display: flex;
  margin: 0.937rem;
  align-items: center;
  & ul {
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      padding: 0 1em;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
      border-bottom: 2px solid #c0c0c0;
      &.selected {
        border-bottom: 2px solid #40A8F5;
      }
    }
  }
  button {
    border: none;
    display: flex;
    margin: 0 15px;
    color: #40A8F5;
    width: min-content;
    align-items: center;
    background: transparent;
  }
`;
const MoveBtnPrev = styled(FaChevronCircleLeft)`
  flex-shrink: 0;
  cursor: pointer;
  font-size: 1.5em;
  display: inline-block;
`;
const MoveBtnNext = styled(FaChevronCircleRight)`
  flex-shrink: 0;
  cursor: pointer;
  font-size: 1.5em;
  display: inline-block;
`;


function FilterBox ({ categories, filter, changeFilter }) {
  const { colors } = useTheme();
  const myRef = useRef(null);
  

  return (
    <Prueba $colors={colors}>
      <button onClick={() => myRef.current.scrollLeft -= 100}>
        <MoveBtnPrev /> 
      </button>
      <ul ref={myRef}>
        <li 
          onClick={() => changeFilter('All')}
          className={filter === 'All' ? 'selected' : ''}
        >ALL</li>
        {categories.map((category, key) => 
          <li 
            key={key} 
            onClick={(e) => changeFilter(category.name)}
            className={filter === category.name ? 'selected' : ''}
          >{category.name.toUpperCase()}</li>)}
      </ul>
      <button onClick={() => myRef.current.scrollLeft += 100}>
        <MoveBtnNext /> 
      </button>
    </Prueba>
  );
}


export default FilterBox;
