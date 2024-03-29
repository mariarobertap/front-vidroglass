import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/product/type`)
    return {
        type: 'PRODUCT_TYPE_FETCHED',
        payload: request
    }
}



export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function create(values) {
    return dispatch => {
        console.log(values)

        axios.post(`${BASE_URL}/product/type`, values)
        .then(resp => {
            toastr.success(resp.data.message, 'Operação Realizada com sucesso.')
            dispatch([
                resetForm("productTypeForm"),
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


function submit(values, method) {
    return dispatch => {
        const id = values.id_tipo ? values.id_tipo : ''
        axios[method](`${BASE_URL}/product/type/${id}`, values)
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
        initialize('productTypeForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('productTypeForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('productTypeForm', INITIAL_VALUES)
    ]
}