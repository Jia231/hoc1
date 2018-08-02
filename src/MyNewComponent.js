import React from 'react'
import withClassName from './withClassName-HOC'

const MyNewComponent = ({className,text})=><div className={className}>{text}</div>

export default withClassName(MyNewComponent)