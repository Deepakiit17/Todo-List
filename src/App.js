import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { Container, Typography, CssBaseline } from "@mui/material";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (description) => {
    const newTask = { id: Date.now(), description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Typography variant="h2" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    </Container>
  );
};

export default App;
