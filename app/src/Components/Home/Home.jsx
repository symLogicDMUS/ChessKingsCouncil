import React from "react";
import {MainMenu} from "./MainMenu";
import "../styles/_backgrounds.scss"
import "./Home.scss";


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: 'black' }
    }
    componentDidMount() {
        document.body.className = 'main-menu-background'
    }

    render() {
        return ( <MainMenu signOut={this.props.signOut} theme={this.state.theme} /> );
    }
}