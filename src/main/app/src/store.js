import { createStore } from "redux";

function dialog(state = [], action) {
    if (action.type === 'PICK_BUTTON') {
        return [action.payload]
    }
    return state;
}

const store = createStore(dialog);

export default store;
