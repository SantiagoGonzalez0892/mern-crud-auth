import { deleteTaskRequest, doneTaskRequest } from "../api/tasks";
import {useTheme} from "../context/themeContext";
import CategoryTag from "./CategoryTag";
import {Card, Col, Row} from "./styledComponents/styledComponents";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import {useEffect, useState} from "react";



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
    <Card $colors={colors} $borderr="8px" $padding="20px" style={{fontSize: '0.82rem'}} className={task.done && 'checked'} >
      <Row $margin="0 0 15px 0">
        <Col>
          <CategoryTag value={task.category_id.name} color={task.category_id.textColor} background={task.category_id.bgColor} />
        </Col>
        <Col style={{fontSize: '17px'}}>
          <Row $justify="flex-end">
            {task.done ? <MdOutlineCheckBox onClick={handleChecked} /> : <MdOutlineCheckBoxOutlineBlank onClick={handleChecked} />}
            <MdModeEdit onClick={editTask} />
            <FaTrashAlt onClick={() => deleteTask(task._id)} />
          </Row>
        </Col>
      </Row>
      <div className="card-body" style={{height: '100%'}}>
        <h3 style={{ marginBottom: '5px' }}>{task.title}</h3>
         <p>{task.description}</p>
      </div>
      <p style={{textAlign: 'end', margin: '15px 0 0 0'}}>{date}</p>
    </Card>
  );
}

export default TaskCard;
