import { 
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE,
    DELETE_PROJECT,
    EDIT_PROJECT
} from '../actions/index'


 const initialState = {
    projects: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                projects: action.payload,
                isLoading: false,
                error: "",
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "POST_START": 
        return {
            ...state,
            projects: [...state.projects],
            isLoading: true,
            error: "",
        }
        case "POST_SUCCESS":
            return {
                ...state,
                projects: action.payload,
                isLoading: true,
                error: "",
            }
        case "POST_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "DELETE_PROJECT":
            return {
                ...state,
                projects: state.projects.map(item => {
                    return item.id !== action.payload
                })
            } 
            case "EDIT_PROJECT":
                return {
                    ...state,
                    projects:[...state.projects, action.payload]
                }
        default:
        return state;
    }
};