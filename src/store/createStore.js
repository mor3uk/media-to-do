import { createStore, combineReducers } from 'redux';
import tasksReducer from '../reducers/tasksReducer';
import filterReducer from '../reducers/filterReducer';
import sortReducer from '../reducers/sortReducer';

export default () => {
    const store = createStore(combineReducers({
        tasks: tasksReducer,
        filters: filterReducer,
        sortBy: sortReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
};