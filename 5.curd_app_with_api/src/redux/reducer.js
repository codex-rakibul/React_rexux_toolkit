import * as types from "./actionType";
const initislState = {
    users: [],
    user: {},
    loading: true,
  };
  const useReducer = (state = initislState, action) => {
    switch (action.type) {
        case types.GET_USER:
           return {
            ...state,
            user: action.payload,
            loading: false
           };
      default:
        return state;
    }
  };
  
  export default useReducer;