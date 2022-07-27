import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import labelAndInput from "../common/form/labelAndInput"

class ProductForm extends Component {
    render (){

        const {handleSubmit} = this.props
        return(
            
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="id_tipo" component={labelAndInput} type="number"
                    label="Id tipo"  cols="12 4" placeholder="Informe o nome"/>
                    <Field name="valor_metragem" component={labelAndInput}  type="number"
                    label="valor_total"  cols="12 4" placeholder="Informe o CPF"/>
                    <Field name="valor_total" component={labelAndInput}  type="number"
                    label="valor_total"  cols="12 4" placeholder="Informe o CPF"/>
                    <Field name="espessura" component={labelAndInput}  type="number"
                    label="espessura"  cols="12 4" placeholder="Informe o Telefone"/>
                    <Field name="cor" component={labelAndInput}  
                    label="cor"  cols="12 4" placeholder="Informe o Telefone"/>
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

export default reduxForm({form: "productForm"})(ProductForm)