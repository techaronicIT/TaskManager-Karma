import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import TaskProvider from './tasks/TaskContext';

import BaseLayout from './layouts/BaseLayout';

import MainTask from './tasks/pages/MainTask';
import EditTask from './tasks/pages/EditTask';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<TaskProvider>
				<Routes>
					<Route
						path={'/'}
						element={
							<BaseLayout>
								<MainTask />
							</BaseLayout>
						}
					/>
					<Route
						path={'/edit'}
						element={
							<BaseLayout>
								<EditTask />
							</BaseLayout>
						}
					/>
					<Route path={'*'} element={<Navigate to="/" />} />
				</Routes>
			</TaskProvider>
		</div>
	);
};

export default App;

