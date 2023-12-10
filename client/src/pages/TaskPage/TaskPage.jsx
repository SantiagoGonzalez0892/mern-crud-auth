import { createTaskRequest, getTasksRequest, editTaskRequest, deleteTaskRequest, doneTaskRequest } from '../../api/tasks.js';
import { createCategoryRequest, getCategoriesRequest } from '../../api/categories.js';
import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useTheme } from '../../context/themeContext'
import Button from '../../components/Button.jsx';
import Aside from '../../components/Aside.jsx';
import TaskCard from '../../components/TaskCard.jsx';
import TaskForm from '../../components/TaskForm.jsx';
import FilterBox from '../../components/FilterBox.jsx';
import SearchBox from '../../components/SearchBox.jsx';
import NoTask from '../../components/NoTask.jsx';

import { TasksContainer, MainStyled, Top, TaskPageStyled } from './TasPage.style';



function TaskPage () {
  const { colors} = useTheme();
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [taskFiltered, setTaskFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [taskForm, setTaskForm] = useState({
    taskFormVisible: false,
    categoryFormVisible: false,
    btnText: 'Add',
    title: 'Add task',
    values: {
      title: '',
      description: '',
      done: false,
      category_id: '',
    }
  });


  const getCategories = async() => {
    try {
      const res = await getCategoriesRequest();
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const createCategory = async (datos) => {
    try {
      const res = await createCategoryRequest(datos);
      setCategories([...categories, res.data]);
      setTaskForm({...taskForm, categoryFormVisible: false, values: { ...taskForm.values, category_id: res.data._id }});
    } catch (error) {
      console.log(error);
    }
  }
  const closeModal = () => {
    setTaskForm({...taskForm, taskFormVisible: false, values: {
      title: '',
      description: '',
      done: false,
      category_id: '',
    }});
  }
  const changeCategoryModal = (boolean) => {
    setTaskForm({...taskForm, categoryFormVisible: boolean});
  }
  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const createTask = async (form) => {
    try {
      const res = await createTaskRequest(form);
      setTasks(res.data);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }
  const deleteTask = async (taskId) => {
    try {
      const res = await deleteTaskRequest(taskId);
      let newTasksList = tasks.filter((task) => task._id !== res.data._id);
      setTasks(newTasksList);
    } catch (error) {
      console.log(error);
    }
  }
  const doneTask = async (id, done) => {
    try {
      const res = await doneTaskRequest(id, done);
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const editTask = async (id, form) => {
    try {
      const res = await editTaskRequest(id, form);
      setTasks(res.data);
      closeModal();
    } catch (error) {
      console.log(error)
    }
  }
  const formSubmit = (id, form) => {
    if (taskForm.btnText === 'Add') createTask(form);
    else editTask(id, form);
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }
  const changeFilter = (value) => {
    setFilter(value)
  }
  const changeToEdit = () => {
    setTaskForm({...taskForm, taskFormVisible: true, title: "Add task", btnText: "Add"});
  }


  useEffect(() => {
    getTasks();
    getCategories();
  },[]);

  useEffect(() => {
    if (tasks.length != 0) {
      let searchFilter = tasks.filter((task) => task.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      if (filter === 'All') {
        setTaskFiltered(searchFilter);
      } else {
        let categoryFilter = searchFilter.filter((task) => task.category_id.name === filter);
        setTaskFiltered(categoryFilter);
      }
    } else {
      setTaskFiltered([]);
    }
  }, [search, tasks, filter]);



  return (
    <TaskPageStyled>
      <MainStyled>

        <Top $colors={colors}>
          <SearchBox 
            search={search} 
            setSearch={setSearch} 
            handleSearchChange={handleSearchChange} 
          />
          <Button 
            icon={<FaPlus />} 
            text="Add" 
            background="#40A8F5" 
            borderr="30px" 
            event={changeToEdit} 
          />
        </Top>

        <FilterBox categories={categories} filter={filter} changeFilter={changeFilter} />

        <TasksContainer>
          {taskFiltered.map((task, key) => 
            <TaskCard 
              key={key} 
              task={task} 
              deleteTask={deleteTask} 
              doneTask={doneTask} 
              taskForm={taskForm} 
              setTaskForm={setTaskForm} 
            />
          )}
        </TasksContainer>

        {taskForm.taskFormVisible && <TaskForm 
          categories={categories} 
          taskForm={taskForm}
          closeModal={closeModal}
          createCategory={createCategory}
          changeCategoryModal={changeCategoryModal}
          formSubmit={formSubmit}
          setTaskForm={setTaskForm}
        />}
        
        <NoTask  taskFiltered={taskFiltered} filter={filter} tasks={tasks} />
      </MainStyled>
      <Aside tasks={tasks} />
    </TaskPageStyled>
  )
}

export default TaskPage;
//202
