import * as actionTypes from './ActionTypes';

export const updateAge = age => {
    return {
        type: actionTypes.AGE_UPDATE,
        value: age
    }
}

export const waitAndUpdateAge = age => {

    return (dispatch, getState) => {
        console.log("State: ", getState())
        setTimeout(() => {
            dispatch(updateAge(age))
        }, 4000)
    }
}