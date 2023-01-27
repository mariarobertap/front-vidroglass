import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3000";
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
  const request = axios.get(`${BASE_URL}/address`);
  return {
    type: "ADDRESS_FETCHED",
    payload: request,
  };
}

export function create(values) {
  var id_customer;

  return (dispatch) => {
    console.log(values);
    id_customer = values.id_customer.split("-");
    values.id_customer = id_customer[0];
    values.id_customer = parseInt(values.id_customer);
    values.number = parseInt(values.number);

    axios
      .post(`${BASE_URL}/address`, values)
      .then((resp) => {
        toastr.success(resp.data.message, "Operação Realizada com sucesso.");
        dispatch([
          resetForm("addressForm"),
          getList(),
          showTabs("tabCreate", "tabList"),
          selectTab("tabList"),
        ]);
      })
      .catch((e) => {
        console.log(e.response.data);

        toastr.error(e.response.data.message, e.response.data.erro);
      });
  };
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return (dispatch) => {
    const id = values.id_address ? values.id_address : "";

    axios[method](`${BASE_URL}/address/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação Realizada com sucesso.");
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error("Erro", error));
      });
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("addressForm", billingCycle),
  ];
}

export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("addressForm", billingCycle),
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("addressForm", INITIAL_VALUES),
  ];
}
