import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddTaskPage from '../components/AddTaskPage';
import EditTaskPage from '../components/EditTaskPage';
import TaskItem from '../components/TaskItem';
import TaskListPage from '../components/TaskListPage';
import DeletedTaskListPage from '../components/DeletedTaskListPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage.js';

const AppRouter = () => (
    <BrowserRouter>
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/list/add" component={AddTaskPage} />
                <Route path="/list/deleted" component={DeletedTaskListPage} />
                <Route path="/list/:id/edit" component={EditTaskPage} />
                <Route path="/list/:id" component={TaskItem} />
                <Route path="/list/" component={TaskListPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;