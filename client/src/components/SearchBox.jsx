import { Input, Row } from "./styledComponents/styledComponents";
import { useTheme } from "../context/themeContext";
import { FaSearch } from "react-icons/fa";

function SearchBox ({ search, handleSearchChange }) {
  const { colors } = useTheme();


  return (
    <Row 
      $background={colors.bg_Primary} 
      $padding="0 0.625rem" 
      $borderr="4px" 
      $margin="0 0.625rem 0 0" 
      width="100%"
    >
      <FaSearch />
      <Input 
        type="text" 
        placeholder='Search' 
        $colors={colors} 
        value={search} 
        onChange={handleSearchChange} 
      />
    </Row>
  );
}


export default SearchBox;
