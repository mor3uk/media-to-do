import uuid from 'uuid';

export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: uuid(), isDeleted: false, ...action.task }];
        case 'REMOVE_TASK':
            return state.map((task) => {
                if (task.id == action.id) {
                    return { ...task, isDeleted: true };
                }
                return task;
            });
        case 'EDIT_TASK':
            return state.map((task) => {
                if (task.id == action.id) {
                    return { ...task, ...action.updates };
                }
                return task;
            });
        case 'RESTORE_TASK':
            return state.map((task) => {
                if (task.id == action.id) {
                    return { ...task, isDeleted: false };
                }
                return task;
            });
        case 'SET_TASKS': 
            return action.tasks;
        default:
            return state;
    }
};