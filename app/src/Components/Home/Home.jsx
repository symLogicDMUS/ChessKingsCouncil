import React from "react";
import MediaQuery from "react-responsive/src";
import "../Reuseables/Background/_backgrounds.scss";
import { MainMenuLg } from "./MainMenuLg";
import MainMenuDrawer from "../Reuseables/Drawers/MainMenuDrawer";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: "tan" };
        this.updateTheme = this.updateTheme.bind(this);
    }

    componentDidMount() {
        document.body.className = `${this.state.theme}-background`;
    }

    componentDidUpdate() {
        document.body.className = `${this.state.theme}-background`;
    }

    updateTheme(theme) {
        this.setState({theme: theme})
    }

    render() {
        return (
            <>
                <MediaQuery minWidth={960}>
                    <MainMenuLg
                        signOut={this.props.signOut}
                        theme={this.state.theme}
                    />
                </MediaQuery>
                <MediaQuery maxWidth={960}>
                    <MainMenuDrawer
                        theme={this.state.theme}
                        updateTheme={this.updateTheme}
                        signOut={this.props.signOut}
                    />
                </MediaQuery>
            </>
        );
    }
}

export default Home;