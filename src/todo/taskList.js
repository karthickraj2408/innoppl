import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './taskItem';
import { setFilter } from '../appSlice/todoSlice';

const TaskList = ({onEdit }) => {
    const { tasks, filter } = useSelector((state) => state.todo);
    console.log(tasks);
    
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex space-x-2 mb-4">
          <button 
            onClick={() => dispatch(setFilter('all'))} 
            className="px-4 py-2 rounded-lg bg-blue-950 text-white font-semibold hover:bg-blue-600 focus:outline-none"
          >
            All
          </button>
          <button 
            onClick={() => dispatch(setFilter('completed'))} 
            className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 focus:outline-none"
          >
            Completed
          </button>
          <button 
            onClick={() => dispatch(setFilter('pending'))} 
            className="px-4 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 focus:outline-none"
          >
            Pending
          </button>
        </div>
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} onEdit={onEdit}/>
          ))}
        </ul>
      </div>
    );
};

export default TaskList;