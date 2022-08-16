import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import labelAndInput from "../common/form/labelAndInput"

class ClienteForm extends Component {
    render (){

        const {handleSubmit} = this.props
        return(
            
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="nome" component={labelAndInput}
                    label="Nome"  cols="12 4" placeholder="Informe o nome"/>
                    <Field name="cpf" component={labelAndInput}
                    label="CPF"  cols="12 4" placeholder="Informe o CPF"/>
                    <Field name="telefone" component={labelAndInput}
                    label="Telefone"  cols="12 4" icon="fa fa-phone" placeholder="Informe o Telefone"/>

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