import React from "react";
import MediaQuery from "react-responsive/src";
import { MainMenuDesktop } from "./MainMenuDesktop";
import { MainMenuMobile } from "./MainMenuMobile";
import "../Reuseables/Background/_backgrounds.scss";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: "tan" };
    }

    componentDidMount() {
        document.body.className = "tan-background";
    }

    render() {
        return (
            <>
                <MediaQuery minWidth={1040}>
                    <MainMenuDesktop
                        signOut={this.props.signOut}
                        theme={this.state.theme}
                    />
                </MediaQuery>
                <MediaQuery maxWidth={1040}>
                    <MainMenuMobile
                        signOut={this.props.signOut}
                        theme={this.state.theme}
                    />
                </MediaQuery>
            </>
        );
    }
}
