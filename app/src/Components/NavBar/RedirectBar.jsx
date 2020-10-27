import React from "react";
import { Help } from "./Help/Help";
import { TogleNav } from "./TogleNav";
import { PageRedirectButton } from "./PageRedirectButton";
import { HelpComponent } from "./Help/HelpComponent";
// import { yMult, xMult } from "../styles/scaleValues";
// import { styles } from "./styles";
import "./NavBar.scss";

export class RedirectBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: true,
            isHelpModal: false,
            isRedirectModal: false,
            firstTime: false,
            pendingRedirect: null,
            isLocalLink: true,
        };
        this.redirectMessage = "If you leave this page you will loose unsaved work. Do you want to continue?";
        this.togleNav = this.togleNav.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.togleConfirmRedirect = this.togleConfirmRedirect.bind(this);
        this.setFirstTime = this.setFirstTime.bind(this);
    }

    togleNav() {
        this.setState({ navExpanded: !this.state.navExpanded });
    }

    togleHelpModal(boolVal) {
        this.setState({ isHelpModal: boolVal, firstTime: false });
    }

    togleConfirmRedirect(bValue, path, isLocalLink) {
        this.setState({ isRedirectModal: bValue, pendingRedirect: path, isLocalLink: isLocalLink });
    }

    setFirstTime(firstTime) {
        this.setState({ firstTime: firstTime });
    }

    getStyle() {
        return {
            width: window.screen.availWidth,
            height: window.screen.availHeight * 0.04,
            left: 0,
            top: 0,
        };
    }

    render() {
        return (
            <>
                {(this.state.isHelpModal || this.state.firstTime) && (
                    <Help
                        pageName={this.props.currentPage}
                        firstTime={this.state.firstTime}
                        togleHelpModal={this.togleHelpModal}
                        posLeft={263 / 1536}
                    />
                )}
                {this.state.isRedirectModal && (
                    <ConfirmRedirect
                        path={this.state.pendingRedirect}
                        message={this.redirectMessage}
                        isLocalLink={this.state.isLocalLink}
                        togleConfirmRedirect={this.togleConfirmRedirect}
                    />
                )}
                <div className="nav-bar" style={this.getStyle()}>
                    {this.state.navExpanded && (
                        <HelpComponent
                            currentPage={this.props.currentPage}
                            togleHelpModal={this.togleHelpModal}
                            setFirstTime={this.setFirstTime}
                            theme={this.props.theme}
                            classes={{
                                button: "go-to-help",
                            }}
                            pageIcon="help"
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="Home"
                            path="/"
                            classes={{
                                button: "go-to-home",
                                "icon-container": "home-icon",
                                text: "home-text",
                            }}
                            pageIcon="home"
                            localLink={true}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={9}
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="New Game"
                            path="/NewGame"
                            classes={{
                                button: "go-to-new-game",
                                "icon-container": "new-game-icon",
                                text: "new-game-text",
                            }}
                            pageIcon="new-game"
                            localLink={true}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={8}
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="Load Game"
                            path="/LoadGame"
                            classes={{
                                button: "go-to-load-game",
                                "icon-container": "go-to-load-game-icon",
                                text: "go-to-load-game-text",
                            }}
                            pageIcon="load-game"
                            localLink={true}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={7}
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="Create Piece"
                            path="/CreatePiece"
                            classes={{
                                button: "go-to-create-piece",
                                "icon-container": "create-piece-icon",
                                text: "create-piece-text",
                            }}
                            pageIcon="create-piece"
                            localLink={true}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={6}
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="Chess Rules"
                            path="https://www.chess.com/learn-how-to-play-chess"
                            classes={{
                                button: "go-to-chess-rules",
                                "icon-container": "council-rules-icon",
                                text: "chess-rules-text",
                            }}
                            pageIcon="chess-rules"
                            localLink={false}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={5}
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="Council Rules"
                            path="/CouncilRules"
                            classes={{
                                button: "go-to-council-rules",
                                "icon-container": "council-rules-icon",
                                text: "council-rules-text",
                            }}
                            pageIcon="council-rules"
                            localLink={true}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={4}
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="My Pieces"
                            path="/MyPieces"
                            classes={{
                                button: "go-to-my-pieces",
                                "icon-container": "my-pieces-icon",
                                text: "my-pieces-text",
                            }}
                            pageIcon="my-pieces"
                            localLink={true}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={3}
                        />
                    )}
                    {this.state.navExpanded && (
                        <PageRedirectButton
                            pageName="Author Github"
                            path="https://github.com/symLogicDMUS"
                            classes={{
                                button: "go-to-author-github",
                                "icon-container": "author-github-icon",
                                text: "author-github-text",
                            }}
                            pageIcon="author-github"
                            localLink={false}
                            togleConfirmRedirect={this.togleConfirmRedirect}
                            theme={this.props.theme}
                            z={2}
                        />
                    )}
                    <TogleNav type="colapse" togleNav={this.togleNav} theme={this.props.theme} />
                </div>
            </>
        );
    }
}
