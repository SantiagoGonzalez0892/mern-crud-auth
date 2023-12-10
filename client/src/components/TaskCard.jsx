import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, Row } from "./styledComponents/styledComponents";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useTheme } from "../context/themeContext";
import CategoryTag from "./CategoryTag";
import Paragraph from "./Paragraph";
import Title from "./Title";



function TaskCard ({task, deleteTask, doneTask, taskForm, setTaskForm }) {
  const { colors } = useTheme();
  const [date, setDate] = useState();


  const handleChecked = () => {
    doneTask(task._id, { done: !task.done});
  }
  const editTask = () => {
    setTaskForm({
      ...taskForm,
      taskFormVisible: true,
      btnText: 'Edit',
      title: 'Edit task',
      values: {
        ...taskForm.values,
        _id: task._id,
        title: task.title,
        description: task.description,
        done: task.done,
        category_id: task.category_id._id,
      }
    });
  }
  

  useEffect(() => {
    setDate(new Date(task.createdAt).toLocaleDateString());
  },[]);


  return (
    <Card $colors={colors} $borderr="8px" className={task.done && 'checked'} >
      <CardHeader>
        <CategoryTag 
          value={task.category_id.name} 
          color={task.category_id.textColor} 
          background={task.category_id.bgColor} 
        />
        <Row $justify="end">
          {task.done ? 
            <MdOutlineCheckBox onClick={handleChecked} /> : 
            <MdOutlineCheckBoxOutlineBlank onClick={handleChecked} />
          }
          <MdModeEdit onClick={editTask} />
          <FaTrashAlt onClick={() => deleteTask(task._id)} />
        </Row>
      </CardHeader>

      <CardBody>
        <Title fontSize="0.82em">{task.title}</Title>
        <Paragraph fontSize="0.82em">{task.description}</Paragraph>
      </CardBody>

      <CardFooter>
        <Paragraph fontSize="0.78em">{date}</Paragraph>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
