import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import LandingForm from './LandingForm'
import LandingList from './LandingList'

const Landing = () => {
  const [projects, setProjects] = useState([])
  const [updating, setUpdating] = useState(true)

  useEffect(() => {
    axiosWithAuth()
    .get('/api/projects')
    .then(res => {
      console.log(res)
      setProjects(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  
  }, [updating])

  return (
    <div>
      <LandingForm projects={projects} 
      updateProjects = {setProjects}
      setUpdating ={setUpdating}
      updating ={updating} />

      <LandingList projects={projects}/>
    </div>
  )
}



export default Landing