import React from 'react';
import ReactDOM from 'react-dom'
import MyComponent from './MyComponent'
import MyNewComponent from './MyNewComponent'

ReactDOM.render(
    <div>
        <MyComponent/>
        <MyNewComponent newClass={"red"} text={"Hello!"}/>
    </div>,
    document.getElementById('root')
)


