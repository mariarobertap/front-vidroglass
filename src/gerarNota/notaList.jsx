import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./notaActions";

class NotaList extends Component {
  componentWillMount() {
    this.props.getList();
  }
  renderRow() {
    const list = this.props.list || [];

    return list.map((bc) => (
      <tr key={bc.id_nota}>
        <td>{bc.Id_pagamento}</td>
        <td>{bc.tipo_nota}</td>
        <td>{bc.data}</td>
        <td>{bc.valor_total}</td>
        <td>{bc.cliente.nome}</td>

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
              <th>Id Pagamento</th>
              <th>Tipo da nota</th>
              <th>data</th>
              <th>Valor total</th>
              <th>Cliente</th>

              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.nota.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NotaList);
