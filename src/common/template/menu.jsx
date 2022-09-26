import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default (props) => <GetMenu isAdmin={props.isAdmin}></GetMenu>;

function GetMenu(props) {
  const isAdmin = props.isAdmin;
  if (isAdmin) {
    return <GetMenuAdmin />;
  }
}

function GetMenuAdmin() {
  return (
    <ul className="sidebar-menu">
      <MenuItem path="#/" label="Dashboard" icon="dashboard" />
      <MenuTree label="Nota" icon="money">
        <MenuItem path="#notas" label="Nota" icon="edit" />
        <MenuItem path="#notas" label="Gerar nota" icon="edit" />
      </MenuTree>

      <MenuTree label="Clientes" icon="user">
        <MenuItem path="#clientes" label="Clientes" icon="user-plus" />
      </MenuTree>

      <MenuTree label="Produto" icon="dropbox">
        <MenuItem path="#produtos" label="Produto" icon="edit" />
        <MenuItem path="#produto_tipo" label="Tipod de produto" icon="edit" />
      </MenuTree>
      <MenuTree label="Pagamento" icon="credit-card">
        <MenuItem
          path="#pagamento"
          label="Tipo de pagamento"
          icon="credit-card"
        />
      </MenuTree>
      <MenuTree label="Endereco" icon="home">
        <MenuItem path="#endereco" label="Endereço" icon="home" />
      </MenuTree>
      <MenuTree label="Financeiro" icon="bank">
        <MenuItem path="#produtos" label="A receber" icon="edit" />

        <MenuItem path="#billingCycles" label="A pagar" icon="edit" />
      </MenuTree>
    </ul>
  );
}
