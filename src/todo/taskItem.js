
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../appSlice/todoSlice';

const TaskItem = ({ task,onEdit }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex items-center justify-between py-2 px-4 bg-gray-100 rounded-md mb-2 shadow-sm">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTaskStatus(task.id))}
            className="mr-2"
          />
          <span className={`text-gray-800 ${task.completed ? 'line-through' : ''}`}>{task.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onEdit(task)}
            className="px-2 py-1 text-blue-950 hover:text-blue-800 "
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="px-2 py-1 text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </li>
    );
};

export default TaskItem;
