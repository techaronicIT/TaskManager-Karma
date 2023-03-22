import React, { createContext, useReducer } from 'react';
import { ITask } from './types/ITask';

export const TaskContext = createContext({
	tasks: [] as ITask[],
	addTask: (task: ITask) => {},
	editTask: (task: ITask) => {},
});

const TaskReducer = (state: ITask[], action: { type: 'ADD_TASK' | 'EDIT_TASK' | undefined; payload: ITask }) => {
	switch (action.type) {
		case 'ADD_TASK':
			return [...state, action.payload];
		case 'EDIT_TASK':
			return state.map((task) => (task.id === action.payload.id ? action.payload : task));
		default:
			return state;
	}
};

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
	const [tasks, dispatch] = useReducer(TaskReducer, []);

	const addTask = (task: ITask) => {
		dispatch({ type: 'ADD_TASK', payload: task });
	};

	const editTask = (task: ITask) => {
		dispatch({ type: 'EDIT_TASK', payload: task });
	};

	return <TaskContext.Provider value={{ tasks, addTask, editTask }}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
