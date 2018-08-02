import React from 'react'

const withClassName = Component =>props=>(
    <Component {...props} className={props.newClass}/>
)

export default withClassName;