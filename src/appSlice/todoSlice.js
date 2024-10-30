// src/features/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    filter: 'all', // Can be 'all', 'completed', or 'pending'
};

const todoSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            state.tasks = state.tasks.map(task =>
                task.id === id ? { ...task, ...updatedTask } : task
            );
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTaskStatus, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
