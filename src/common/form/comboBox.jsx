import React from "react"
import Grid from "../layout/grid"

export default props => (
    <Grid cols={props.cols}>
        <div>
        <label > {props.label}</label>
            <select className="form-control select2 select2-hidden-accessible" cols="12 4" name="cars">
              {props.list.map((value, i) => {
                    return <option key={i} value={i}>{value}</option>
              })}
            </select>
        </div>
    </Grid>
)