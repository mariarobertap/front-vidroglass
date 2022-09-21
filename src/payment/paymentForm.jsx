import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import labelAndInput from "../common/form/labelAndInput"

class ClienteForm extends Component {
    render (){

        const {handleSubmit} = this.props
        return(
            
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="pagamento" component={labelAndInput}
                    label="Pagamento"  cols="12 4" placeholder="Informe o nome do tipo de pagamento"/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submit!
                    </button>
                </div>
            </form>

        )
    }
}

export default reduxForm({form: "clienteForm"})(ClienteForm)