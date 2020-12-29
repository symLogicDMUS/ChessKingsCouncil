import React from "react";
import MediaQuery from "react-responsive/src";
import { MainMenuDesktop } from "./MainMenuDesktop";
import { MainMenuMobile } from "./MainMenuMobile";
import "../styles/_backgrounds.scss";
import "./Home.scss";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: "black" };
    }

    componentDidMount() {
        document.body.className = "main-menu-background";
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    <MainMenuDesktop
                        signOut={this.props.signOut}
                        theme={this.state.theme}
                    />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <MainMenuMobile
                        signOut={this.props.signOut}
                        theme={this.state.theme}
                    />
                </MediaQuery>
            </>
        );
    }
}
