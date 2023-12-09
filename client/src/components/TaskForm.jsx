import { Card, Input, Row, Col, Select, Textarea, BackgroundModal } from "./styledComponents/styledComponents";
import { FaTimes, FaPlus } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import Button from "./Button";
import {useEffect, useState} from "react";
import CategoryForm from "./CategoryForm";

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
      <Card $colors={colors} $margin="15px auto" $padding="20px" $borderr="8px" width="600px">
        <Row $justify="space-between" $margin="0 0 20px 0">
          <h2>{taskForm.title}</h2>
          <FaTimes onClick={closeModal} />
        </Row>
        <form action="">
          <Row $margin="0 0 15px 0">
            <Col>
              <label htmlFor="title">Title</label>
              <Input id="title" required name="title" type="text" placeholder="Title" $colors={colors} onChange={handleChange} value={taskForm.values.title} $outline={true} />
            </Col>
            <Col>
              <p>Category</p>
              <Row>
                <Select $colors={colors} name="category_id" onChange={handleChange} defaultValue={taskForm.values.category_id} $outline={true}>
                  {categories.map((category, key) => <option key={key} value={category._id}>{category.name}</option>)}
                </Select>
                <FaPlus onClick={() => changeCategoryModal(true)}/>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="description">Description <p style={{display: 'inline'}}>(Optional)</p></label>
              <Textarea required id="description" name="description" rows="3" placeholder="Category" $colors={colors} onChange={handleChange} value={taskForm.values.description} $outline={true} />
            </Col>
          </Row>
          <Row $justify="flex-end" $margin="20px 0 0 0">
            <Button text="Cancel" color="grey" event={closeModal}/>
            <Button background="#40A8F5" prevent={true} text={taskForm.btnText} event={() => formSubmit(taskForm.values._id, taskForm.values)} />
          </Row>
        </form>
        {taskForm.categoryFormVisible && <CategoryForm taskForm={taskForm} createCategory={createCategory} changeCategoryModal={changeCategoryModal} /> }
      </Card>
    </BackgroundModal>
  );
}


export default TaskForm;
