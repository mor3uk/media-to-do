import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const TaskForm = ({ task, onSubmit }) => {
    const [status, setStatus] = useState(task ? task.status : 'Not completed');
    const [description, setDescription] = useState(task ? task.description : '');
    const [error, setError] = useState('');
    useEffect(() => {
        if (!description.trim()) {
            setError('Type the description');
        } else {
            setError('');
        }
    }, [description]);
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!error) {
            onSubmit({ status, description });
        }
    };
    return (
        <form onSubmit={handleFormSubmit}>
            {error && <span>{error}</span>}
            <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Type the description for your task"
            >
            </textarea>
            {task && (
                <select value={status} onChange={handleStatusChange}>
                    <option>not completed</option>
                    <option>in progress</option>
                    <option>completed</option>
                </select>
            )}
            <button>Apply</button>
        </form>
    );
};

const mapStateToProps = (state, { id }) => ({
    task: state.tasks.find((task) => task.id == id)
});

export default connect(mapStateToProps)(TaskForm);