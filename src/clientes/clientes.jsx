import React, { Component } from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import List from "./clienteList";
import Form from "./clienteForm";
import { create, remove } from "./clienteActions";

import TabHeader from "../common/tab/tabHeader";

class Cliente extends Component {
  componentWillMount() {
    this.props.selectTab("tabList");
    this.props.showTabs("tabList", "tabCreate");
  }
  render() {
    return (
      <div>
        <ContentHeader title="Clientes" small="cadastro"></ContentHeader>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id="tabUpdate"></TabContent>
              <TabContent id="tabDelete">
                <TabContent id="tabDelete">
                  <Form
                    onSubmit={this.props.remove}
                    readOnly={true}
                    submitLabel="Excluir"
                    submitClass="danger"
                  />
                </TabContent>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs, create, remove }, dispatch);
export default connect(null, mapDispatchToProps)(Cliente);
