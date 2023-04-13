import React from 'react'

const Child = ({id, handleClick}) => {
  return (
    <div className='child'>
       <h2>Child Component-{id}</h2>
       <button onClick={handleClick} id={id}>Option {id}</button>
    </div>
  )
}

export default Child