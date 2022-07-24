import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { If } from '../operator/if'

class TabContent extends Component {
    render() {

        return show(this.props)
    }
}

function show(props){
    const visible = props.tab.visible[props.id]
    const selected =props.tab.selected === props.id

    if(visible){
        return(
            <div id={props.id}
                className={`tab-pane ${selected ? 'active' : ''}`}> 
                {props.children}
             </div> 
        ) 
    }else{
        return false
    }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)