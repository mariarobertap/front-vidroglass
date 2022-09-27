import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ComboBox from "./comboBox";
import Combo from "../common/form/comboBox";
import axios from "axios";
import { init } from "./productActions";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentWillMount() {
    axios
      .get(`http://localhost:3000/product/type`)
      .then((resp) => this.setState({ list: resp.data }));
  }

  componentDidMount() {
    var el = document
      .getElementById("currency")
      .addEventListener("input", function (e) {
        var x = e.target.value;
        e.target.value = maskCurrency(x);
      });

    var el = document
      .getElementById("currency2")
      .addEventListener("input", function (e) {
        var x = e.target.value;
        e.target.value = maskCurrency(x);
      });
  }

  render() {
    var { list } = this.state || [1, 2];
    var mylist = [];

    list.forEach((value, i) => {
      mylist.push(value.id_tipo + " - " + value.nome);
    });

    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            label="Tipo do Produto"
            name="id_tipo"
            component={Combo}
            cols="12 4"
            placeholder="Informe o valor da metragem (R$)"
            list={mylist}
            defaultValue="N/A"
          />
          <Field
            label="Valor da metragem"
            name="valor_metragem"
            icon="fa fa-dollar"
            component={labelAndInput}
            cols="12 4"
            id="currency"
            value="0"
            placeholder="Informe o valor da metragem (R$)"
          />
          <Field
            name="valor_total"
            component={labelAndInput}
            label="Valor"
            icon="fa fa-dollar"
            cols="12 4"
            id="currency2"
            value="teste"
            defaultValue="9218309128"
            placeholder="Informe o valor total caso exista (R$)"
          />
          <Field
            label="Espessura"
            name="espessura"
            component={labelAndInput}
            type="number"
            cols="12 4"
            icon="fa fa-adjust"
            placeholder="Informe a espessura"
          />
          <Field
            label="Cor do produto"
            name="cor"
            component={Combo}
            type="number"
            cols="12 4"
            icon="fa fa-dollar"
            placeholder="Informe a espessura"
            list={[
              "N/A",
              "Transparente",
              "Verde",
              "Amarelo",
              "Azul",
              "Vermelho",
            ]}
            defaultValue="Vermelho"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit!
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}
function maskCurrency(value) {
  if (value.length <= 0) {
    value = 0;
  } else {
    var valor = value;

    valor = valor + "";
    valor = parseInt(valor.replace(/[\D]+/g, ""));
    valor = valor + "";
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    value = valor;
  }

  return value;
}

ProductForm = reduxForm({ form: "productForm", destroyOnUnmount: false })(
  ProductForm
);
const selector = formValueSelector("productForm");
const mapStateToProps = (state) => ({
  list: selector(state, state.tipo_produto.list),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
