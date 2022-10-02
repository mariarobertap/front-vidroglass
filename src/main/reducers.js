

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastReducer} from "react-redux-toastr"
import tabReducer from '../common/tab/tabReducer'
import dashboardReducer from '../dashBoard/dashboardReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import clienteReducer from '../clientes/clienteReducer'
import productReducer from '../product/productReducer'
import productTypeReducer from '../productType/productTypeReducer'
import addressReducer from '../address/addressReducer'
import PaymentReducer from '../payment/paymentReducer'
import NotaReducer from '../gerarNota/notaReducer'



const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    cliente: clienteReducer,
    produto: productReducer,
    tipo_produto: productTypeReducer,
    payment: PaymentReducer,
    nota: NotaReducer,
    form: formReducer,
    endereco: addressReducer,
    toastr: toastReducer

})

export default rootReducer