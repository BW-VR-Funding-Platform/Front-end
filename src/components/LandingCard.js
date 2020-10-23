import React from 'react'

const LandingCard = ({project}) => {
    return (
        <div>
            <h2>{project.project_name}</h2>
             <h3>{project.project_founder}</h3>
            <h3>{project.project_description}</h3>
            <h4>{project.project_goal}</h4>
        </div>

    )

}

export default LandingCard