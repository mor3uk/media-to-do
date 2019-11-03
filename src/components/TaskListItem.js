import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { restoreTask } from '../actions/tasks';

const TaskListItem = ({ task, restoreTask }) => {
    const handleRestoreTask = () => {
        restoreTask(task.id);
    };
    return (
        <div>
            {task.isDeleted ? (
                <div>
                    <span>{task.description}</span> -
                    <button onClick={handleRestoreTask}>Restore</button>
                </div>
            ) : (
                    <div>
                        <Link to={`/list/${task.id}`}>{task.description}</Link> -
                        <span>{task.status}</span>
                    </div>
                )}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    restoreTask: (id) => dispatch(restoreTask(id))
});

export default connect(undefined, mapDispatchToProps)(TaskListItem);