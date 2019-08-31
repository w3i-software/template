import React, { Component, Fragment } from 'react';
import './main.scss';
import menu from './../img/menu.svg';

export default class Menu extends Component {
    
    render() {
        return(
            <Fragment>
                <nav>
                    <div className="menu">
                        <a href="#"><img src={menu} alt="Logo"/></a>
                    </div>

                    {/* <div className="sidenav">
                        <ul>
                            <li>ITEM 1</li>
                            <li>ITEM 2</li>
                            <li>ITEM 3</li>
                            <li>ITEM 4</li>
                        </ul>
                    </div> */}

                    
                </nav>
            </Fragment>
        )
    }
}