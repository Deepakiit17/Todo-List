import React from "react";
import { ListItemText, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = ({ task, completeTask, removeTask }) => {
  return (
    <>
      <ListItemText
        primary={task.description}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      />
      <IconButton
        onClick={() => completeTask(task.id)}
        color={task.completed ? "default" : "primary"}
      >
        <CheckIcon />
      </IconButton>
      <IconButton onClick={() => removeTask(task.id)} color="secondary">
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default Task;
