import { styled } from "styled-components";
import { useTheme } from "../context/themeContext";

const Prueba = styled.div`
  margin: 15px;

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, max-content));

    li {
      text-align: center;
      border-bottom: 2px solid #c0c0c0;
      cursor: pointer;
      padding: 0 10px;

      &.selected {
        border-bottom: 2px solid #40A8F5;
      }
    }
  }
`;


function FilterBox ({ categories, filter, changeFilter }) {
  const { colors } = useTheme();


  return (
    <Prueba $colors={colors}>
      <ul>
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
    </Prueba>
  );
}


export default FilterBox;
