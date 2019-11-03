import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { editTask } from '../actions/tasks';

const EditTaskPage = ({ history, match, editTask }) => {
    const onSubmit = (updates) => {
        editTask(match.params.id, updates);
        history.push('/list');
    };
    return (
        <div>
            <h2>Edit a task</h2>
            <TaskForm id={match.params.id} onSubmit={onSubmit} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    editTask: (id, updates) => dispatch(editTask(id, updates))
});

export default connect(undefined, mapDispatchToProps)(EditTaskPage);