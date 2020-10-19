import react, { useState } from 'react'
import { initialState } from '../reducers'
import axiosWithAuth from '../utils/axiosWithAuth'
import { fetchFundraisers } from '../actions/index'

initialFormValues = {
    project_name: "",
    project_founder: "",
    project_description: "",
    project_goal: ""
}

const Landing = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const changeHandler = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    const submitHandler = e => {
        e.preventDefault()
    }
    
    return (
        <form onSubmit={submitHandler}>
            <label> project name
                <input
                 name="project_name"
                  type="input"
                   onChange={changeHandler}
                    value={formValues.project_name}
                     placeholder="project name">
                </input>
            </label>
            <label> project founder
                <input
                 name="project_founder"
                  type="input"
                   onChange={changeHandler}
                    value={formValues.project_founder}
                     placeholder="project founder">
                </input>
            </label>

            <label> project description
                <input
                 name="project_description"
                  type="text field"
                   onChange={changeHandler}
                    value={formValues.project_description}
                     placeholder="project description">
                </input>
            </label>

            <label> project goal
                <input
                 name="project_goal"
                  type="number" 
                  min="0" 
                  step = "0.01"
                   onChange={changeHandler}
                    value={formValues.project_goal}
                     placeholder="Enter an amount">
                </input>
            </label>
            <button>Add Project</button>
        </form>
    )
}

export default Landing