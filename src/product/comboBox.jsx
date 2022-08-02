import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from '../productType/productTypeActions'

class ComboBox extends Component {

     componentWillMount() {
         this.props.getList()
     }

    renderRows() {
        const list = this.props.list || []

        return list.map(bc => (
            <option value={bc.nome}>{bc.nome}</option>
        ))
    }

    render() {
        return (
            <div>
                <select name="cars" onClick={() => {
                    console.log("CLICK")
                    this.props.getList()}
                } >
                    {this.renderRows()}
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.tipo_produto.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ComboBox)