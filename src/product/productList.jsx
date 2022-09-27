import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./productActions";

class ProductList extends Component {
  componentWillMount() {
    this.props.getList();
  }
  renderRows() {
    const list = this.props.list || [];

    return list.map((bc) => (
      <tr key={bc.id_produto}>
        <td>{bc.tipo}</td>
        <td>{bc.valor_metragem}</td>
        <td>{bc.espessura}</td>
        <td>{bc.cor}</td>

        <td>
          <button
            className="btn btn-warning"
            onClick={() => this.props.showUpdate(bc)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.showDelete(bc)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Valor metragem</th>
              <th>Espessura</th>
              <th>Cor</th>

              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.produto.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
