import React from "react";
import { Redirect } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
// import { SearchBar } from "./SearchBar";
import MediaQuery from "react-responsive";
import { MessageModal } from "../NavBar/Help/MessageModal";
import { ProfilesWindow } from "../PieceProfile/ProfilesWindow";
import "./MyPieces.scss"

export class MyPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            binaryValue: true,
            selectedPiece: null,
            redirect: false,
        };
        this.firstTime = false;
        this.navExpanded = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = { none: null };
        this.update = this.update.bind(this);
        this.load = this.load.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
    }

    componentDidMount() {
        document.body.className = "my-pieces-body";
    }

    update() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    load(pieceName) {
        this.setState({ selectedPiece: pieceName, redirect: true });
    }

    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    getComponents(screenCase) {
        return (
            <>
                <NavBar
                    screenCase={screenCase}
                    currentPage="LoadGame"
                    theme={this.state.theme}
                    startingProperties={{ initLeft: 0, initTop: 0 }}
                />
                {this.state.messageModal && (
                    <MessageModal
                        screenCase={screenCase}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}
                <ProfilesWindow screenCase={screenCase} load={this.load} />
            </>
        );
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect
                    to={{
                        pathname: "/CreatePiece",
                        state: {
                            defaultPiece: this.state.selectedPiece,
                        },
                    }}
                ></Redirect>
            );
        }

        return (
            <>
                <MediaQuery minDeviceWidth={768}>{this.getComponents("desktop")}</MediaQuery>
                <MediaQuery maxDeviceWidth={767}>{this.getComponents("mobile")}</MediaQuery>
            </>
        );
    }
}

export default MyPieces;
