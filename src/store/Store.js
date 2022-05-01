import { createStore } from 'redux';
import { initialState, AnswerManagementReducer } from './AnswerManagementReducer';

// on crée le store avec le state et le reducer
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(AnswerManagementReducer, initialState, reduxDevtools);
