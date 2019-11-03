export default (state = 'order', action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return action.sortBy;
        default:
            return state;
    }
};