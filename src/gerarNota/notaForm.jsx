import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./notaActions";

class NotaForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="id_customer"
            component={labelAndInput}
            label="id_customer"
            cols="12 4"
            placeholder="Informe o id_customer"
          />
          <Field
            name="street"
            component={labelAndInput}
            label="street"
            cols="12 4"
            placeholder="Informe o street"
          />
          <Field
            name="cep"
            component={labelAndInput}
            label="cep"
            cols="12 4"
            icon="fa fa-phone"
            placeholder="Informe o cep"
          />
          <Field
            name="number"
            component={labelAndInput}
            label="number"
            cols="12 4"
            icon="fa fa-phone"
            placeholder="Informe o number"
          />
          <Field
            name="city"
            component={labelAndInput}
            label="city"
            cols="12 4"
            icon="fa fa-phone"
            placeholder="Informe o city"
          />
          <Field
            name="state"
            component={labelAndInput}
            label="state"
            cols="12 4"
            icon="fa fa-phone"
            placeholder="Informe o state"
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

NotaForm = reduxForm({
  form: "notaForm",
  destroyOnUnmount: false,
})(NotaForm);
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapDispatchToProps)(NotaForm);
