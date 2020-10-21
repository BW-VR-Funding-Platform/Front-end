import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { fetchFundraisers } from '../actions/index'

const initialFormValues = {
    project_name: "",
    project_founder: "",
    project_description: "",
    project_goal: ""
}

const Landing = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const changeHandler = evt => {
        setFormValues({...formValues, [evt.target.name]: evt.target.value})
    }

    const submitHandler = e => {
        e.preventDefault()
    }
    
    return (
      <div className="App">
        <form onSubmit={submitHandler}>
        <label> project name
            <input
             name="project_name"
              type="input"
               onChange={changeHandler}
                value={formValues.project_name}
                 placeholder="project name">
            </input>
            <br />
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
        <br />
  
        <label> project description
            <input
             name="project_description"
              type="text field"
               onChange={changeHandler}
                value={formValues.project_description}
                 placeholder="project description">
            </input>
        </label>
        <br />
  
        <label> project goal
            <input
             name="project_goal"
              type="number" 
              min="0" 
              step = "0.01"
               onChange={changeHandler}
                value={formValues.project_goal}
                 placeholder="Goal amount">
            </input>
        </label>
        <br />
        <button>Add Project</button>
    </form>
      </div>
    )
}

export default Landing