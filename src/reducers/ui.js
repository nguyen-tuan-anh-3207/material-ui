import * as uiTypes from "./../constants/ui";

const INITIAL_STATE = {
  showLoading: false,
};

const  reducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiTypes.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case uiTypes.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
