import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./clienteActions";

class ClienteForm extends Component {
  componentDidMount() {
    var el = document
      .getElementById("phone")
      .addEventListener("input", function (e) {
        var x = e.target.value
          .replace(/\D/g, "")
          .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2]
          ? x[1]
          : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
      });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="nome"
            component={labelAndInput}
            label="Nome"
            cols="12 4"
            icon="fa fa-user"
            id="name"
            placeholder="Informe o nome"
          />

          <Field
            name="telefone"
            component={labelAndInput}
            label="Telefone"
            cols="12 4"
            icon="fa fa-phone"
            id="phone"
            placeholder="Informe o Telefone"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit!
          </button>
        </div>
      </form>
    );
  }
}

ClienteForm = reduxForm({ form: "clienteForm", destroyOnUnmount: false })(
  ClienteForm
);
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapDispatchToProps)(ClienteForm);
