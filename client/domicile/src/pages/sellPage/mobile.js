import React from 'react'
import { Link} from 'react-router-dom'
export const  data = [
    {
        name:'first',
        id:1,
        loc:'ishara'
    },
    {
        name:'second',
        id:2,
        loc:'ode'
    },
    {
        name:'third',
        id:3,
        loc:'ipara'
    },
]
const Mobile = () => {

  return (
    <div>
        {data.map(function(details){
            return<div key={details.id}>
            hello my name is {details.name}
            and i live in {details.loc}
            <br/>
            <Link to={`/sell/${details.id}`}>clike here to see more</Link>
            <br/>
            </div>
        })}
    </div>
  )
}

export default Mobile