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
                <ContentHeader title="Nota" small="cadastro">
                </ContentHeader>
                <Content>

                <div className="invoice-box">
			    <table>
                    <tbody> 
                        <tr className="top">
                            <td colSpan="2">
                                <table >
                                <tbody> 
                                    <tr>
                                        <td className="title">
                                            <b>VidroGlass</b>
                                        </td>
                                        <td>
                                            Nome da empresa.<br />
                                            Endereco da empresa<br />
                                            Cnpj da empresa
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                    </tbody>
                    <tr className="information">
                    <td colspan="2">
                        <table >
                            <tr>
                                <td>
                                    <b>Cliente:</b>Maria Roberta<br />
                                    <b>Endereço:</b> Imaginario.<br />
                                    <b>Bairro:</b>Imaginario.<br />
                                    <b>Cidade:</b>Imaginario.<br />
                                    <b>Telefone:</b>(55)44 901829038<br />
                                </td>
                                <td>
                                    Nota #: 1232334<br />
                                    Criada: 22 de abril, 2001<br />
                                    Vencimento: 22 de abril, 2022<br />
                                    <input type="checkbox" id="scales" name="Pedido" checked></input>
                                    <label for="scales">Pedido</label>
                                    <input type="checkbox" id="scales" name="Orçamento" ></input>
                                    <label for="scales">Orçamento</label>							
                                </td>
                            </tr>
                            <div className="line-3">
                                <hr></hr>
                            </div>
                        </table>
                    </td>
                    </tr>
                    <table>
                    <tr className="heading">
                        <td>Metodo de pagamento</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="details">
                        <td>Cartão de Débito</td>
                        <td></td>
                    </tr>
                </table><table>

                    <tr className="heading">
                        <td>Quantidade</td>
                        <td id="testando2">Item</td>
                        <td Id="testando2">Preço Unitário</td>
                        <td>Preço Total</td>
                    </tr>
                    
                    <tr className="item">
                        <td>1</td>
                        <td id="testando2">Espelho</td>
                        <td Id="testando2">R$300</td>
                        <td>R$300</td>
                    </tr>
                    
                    <tr className="item">
                        <td>1</td>
                        <td id="testando2">Vidro</td>
                        <td Id="testando2">R$300</td>
                        <td>R$400</td>
                    </tr>
                    
                    <tr className="total">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total: R$500</td>
                    </tr>
                </table>
                </table>
            	</div>
                  
                </Content>


            </div>

        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect( null, mapDispatchToProps)(Invoice)
