import * as types from './../constants/modal';

const InitialState = {
    showModal: false,
    title: '',
    component: null,
};

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case  types.SHOW_MODAL:
            return {
                ...state,
                showModal : true,
            };
        case types.HIDE_MODAL:
            return {
                ...state,
                showModal : false,
                title: '',
                component : null,
            };
        case types.CHANGE_MODAL_TITLE:
            return {
                ...state,
                title: action.payload.title,
            };
        case types.CHANGE_MODAL_CONTENT:
            return {
                ...state,
                component : action.payload.component,
            };
        default:
            return state;
    }
};

export default reducer;