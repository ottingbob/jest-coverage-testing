import { combineReducers } from 'redux';

const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DATA':
      let updatedState = { ...state, payload: action.payload };
      return updatedState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer
});

export default rootReducer;
