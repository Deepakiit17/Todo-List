import React from "react";
import Task from "./Task";
import { List, ListItem, Typography } from "@mui/material";

const TaskList = ({ tasks, completeTask, removeTask }) => {
  return (
    <List>
      {tasks.length === 0 ? (
        <Typography variant="h6">No tasks available</Typography>
      ) : (
        tasks.map((task) => (
          <ListItem key={task.id} divider>
            <Task
              task={task}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          </ListItem>
        ))
      )}
    </List>
  );
};

export default TaskList;
