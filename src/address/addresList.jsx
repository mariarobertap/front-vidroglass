import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./addressActions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }
  renderRow() {
    const list = this.props.list || [];

    return list.map((bc) => (
      <tr key={bc.id_address}>
        <td>{bc.id_customer}</td>
        <td>{bc.street}</td>
        <td>{bc.number}</td>
        <td>{bc.cep}</td>
        <td>{bc.city}</td>
        <td>{bc.state}</td>

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
              <th>Id Cliente</th>
              <th>Street</th>
              <th>Number</th>
              <th>Cep</th>
              <th>City</th>
              <th>State</th>

              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.cliente.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
