import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"

class ClienteForm extends Component {
    render (){

        const {handleSubmit} = this.props
        return(
            
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="nome" component="input"/>
                    <Field name="cpf" component="input"/>
                    <Field name="telefone" component="input"/>

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