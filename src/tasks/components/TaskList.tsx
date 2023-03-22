import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext } from '../TaskContext';
import TaskCard from './TaskCard';

const TaskList = () => {
	const { tasks } = useContext(TaskContext);

	return (
		<TaskListContainer>
			<TaskListHeader>Tasks</TaskListHeader>
			<TaskListContent>
				{tasks?.length === 0 ? (
					<TaskListEmpty>
						You have nothing to do.
						<br />
						Go get some sleep
					</TaskListEmpty>
				) : (
					<TaskListGrid>
						{tasks.map((task) => (
							<TaskCard key={task.id} task={task} />
						))}
					</TaskListGrid>
				)}
			</TaskListContent>
		</TaskListContainer>
	);
};

export default TaskList;

// styles
const TaskListContainer = styled.div`
	background: #1776ba;
	border-radius: 12px;
	margin-top: 20px;
`;

const TaskListHeader = styled.div`
	font-size: 16px;
	font-weight: 600;

	padding: 12px 24px;

	color: #ffffff;
`;

const TaskListContent = styled.div`
	background: #a1ceed;

	padding: 24px;

	border-radius: 12px;
`;

const TaskListEmpty = styled.div`
	font-size: 16px;
	font-weight: 400;
	text-align: center;

	margin: 50px 0;

	color: #000000;
`;

const TaskListGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 8px;
`;
