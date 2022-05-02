export const initialState = {
    score: 0,
    bestSerie: 0,
    ratio: 100,
    numberOfQuestionsAnswered: 0,
    selectedAnswerId: 0,
    goodAnswersIds: [],
};

export const RESTART_ACTION = 'RESTART_ACTION';
export const UPDATE_SELECTEDANSWER_ID_ACTION = 'UPDATE_SELECTEDANSWER_ID_ACTION';
export const UPDATE_GOOD_ANSWERS_ACTION = 'UPDATE_GOOD_ANSWERS_ACTION';
export const UPDATE_SCORE_ACTION = 'UPDATE_SCORE_ACTION';

export function AnswerManagementReducer(state, action) {
    switch (action.type) {
        case RESTART_ACTION:
            return initialState;
        case UPDATE_SELECTEDANSWER_ID_ACTION:
            if(state.goodAnswersIds.includes(action.payload.selectedAnswerId)){
                state.score++;
                state.bestSerie++;
            }else{
                state.bestSerie = 0;
            }

            state.numberOfQuestionsAnswered++;
            state.ratio = Math.round((state.score / state.numberOfQuestionsAnswered) * 100);
            return {...state, selectedAnswerId: action.payload.selectedAnswerId};
        case UPDATE_GOOD_ANSWERS_ACTION:
            return{...state, goodAnswersIds: action.payload.goodAnswersIds};
        case UPDATE_SCORE_ACTION:
            return{...state, ...state.score + action.payload.score};
        default:
          return state;
    }
  }