import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from './mobile'
const Single = () => {
    const {params} = useParams()
    const findP = data.find(function(details){
        return details.id === Number(params)
    })
    const {name, loc} =findP
  return (
    <div>
        hello i am {name} <br/>
        and i live in {loc}
    </div>
  )
}

export default Single