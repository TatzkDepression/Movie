import { SET_INFO } from "../constant/userConst";

let user = JSON.parse(localStorage.getItem("USER"));

const initialState = {
    info: user,
};

export let userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_INFO: {
            return { ...state, info: payload };
        }
        default:
            return state;
    }
};
