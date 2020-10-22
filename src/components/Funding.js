import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FundingList from './FundingList'

const Funding = () => {
  const [funding, setFunding] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('/funding')
    .then(res => {
      console.log(res)
      setFunding(res.data.res)
    })
    .catch(err => {
      console.log(err)
    })
  
  }, [])

  return (
    <div>
     
      <FundingList funding={funding}/>
    </div>
  )
}



export default Funding