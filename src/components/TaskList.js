import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tasks }) => (
    <div>
        {tasks.length == 0 && <p>List is empty</p>}
        {tasks.map((task) => <TaskListItem key={task.id} task={task} />)}
    </div>
);

export default TaskList;