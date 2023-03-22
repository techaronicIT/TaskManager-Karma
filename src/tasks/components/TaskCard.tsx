import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import { ITask } from '../types/ITask';
import styled from 'styled-components';

const TaskCard = ({ task }: { task: ITask }) => {
	return (
		<TaskCardContainer key={task.id}>
			<TaskCardTitle>{task.title}</TaskCardTitle>
			<TaskCardDescription>{task.description}</TaskCardDescription>
			<TaskCardFooter>
				<TaskCardStatus>{task.status}</TaskCardStatus>
				<Link to="edit" state={{ task }}>
					<FiEdit size={20} color="#000000" />
				</Link>
			</TaskCardFooter>
		</TaskCardContainer>
	);
};

export default TaskCard;

// styles
const TaskCardContainer = styled.div`
	padding: 12px;

	border-radius: 4px;

	background: #ffffff;
`;

const TaskCardTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
`;

const TaskCardDescription = styled.div`
	font-size: 14px;

	margin-top: 12px;

	height: 100px;
	overflow: hidden;
`;

const TaskCardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 32px;
`;

const TaskCardStatus = styled.div`
	background: #1776ba;
	color: #ffffff;

	padding: 4px 20px;

	border-radius: 4px;
`;
