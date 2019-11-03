import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import createStore from './store/createStore';
import { setTasks } from './actions/tasks';

import './styles/styles.scss';
import 'normalize.css';

const store = createStore();
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

store.dispatch(setTasks(tasks));
store.subscribe(() => {
    const tasksJSON = JSON.stringify(store.getState().tasks);
    localStorage.setItem('tasks', tasksJSON);
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));