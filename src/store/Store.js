import { createStore } from 'redux';
import { initialState, AnswerManagementReducer } from './AnswerManagementReducer';

// on crée le store avec le state et le reducer
export const store = createStore(AnswerManagementReducer, initialState);
