import * as actionTypes from './ActionTypes';

const initialState = {
    age: 32,
    name: "Peter",
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AGE_UPDATE:
            return {
                ...state,
                age: action.value
            }
    }

    return state;
}

export { reducer };