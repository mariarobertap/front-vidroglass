import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./addressActions";
import Combo from "../common/form/comboBox";
import axios from "axios";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentWillMount() {
    axios
      .get(`http://localhost:3000/cliente`)
      .then((resp) => this.setState({ list: resp.data }));
  }
  render() {
    var { list } = this.state || [1, 2];
    var mylist = [];

    list.forEach((value, i) => {
      mylist.push(value.idcliente + " - " + value.nome);
    });
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="id_customer"
            component={Combo}
            label="id_customer"
            cols="12 4"
            list={mylist}
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

AddressForm = reduxForm({
  form: "addressForm",
  destroyOnUnmount: false,
})(AddressForm);
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapDispatchToProps)(AddressForm);
