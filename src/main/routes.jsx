import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Cliente from '../clientes/clientes'
import invoice from '../invoice/invoice'
import Produto from '../product/product'
import Tipo_Produto from '../productType/productType'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}></Route>
        <Route path='/billingCycles' component={BillingCycle}></Route>
        <Route path='/notas' component={invoice}></Route>
        <Route path='/clientes' component={Cliente}></Route>
        <Route path='/produtos' component={Produto}></Route>
        <Route path='/produto_tipo' component={Tipo_Produto}></Route>


        <Redirect from='*' to='/' />
    </Router>
)