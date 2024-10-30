import React, { useState } from 'react'
import Header from '../component/header'
import TaskForm from './taskForm';
import TaskList from './taskList';

const Todo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const openForm = (task) => {
        setSelectedTask(task);
        setIsEditing(true);
    };

    const closeForm = () => {
        setSelectedTask(null);
        setIsEditing(false);
    };
  return (
    <>
       <Header />

        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Task Management App</h1>
    <button 
        onClick={() => openForm(null)} 
        className="w-full mb-4 px-4 py-2 bg-blue-950 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
    >
        Add New Task
    </button>
    
    
    <TaskList onEdit={openForm}/>

    
    {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-2 max-md:flex">
      
            <TaskForm task={selectedTask} onClose={closeForm} />
        </div>
        </div>
    )}
    </div>
        </>
    
  )
}

export default Todo