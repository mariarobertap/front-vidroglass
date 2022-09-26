import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/product`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}


export function create(values) {
    var id_tipo
    return dispatch => {

        id_tipo = values.id_tipo.split("-")
        values.id_tipo = id_tipo[0]
        values.id_tipo = parseInt(values.id_tipo)
        values.valor_metragem = parseInt(values.valor_metragem)
        values.valor_total = parseInt(values.valor_total)
        values.espessura = parseFloat(values.espessura)


        axios.post(`${BASE_URL}/product`, values)
        .then(resp => {
            toastr.success(resp.data.message, 'Operação Realizada com sucesso.')
            dispatch([
                resetForm("productForm"),
                getList(),
                showTabs("tabCreate", "tabList"),
                selectTab("tabList")
            ])
        })
        .catch(e => {
            console.log(e.response.data)
    
            toastr.error(e.response.data.message,  e.response.data.erro)
        })
    }
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}