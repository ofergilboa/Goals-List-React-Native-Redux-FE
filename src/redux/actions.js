import { CHANGE_SEARCH_FIELD } from './constants'
import { CHANGE_IS_ADD_GOAL } from './constants'
import { CHANGE_ENTERED_GOAL } from './constants'


export const setSearchFieldAction = (text, dispatch) => {
    dispatch({
        type: CHANGE_SEARCH_FIELD,
        payload: text
    })
}

export const setIsAddGoalAction = (boolean, dispatch) => {
    dispatch({
        type: CHANGE_IS_ADD_GOAL,
        payload: boolean
    })
}

export const setEnteredGoalAction = (goal, dispatch)=>{
    dispatch({
        type: CHANGE_ENTERED_GOAL,
        payload: goal
    })
}

