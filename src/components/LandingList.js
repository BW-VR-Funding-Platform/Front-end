import React from 'react'
import LandingCard from './LandingCard'

const LandingList = ({ projects }) => {
    return (
        <div className="funding-container">
            {
                projects.map(project => (
                    <LandingCard key={project.id} project={project}/>
    ))
            }
            </div>
    )
}
export default LandingList