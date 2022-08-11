import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import labelAndInput from "../common/form/labelAndInput"
import ComboBox from "./comboBox"
import Combo from "../common/form/comboBox"
import axios from 'axios'


class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = { list: []}
    }

    componentWillMount() {
        axios.get(`http://localhost:3000/product/type`)
            .then(resp => this.setState({list:resp.data}))
    }


    render (){
        var {list} = this.state || [1,2]
        var mylist =[]


        list.forEach((value, i) => {
            mylist.push(value.nome)
        })

        const {handleSubmit} = this.props
        return(
            
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                   
               
                    <Combo
                     cols="12 4"
                     label="cor" 
                     list={mylist}
                    ></Combo>
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
const mapStateToProps = state => ({list: state.tipo_produto.list})
export default reduxForm({form: "productForm"})(ProductForm)