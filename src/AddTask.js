import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addTask(description);
      setDescription("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      mb={2}
      display="flex"
      justifyContent="center"
    >
      <TextField
        label="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
