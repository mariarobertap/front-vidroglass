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

                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="page-header">
                            <i className="fa fa-globe"></i> AdminLTE, Inc.
                            <small className="pull-right">Date: 2/10/2014</small>
                        </h2>
                    </div>
                </div>

                <div className="row invoice-info">
                    <div className="col-sm-4 invoice-col">
                        From                
                    
                        <br></br><strong>Admin, Inc.</strong><br></br>
                        795 Folsom Ave, Suite 600<br></br>
                        San Francisco, CA 94107<br></br>
                        Phone: (804) 123-5432<br></br>
                        Email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b0d9ded6dff0d1dcddd1c3d1d5d5d4c3c4c5d4d9df9ed3dfdd">[email&#160;protected]</a>
                    
                    </div>

                    <div className="col-sm-4 invoice-col">
                    To
                        
                    <br></br><strong>John Doe</strong><br></br>
                        795 Folsom Ave, Suite 600<br></br>
                        San Francisco, CA 94107<br></br>
                        Phone: (555) 539-1037<br></br>
                        Email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d8b2b7b0b6f6bcb7bd98bda0b9b5a8b4bdf6bbb7b5">[email&#160;protected]</a>
                    
                    </div>

                        <div className="col-sm-4 invoice-col">
                            <b>Invoice #007612</b><br></br>
                            <br></br>
                            <b>Order ID:</b> 4F3S8J<br></br>
                            <b>Payment Due:</b> 2/22/2014<br></br>
                            <b>Account:</b> 968-34567
                        </div>
                </div>

                </section>
                  
                </Content>


            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect( null, mapDispatchToProps)(Invoice)
