import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "../productType/productTypeActions";
import Grid from "../common/layout/grid";

class ComboBox extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];

    return list.map((bc) => <option value={bc.nome}>{bc.nome}</option>);
  }

  render() {
    return (
      <Grid cols="12 4">
        <div>
          <label>Tipo do produto</label>

          <select
            className="form-control select2 select2-hidden-accessible"
            cols="12 4"
            placeHolder="teste"
            name="cars"
          >
            {this.renderRows()}
          </select>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.produto.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ComboBox);
