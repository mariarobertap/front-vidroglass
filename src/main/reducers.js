

import { combineReducers } from 'redux'
import tabReducer from '../common/tab/tabReducer'
import dashboardReducer from '../dashBoard/dashboardReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import clienteReducer from '../clientes/clienteReducer'
import productReducer from '../clientes/clienteReducer'
import productTypeReducer from '../productType/productTypeReducer'



const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    cliente: clienteReducer,
    produto: productReducer,
    tipo_produto: productTypeReducer,
})

export default rootReducer