import React, {Component} from "react"
import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import Tabs from "../common/tab/tabs"
import TabsHeader from "../common/tab/tabsHeader"
import TabsContent from "../common/tab/tabsContent"
import TabContent from "../common/tab/tabContent"
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create } from './productTypeActions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  List  from "./productTypeList"
import Form from "./productTypeForm"

import TabHeader from "../common/tab/tabHeader"

class ProductType extends Component {
    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', "tabCreate")

    }
    render(){
        return(
            <div>
                <ContentHeader title="Produtos" small="cadastro">
                </ContentHeader>
                <Content>
                
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                            <List/>
                            </TabContent>
                            <TabContent id='tabCreate'> 
                            <Form onSubmit={this.props.create}/>

                            </TabContent>
                            <TabContent id='tabUpdate'>

                            </TabContent>
                            <TabContent id='tabDelete'>

                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>


            </div>

        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)
export default connect( null, mapDispatchToProps)(ProductType)


