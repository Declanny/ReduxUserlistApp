import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK_COMPLETION } from './actions.jsx';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { tasks: newTasks };
    case EDIT_TASK:
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.taskId ? action.payload.updatedTask : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { tasks: filteredTasks };
    case TOGGLE_TASK_COMPLETION:
      const toggledTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return { tasks: toggledTasks };
    default:
      return state;
  }
};

export default taskReducer;
