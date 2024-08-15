import { createStore } from 'redux';
import taskReducer from './taskReducer.jsx';

const store = createStore(taskReducer);

export default store;
