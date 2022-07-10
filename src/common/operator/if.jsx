import React from 'react'

export default props => {
    if(props.test === true) {
        return props.children
    } else {
        return false
    }
}