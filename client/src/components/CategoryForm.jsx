import { BackgroundModal, Card, CardHeader, Input, Row } from "./styledComponents/styledComponents";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useTheme } from "../context/themeContext";
import { FaTimes } from "react-icons/fa";
import { styled } from "styled-components";
import Button from "./Button";
import Title from "./Title";


const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  &.selected {
    border: 1px solid;
    transform: scale(1.4)
  }
  &#blue { background-color: rgba(52, 152, 219, .6); }
  &#red { background-color: rgba(231, 76, 60, .6); }
  &#green { background-color: rgba(46, 204, 113, .6); }
  &#purple { background-color: rgba(155, 89, 182, .6); }
  &#yellow { background-color: rgba(241, 196, 15, .6); }
  &#teal { background-color: rgba(26, 188, 156, .6); }
  &#pink { background-color: rgba(255, 89, 89, .6); }
  &#orange { background-color: rgba(245, 176, 65, .6); }
`;

const selectedInit = { blue: false, green: false, red: false, purple: false, yellow: false, teal: false, pink: false, orange: false }


function CategoryForm ({ createCategory, changeCategoryModal }) {
  const { colors } = useTheme();
  const [datos, setDatos] = useState({ selected: selectedInit, themeColor: '', name: '' });


  useEffect(() => {
    setDatos({ ...datos, selected: { ...selectedInit, blue: true }, themeColor: 'blue' });
  },[]);

  const changeColor = (e) => {
    const key = e.target.id;
    setDatos({ ...datos, selected: {...selectedInit, [key]: true}, themeColor: key });
  }
  const changeValue = (e) => {
    setDatos({ ...datos, name: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(datos);
  }


  return (
    <BackgroundModal $colors={colors}>
      <Card 
        $colors={colors} 
        width="300px" 
        $margin="auto" 
        $padding="20px" 
        $borderr="8px" 
        $position="absolute" 
        $center="true"
      >
        <CardHeader>
          <Title>Add category</Title>
          <FaTimes onClick={() => changeCategoryModal(false)}/>
        </CardHeader>

        <form action="" onSubmit={handleSubmit}>
          <Row>
            <Input 
              type="text" 
              placeholder="Category" 
              $colors={colors} 
              onChange={changeValue} 
              $outline={true} 
            />
            <Button icon={<IoMdSend />} color="#40A8F5" />
          </Row>
        </form>
        <Row>
          <Circle onClick={changeColor} className={datos.selected.blue && 'selected'} id="blue" />
          <Circle onClick={changeColor} className={datos.selected.red && 'selected'} id="red" />
          <Circle onClick={changeColor} className={datos.selected.green && 'selected'} id="green" />
          <Circle onClick={changeColor} className={datos.selected.purple && 'selected'} id="purple" />
          <Circle onClick={changeColor} className={datos.selected.yellow && 'selected'} id="yellow" />
          <Circle onClick={changeColor} className={datos.selected.teal && 'selected'} id="teal" />
          <Circle onClick={changeColor} className={datos.selected.pink && 'selected'} id="pink" />
          <Circle onClick={changeColor} className={datos.selected.orange && 'selected'} id="orange" />
        </Row>

      </Card>
    </BackgroundModal>
  );
}

export default CategoryForm;
