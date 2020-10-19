
export const initialState = {
    projects = [   
        {
            id: 1,
            project_id: 1,
            project_name: "Astro App - Translate Sign Language ",
            project_founder: "Astrofolic",
            project_description: "What do you write in a Astro project description",
            project_goal: "$10,000.00",
        },
        ],
  funding = [
        {
            id: 1,
            funding_id: 1,
            project_id: 1,
            project_name: "Astro App - Translate Sign Language ",
            project_description: "What do you write in a Astro project description",
            project_raised: "$2,670.00"
        },
    ],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TBD":
            const something = {
                id: Date.now(), 
            }
            return {
                ...state
            }
        default:
        return state;
    }
};