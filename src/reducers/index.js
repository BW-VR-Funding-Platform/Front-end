import { 
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE,
    DELETE_PROJECT
} from '../actions/index'


export const initialState = {
    projects: [   
        {
            id: 1,
            project_id: 1,
            project_name: "Astro App - Translate Sign Language ",
            project_founder: "Astrofolic",
            project_description: "What do you write in a Astro project description",
            project_goal: "$10,000.00",
            isLoading: false,
            error: "",
        },
        ],
    funding: [
        {
            id: 1,
            funding_id: 1,
            project_id: 1,
            project_name: "Astro App - Translate Sign Language ",
            project_description: "What do you write in a Astro project description",
            project_raised: "$2,670.00",
            isLoading: false,
            error: "",
        },
    ],
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
                funding: action.payload,
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
            funding: [...state.funding],
            isLoading: true,
            error: "",
        }
        case "POST_SUCCESS":
            return {
                ...state,
                funding: action.payload,
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
        default:
        return state;
    }
};