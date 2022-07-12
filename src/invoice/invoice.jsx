import React, {Component} from "react"
import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import TabsHeader from "../common/tab/tabsHeader"
import TabHeader from "../common/tab/tabHeader"
import TabsContent from "../common/tab/tabsContent"
import TabContent from "../common/tab/tabContent"
import { selectTab } from "../common/tab/tabActions"
import { showTabs } from "../common/tab/tabActions"
import Tabs from "../common/tab/tabs"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import "../common/custom.css"


class Invoice extends Component {
    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', "tabCreate")

    }
    render(){
        
        return(
            <div>
                <ContentHeader title="Ciclos de pagamentos" small="cadastro">
                </ContentHeader>
                <Content>
              <section className="invoice">

              </section>
                  
                </Content>


            </div>

        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect( null, mapDispatchToProps)(Invoice)
