// get task id from params and edit accordingly in typescript
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const TaskEdit = () => {
	const { state } = useLocation();
	return !state?.task ? <Navigate to="/" /> : <TaskForm task={state?.task} />;
};

export default TaskEdit;
