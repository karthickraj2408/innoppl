import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../appSlice/todoSlice';
import { FaTimes } from 'react-icons/fa';

const TaskForm = ({ task, onClose }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            dispatch(editTask({ id: task.id, updatedTask: { title } }));
        } else {
            dispatch(addTask({ id: Date.now(), title, completed: false }));
        }
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4 mx-2">
              
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter task title"
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-950 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none max-md:px-2 max-md:text-[10px]"
        >
          {task ? 'Update' : 'Add'} Task
        </button>
        <FaTimes onClick={onClose} />
      </form>
    );
};

export default TaskForm;