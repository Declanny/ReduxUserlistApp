import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem'; // Ensure the path is correct
import TaskForm from './TaskForm'; // Ensure the path is correct

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const [editMode, setEditMode] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <div>
      <TaskForm
        editMode={editMode}
        currentTask={currentTask}
        setEditMode={setEditMode}
      />
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            setEditMode={setEditMode}
            setCurrentTask={setCurrentTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
