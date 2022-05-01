export const initialState = {
    score: 0,
    bestSerie: 0,
    selectedAnswerId: 0,
    goodAnswersIds: [],
};

export const RESTART_ACTION = 'RESTART_ACTION';
export const UPDATE_SELECTEDANSWER_ID_ACTION = 'UPDATE_SELECTEDANSWER_ID_ACTION';
export const UPDATE_GOOD_ANSWERS_ACTION = 'UPDATE_GOOD_ANSWERS_ACTION';

export function AnswerManagementReducer(state, action) {
    switch (action.type) {
        case RESTART_ACTION:
            return initialState;
        case UPDATE_SELECTEDANSWER_ID_ACTION:
            return {...state, selectedAnswerId: action.payload.selectedAnswerId};
        case UPDATE_GOOD_ANSWERS_ACTION:
            return{...state, ...action.payload.goodAnswersIds};
        default:
          return state;
    }
  }