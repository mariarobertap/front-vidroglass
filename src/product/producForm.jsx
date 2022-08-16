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
                     label="Tipo do Produto" 
                     list={mylist}
                    ></Combo>
                    <Field name="Valor Metragem" icon="fa fa-dollar"
                    component={labelAndInput}  type="number"
                    label="Valor Metragem"  cols="12 4" placeholder="Informe o valor da metragem (R$)"/>
                    <Field name="valor_total" component={labelAndInput}  type="number"
                    label="Valor Total"   icon="fa fa-dollar" cols="12 4" placeholder="Informe o valor total caso exista (R$)"/>
                    <Field name="Espessura" component={labelAndInput}  type="number"
                    label="espessura"  cols="12 4" placeholder="Informe a espessura"/>
                   <Combo
                     cols="12 4"
                     label="Cor" 
                     list={["N/A", "Transparente", "Verde", "Amarelo", "Azul", "Vermelho"]}
                    ></Combo>
                    
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