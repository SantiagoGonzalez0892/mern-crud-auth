import { styled } from "styled-components";
import { useTheme } from "../context/themeContext";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useRef } from "react";

const Prueba = styled.div`
  margin: 0.937rem;
  display: flex;
  align-items: center;
  & ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      text-align: center;
      border-bottom: 2px solid #c0c0c0;
      cursor: pointer;
      padding: 0 1em;
      white-space: nowrap;
  
      &.selected {
        border-bottom: 2px solid #40A8F5;
      }
    }
  }
  button {
    width: min-content;
    margin: 0 15px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    color: #40A8F5;
  }
`;
const MoveBtnPrev = styled(FaChevronCircleLeft)`
  flex-shrink: 0;
  cursor: pointer;
  display: inline-block;
  font-size: 1.5em;
`;
const MoveBtnNext = styled(FaChevronCircleRight)`
  flex-shrink: 0;
  cursor: pointer;
  display: inline-block;
  font-size: 1.5em;
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
