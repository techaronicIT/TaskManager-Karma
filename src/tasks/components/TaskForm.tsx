import React, { useContext, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';
import Button from '@mui/material/Button';
import { FiPlus, FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

import { TaskContext } from '../TaskContext';

import { ITask } from '../types/ITask';

const TaskForm = ({ task: oldTask }: { task?: ITask }) => {
	const taskId = useId();

	const [task, setTask] = useState<ITask>({
		id: oldTask?.id || taskId.toString(),
		title: oldTask?.title || '',
		description: oldTask?.description || '',
		status: oldTask?.status || 'ToDo',
	});

	const navigate = useNavigate();

	const { addTask, editTask } = useContext(TaskContext);

	const handleSubmit = () => {
		if (oldTask) {
			editTask(task);
		} else {
			console.log('task ');
			addTask(task);
		}
	};

	return (
		<FormContainer>
			<FormHeader>{oldTask ? 'Edit Task' : 'Add a new Task'}</FormHeader>
			<TextField id="title" label="Title" variant="filled" value={task?.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
			<TextField
				id="description"
				label="Description"
				multiline
				rows={4}
				variant="filled"
				value={task?.description}
				onChange={(e) => setTask({ ...task, description: e.target.value })}
			/>
			{oldTask && (
				<Select
					id="status"
					autoWidth
					label="Status"
					value={task?.status}
					onChange={(e) => setTask({ ...task, status: e.target.value as ITask['status'] })}
					variant="filled">
					{['ToDo', 'InProgress', 'InQA'].includes(oldTask?.status || 'ToDo') && <MenuItem value="ToDo">ToDo</MenuItem>}
					{['ToDo', 'InProgress'].includes(oldTask?.status || 'ToDo') && <MenuItem value="InProgress">InProgress</MenuItem>}
					{['InProgress', 'InQA'].includes(oldTask?.status || 'ToDo') && <MenuItem value="InQA">InQA</MenuItem>}
					{['InQA', 'Done'].includes(oldTask?.status || 'ToDo') && <MenuItem value="Done">Done</MenuItem>}
				</Select>
			)}
			<FormButtons>
				<ActionButton onClick={handleSubmit} variant="contained" startIcon={oldTask ? <FiEdit /> : <FiPlus />}>
					{oldTask ? 'Edit' : 'Add'}
				</ActionButton>
				{oldTask && (
					<CancelButton variant="contained" onClick={() => navigate(-1)}>
						Cancel
					</CancelButton>
				)}
			</FormButtons>
		</FormContainer>
	);
};

export default TaskForm;

// styles
const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	padding: 0 24px;
	margin-top: 16px;
`;

const FormHeader = styled.div`
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 8px;
`;

const FormButtons = styled.div`
	display: flex;
	gap: 8px;
`;

const ActionButton = styled(Button)`
	flex-grow: 1;
`;

const CancelButton = styled(Button)`
	flex-grow: 1;
	background-color: #e9eaec !important;
	color: #000000 !important;
`;
