import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";

class ProductTypeForm extends Component {
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
            icon="fa fa-archive"
            placeholder="Informe o nome"
          />
          <Field
            name="Descricao"
            component={labelAndInput}
            label="descricao"
            cols="12 4"
            icon="fa fa-info-circle"
            placeholder="Informe a descricao"
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

export default reduxForm({ form: "productTypeForm" })(ProductTypeForm);
