export const initialState = {
    score: 120,
    bestSerie: 0,
    selectedAnswerId: 0,
    goodAnswersIds: [],
};

export const UPDATE_SELECTEDANSWER_ID_ACTION = 'UPDATE_SELECTEDANSWER_ID_ACTION';

export function AnswerManagementReducer(state, action) {
    switch (action.type) {
        case UPDATE_SELECTEDANSWER_ID_ACTION:
            return {...state, ...action.payload.selectedAnswerId};
        default:
          return state;
    }
  }