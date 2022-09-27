import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./paymentActions";

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="pagamento"
            component={labelAndInput}
            label="Pagamento"
            cols="12 4"
            icon="fa fa-info-circle"
            placeholder="Informe o nome do tipo de pagamento"
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

PaymentForm = reduxForm({ form: "paymentForm", destroyOnUnmount: false })(
  PaymentForm
);
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapDispatchToProps)(PaymentForm);
