import React from "react"
import Grid from "../layout/grid"

export default props => (
    <Grid cols={props.cols}>
        <label htmlFor={props.name}>{props.label}</label>
        <div className="input-group">
            
            <span className="input-group-addon"><i className={props.icon}></i></span>
            <input {...props.input} className='form-control'
                 placeholder={props.placeholder}
                 readOnly={props.readOnly} type={props.type}   />

        </div>
    </Grid>
)