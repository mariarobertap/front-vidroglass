

import { combineReducers } from 'redux'
import tabReducer from '../common/tab/tabReducer'
import dashboardReducer from '../dashBoard/dashboardReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import clienteReducer from '../clientes/clienteReducer'


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    cliente: clienteReducer
})

export default rootReducer