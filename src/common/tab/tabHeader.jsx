import React, {Component} from "react"
import { selectTab } from './tabActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { If } from '../operator/if'


class TabHeader extends Component {


    render(){
   

        return show(this.props)
    }
}

function show(props){

    const selected = props.tab.selected === props.target
    const visible = props.tab.visible[props.target]

    if(visible){
        return(
            <li className={selected ? 'active' : ''}> 
                    <a href='javascript:;' 
                        data-toggle='tab'
                        onClick={() => props.selectTab(props.target)}
                        data-target={props.target}>
                        <i className={`fa fa-${props.icon}`}></i> {props.label}
                    </a> 
             </li> 
        )
    }else{
        return false
    }

}
const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)