import { UPDATE_GOOD_ANSWERS_ACTION, UPDATE_SELECTEDANSWER_ID_ACTION } from "./AnswerManagementReducer";

export const updateSelectedAnswerId = (selectedAnswerId) => ({
    type: UPDATE_SELECTEDANSWER_ID_ACTION,
    payload: {...selectedAnswerId, selectedAnswerId: selectedAnswerId}
})

export const updateGoodAnswers = (goodAnswersIds) => ({
    type: UPDATE_GOOD_ANSWERS_ACTION,
    payload: {...goodAnswersIds, goodAnswersIds: goodAnswersIds}
})

export const updateScore = (scorePointsToAdd) => ({
    type: UPDATE_SELECTEDANSWER_ID_ACTION,
    payload: {...scorePointsToAdd, score: scorePointsToAdd}
})