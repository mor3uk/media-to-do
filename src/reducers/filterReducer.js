export default (state = { statusFilter: 'all' }, action) => {
    switch (action.type) {
        case 'SET_STATUS_FILTER':
            return { ...state, statusFilter: action.statusFilter };
        default:
            return state;
    }
};