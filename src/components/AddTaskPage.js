import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../actions/tasks';

const AddTaskPage = ({ addTask, history }) => {
    const onSubmit = (task) => {
        addTask(task);
        history.push('/list');
    };
    return (
        <div>
            <h2>Add a new task</h2>
            <TaskForm onSubmit={onSubmit} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(addTask(task))
});

export default connect(undefined, mapDispatchToProps)(AddTaskPage);