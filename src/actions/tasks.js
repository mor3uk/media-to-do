export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
});

export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    id
});

export const editTask = (id, updates) => ({
    type: 'EDIT_TASK',
    id,
    updates
});

export const restoreTask = (id) => ({
    type: 'RESTORE_TASK',
    id
});

export const setTasks = (tasks) => ({
    type: 'SET_TASKS',
    tasks
});