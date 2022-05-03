export const initialState = {
    score: 0,
    currentSerie: 0,
    bestSerie: 0,
    ratio: 100,
    numberOfQuestionsAnswered: 0,
    selectedAnswerId: 0,
    goodAnswersIds: [],
    categorySelected: 'ALL',
    bNeedRestartApp: false,
};

export const restartState = {
    score: 0,
    currentSerie: 0,
    bestSerie: 0,
    ratio: 100,
    numberOfQuestionsAnswered: 0,
    selectedAnswerId: 0,
    categorySelected: 'ALL',
    goodAnswersIds: [],
    bNeedRestartApp: true,
};

export const RESTART_ACTION = 'RESTART_ACTION';
export const UPDATE_SELECTEDANSWER_ID_ACTION = 'UPDATE_SELECTEDANSWER_ID_ACTION';
export const UPDATE_GOOD_ANSWERS_ACTION = 'UPDATE_GOOD_ANSWERS_ACTION';
export const UPDATE_SCORE_ACTION = 'UPDATE_SCORE_ACTION';
export const UPDATE_NEED_RESTART_APP_ACTION = 'UPDATE_NEED_RESTART_APP_ACTION';
export const UPDATE_CATEGORY_SELECTED_ACTION = 'UPDATE_CATEGORY_SELECTED_ACTION';

export function AnswerManagementReducer(state, action) {
    switch (action.type) {
        case RESTART_ACTION:
            return { ...restartState, restartState };
        case UPDATE_SELECTEDANSWER_ID_ACTION:
            if(state.goodAnswersIds.includes(action.payload.selectedAnswerId)){
                state.score++;
                state.currentSerie++;
                if(state.currentSerie > state.bestSerie) state.bestSerie = state.currentSerie;
            }else{
                state.currentSerie = 0;
            }

            state.numberOfQuestionsAnswered++;
            state.ratio = Math.round((state.score / state.numberOfQuestionsAnswered) * 100);
            return {...state, selectedAnswerId: action.payload.selectedAnswerId};
        case UPDATE_GOOD_ANSWERS_ACTION:
            return{...state, goodAnswersIds: action.payload.goodAnswersIds};
        case UPDATE_SCORE_ACTION:
            return{...state, ...state.score + action.payload.score};
        case UPDATE_NEED_RESTART_APP_ACTION:
            return{...state, bNeedRestartApp: action.payload.bNeedRestartApp};
        case UPDATE_CATEGORY_SELECTED_ACTION:
            return{...state, categorySelected: action.payload.categorySelected};
        default:
          return state;
    }
  }