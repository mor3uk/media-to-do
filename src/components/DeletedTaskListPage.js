import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import filterTasks from '../selectors/filterTasks';

const DeletedTaskListPage = ({ tasks }) => (
    <div>
        <h2>Your deleted tasks</h2>
        <TaskList tasks={tasks} />
        <Link to="/list">Back to actual list</Link>
    </div>
);

const mapStateToProps = ({ tasks }) => ({
    tasks: filterTasks({ tasks, isDeleted: true, filters: { statusFilter: 'all' } })
});

export default connect(mapStateToProps)(DeletedTaskListPage);