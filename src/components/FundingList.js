import React from 'react'
import FundingCard from './FundingCard'

const FundingList = ({funding}) => {
    return (
        <div className="funding-container">
            {
                funding.map(fund => (
                    <FundingCard key={fund.id} fund={fund}/>
    ))
            }
            </div>
    )
}

export default FundingList