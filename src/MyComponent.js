import React from 'react'
import withInnerWidth from './innerWidth-HOC';

const MyComponent = ({innerWidth}) => <div>{innerWidth}</div>

export default withInnerWidth(MyComponent)