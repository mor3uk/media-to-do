import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTask } from '../actions/tasks';

const TaskItem = ({ task, removeTask, history }) => {
    const handleRemove = () => {
        removeTask(task.id);
        history.push('/list');
    };
    return (
        <div>
            <h2>Single task</h2>
            {task ? (
                <div>
                    <p>{task.description} - {task.status}</p>
                    <button onClick={handleRemove}>Remove</button>
                    <Link to={`/list/${task.id}/edit`}>Edit</Link>
                </div>
            ) : (
                    <p>No task found</p>
                )}
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    task: state.tasks.find((task) => task.id == props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    removeTask: (id) => dispatch(removeTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);