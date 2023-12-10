import { Card, Input, Row, Col, Select, Textarea, BackgroundModal, CardFooter, CardHeader, CardBody } from "./styledComponents/styledComponents";
import { FaTimes, FaPlus } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import Button from "./Button";
import {useEffect, useState} from "react";
import CategoryForm from "./CategoryForm";
import Title from "./Title";

function TaskForm ({ categories, taskForm, closeModal,changeCategoryModal, createCategory, setTaskForm, formSubmit }) {
  const { colors } = useTheme();

  const handleChange = (e) => {
    setTaskForm({
      ...taskForm,
      values: {
        ...taskForm.values,
        [e.target.name]: e.target.value
      }
    });
  }

  useEffect(() => {
    if (taskForm.values.category_id === '') {
      if (categories.length !== 0) {
        setTaskForm({...taskForm, values: { ...taskForm.values, category_id: categories[0]._id }});
      }
    }
  },[categories]);


  return (
    <BackgroundModal $colors={colors}>
      <Card $colors={colors} $margin="0.937rem auto" $padding="1.25em" $borderr="8px" width="600px">

        <CardHeader>
          <Title>{taskForm.title}</Title>
          <FaTimes onClick={closeModal} />
        </CardHeader>
        
        <form action="">
          <CardBody>
            <Row $margin="0 0 0.937rem 0">
              <Col>
                <label htmlFor="title">Title</label>
                <Input 
                  type="text" 
                  id="title" 
                  name="title" 
                  placeholder="Title" 
                  required 
                  $colors={colors} 
                  $outline={true} 
                  onChange={handleChange} 
                  value={taskForm.values.title} 
                />
              </Col>
              <Col>
                <p>Category</p>
                <Row>
                  <Select 
                    $colors={colors} 
                    name="category_id" 
                    onChange={handleChange} 
                    defaultValue={taskForm.values.category_id} 
                    $outline={true}
                  >
                    {categories.map((category, key) => 
                      <option key={key} value={category._id}>{category.name}</option>
                    )}
                  </Select>
                  <FaPlus onClick={() => changeCategoryModal(true)}/>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="description">Description <p style={{display: 'inline'}}>(Optional)</p></label>
                <Textarea 
                  name="description" 
                  id="description" 
                  placeholder="Category" 
                  rows="3" 
                  required 
                  $colors={colors} 
                  $outline={true} 
                  onChange={handleChange} 
                  value={taskForm.values.description} 
                />
              </Col>
            </Row>
          </CardBody>

          <CardFooter $margin="1.25rem 0 0 0">
            <Button 
              text="Cancel" 
              color="grey" 
              event={closeModal}
            />
            <Button 
              background="#40A8F5" 
              borderr="30px" 
              prevent={true} 
              text={taskForm.btnText} 
              event={() => formSubmit(taskForm.values._id, taskForm.values)} 
            />
          </CardFooter>

        </form>


        {taskForm.categoryFormVisible && <CategoryForm 
          taskForm={taskForm} 
          createCategory={createCategory} 
          changeCategoryModal={changeCategoryModal} 
        /> }

      </Card>
    </BackgroundModal>
  );
}


export default TaskForm;
