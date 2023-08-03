import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes";

let counterInitialState = {a:0};

const counterReducer = (state=counterInitialState, actions) =>{
    switch(actions.type){
        case INCREMENT:
            return {...state, a: state.a + actions.payload}
            case DECREMENT:
                return {...state, a: state.a - actions.payload}
                case RESET:
                    return {...state, a: 0}
                    default:
                        return state;
    }
}

export default counterReducer;