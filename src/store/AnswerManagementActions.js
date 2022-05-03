import { RESTART_ACTION, UPDATE_GOOD_ANSWERS_ACTION, UPDATE_SELECTEDANSWER_ID_ACTION } from "./AnswerManagementReducer";

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

export const restart = () => ({type: RESTART_ACTION})

export const updateNeedRestartApp = (bNeedRestartApp) => ({
    type: 'UPDATE_NEED_RESTART_APP_ACTION',
    payload: {...bNeedRestartApp, bNeedRestartApp: bNeedRestartApp}
})

export const updateCategorySelected = (categorySelected) => ({
    type: 'UPDATE_CATEGORY_SELECTED_ACTION',
    payload: {...categorySelected, categorySelected: categorySelected}
})

export const updateAnswerTraitment = (bAnswerTraitment) => ({
    type: 'UPDATE_ANSWER_TRAITMENT_ACTION',
    payload: {...bAnswerTraitment, bAnswerTraitment: bAnswerTraitment}
})