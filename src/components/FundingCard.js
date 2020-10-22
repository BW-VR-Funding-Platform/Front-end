import React from 'react'

const FundingCard = ( {fund} ) => {
    
    return (
        
        <div>
            <h2>{fund.project_name}</h2>
            <h3>{fund.project_description}</h3>
            <h4>{fund.project_raised}</h4>
        </div>

    )

}

export default FundingCard