import React from 'react'
import "./DS.css"

const DS = (props) => {
  return (
    <div className='ds'>
          <div className="ds_top">
            <h2> {props.type} </h2>
            <h3>{props.Companies}</h3>
          </div>
          <div className="ds_bott">
            <h3>{props.Question}</h3>
            <h3>{props.Link}</h3>
          </div>      
    </div>
  )
}

export default DS