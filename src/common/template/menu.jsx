import React from "react"
import MenuItem from "./menuItem"
import MenuTree from "./menuTree"

export default props => (

  <GetMenu isAdmin={props.isAdmin} ></GetMenu>

)

function GetMenu(props){
    const isAdmin = props.isAdmin;
    if (isAdmin) {
        return <GetMenuAdmin />;

    }

}

function GetMenuAdmin(){
    return (
        <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Nota' icon='edit'> 
            <MenuItem path='#notas'
                label='Gerar Nota' icon='usd' />
        </MenuTree>
        
        <MenuTree label='Clientes' icon='edit'> 
            <MenuItem path='#clientes'
                label='Listar clientes' icon='usd' />
            <MenuItem path='#clientes'
                label='Cadastrar Enderecos' icon='usd' />
        </MenuTree>

        <MenuTree label='Produto' icon='edit'> 
            <MenuItem path='#produtos'
                label='Listar produtos' icon='usd' />
            <MenuItem path='#produto_tipo'
                label='Listar tipos de produtos' icon='usd' />
            <MenuItem path='#billingCycles'
                label='Cadastrar Produto' icon='usd' />
        </MenuTree>

        <MenuTree label='Financeiro' icon='edit'> 
            <MenuItem path='#produtos'
                label='A receber' icon='usd' />

            <MenuItem path='#billingCycles'
                label='A pagar' icon='usd' />
        </MenuTree>
    </ul>
    );
}


  




