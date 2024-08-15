import PropTypes from "prop-types"
import  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../store/actions.jsx'; // Correct path

function TaskForm({ editMode, currentTask, setEditMode }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      setTaskName(currentTask.name);
      setTaskDescription(currentTask.description);
    }
  }, [editMode, currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      if (editMode) {
        dispatch(editTask(currentTask.id, { ...currentTask, name: taskName, description: taskDescription }));
        setEditMode(false);
      } else {
        dispatch(addTask({ id: Date.now(), name: taskName, description: taskDescription, completed: false }));
      }
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">{editMode ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

TaskForm.propTypes = {
  currentTask: PropTypes.shape({
    description: PropTypes.any,
    id: PropTypes.any,
    name: PropTypes.any
  }),
  editMode: PropTypes.any,
  setEditMode: PropTypes.func
}

export default TaskForm;
