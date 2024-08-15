import PropTypes from "prop-types"
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../store/actions.jsx'; // Correct path

function TaskItem({ task, setEditMode, setCurrentTask }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    setCurrentTask(task);
    setEditMode(true);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => dispatch(toggleTaskCompletion(task.id))}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
}

TaskItem.propTypes = {
  setCurrentTask: PropTypes.func,
  setEditMode: PropTypes.func,
  task: PropTypes.shape({
    completed: PropTypes.any,
    description: PropTypes.any,
    id: PropTypes.any,
    name: PropTypes.any
  })
}

export default TaskItem;
