import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import filterTasks from '../selectors/filterTasks';
import { setStatusFilter } from '../actions/filters';
import { setSortBy } from '../actions/sort';

const TaskListPage = (props) => {
    const [statusFilter, setStatusFilter] = useState(props.statusFilter);
    const [sortBy, setSortBy] = useState(props.sortBy);
    const handleFilterChange = (e) => {
        setStatusFilter(e.target.value);
        props.setStatusFilter(e.target.value);
    };
    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
        props.setSortBy(e.target.value);
    };
    return (
        <div>
            <h2>Your actual tasks</h2>
            <label htmlFor="status">Filter tasks by</label>
            <select id="status" value={statusFilter} onChange={handleFilterChange}>
                <option>all</option>
                <option>completed</option>
                <option>in progress</option>
                <option>not completed</option>
            </select>
            <label htmlFor="sort">Sort tasks by</label>
            <select id="sort" value={sortBy} onChange={handleSortByChange}>
                <option>order</option>
                <option>name</option>
            </select>
            <TaskList tasks={props.tasks} />
            <Link to="/list/add">Create task</Link>
            <Link to="/list/deleted">Watch deleted tasks</Link>
        </div>
    );
};

const mapStateToProps = ({ tasks, filters, sortBy }) => ({
    tasks: filterTasks({ tasks, isDeleted: false, filters, sortBy }),
    statusFilter: filters.statusFilter,
    sortBy
});

const mapDispatchToProps = (dispatch) => ({
    setStatusFilter: (statusFilter) => dispatch(setStatusFilter(statusFilter)),
    setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);