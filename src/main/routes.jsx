import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Cliente from '../clientes/clientes'
import invoice from '../invoice/invoice'
import Produto from '../product/product'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}></Route>
        <Route path='/billingCycles' component={BillingCycle}></Route>
        <Route path='/notas' component={invoice}></Route>
        <Route path='/clientes' component={Cliente}></Route>
        <Route path='/produtos' component={Produto}></Route>

        <Redirect from='*' to='/' />
    </Router>
)