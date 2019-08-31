import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <h2>DESCUBRA SEU POTENCIAL</h2>
                <img className="mulher" src={require("../img/mulher.svg")} alt="Mulher" />
                
                <p className="description">
                    Alavancamos suas vendas aumentando o número de clientes através de marketing em redes sociais
                </p>
                <img className="chart" src={require("../img/chart.svg")} alt="Chart" />
            </div>
        )
    }
}