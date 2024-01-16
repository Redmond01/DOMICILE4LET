import React from 'react'
import Mobile from './mobile/Mobile'
import Tablet from './tablet/Tablet'
import Desktop from './desktop/Desktop'


const App = () => {
  return (
    <div className='bg-yellow-600'>
        <Mobile/>
        <Tablet/>
        <Desktop/>
    </div>
  )
}

export default App