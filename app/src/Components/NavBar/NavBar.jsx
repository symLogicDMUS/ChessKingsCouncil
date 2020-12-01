import React from "react";
import MediaQuery from "react-responsive";
import Help from "./Help/Help";
import { ToggleNav } from "./ToggleNav";
import { NavBarButton } from "./NavBarButton";
import { ConfirmRedirect } from "./ConfirmRedirect";
import HelpComponent from "./Help/HelpComponent";
import { withStyles } from "@material-ui/core";
import {styles} from "./NavBar.jss";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: true,
            isHelpModal: false,
            isRedirectModal: false,
            pendingRedirect: null,
            isLocalLink: true,
            firstTime: false,
        };
        this.redirectMessage = "If you leave this page you will lose your unsaved work. Do you want to continue?";
        if (this.props.redirectMessage) this.redirectMessage = this.props.redirectMessage;
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleHelpModal = this.toggleHelpModal.bind(this);
        this.setFirstTime = this.setFirstTime.bind(this);
        this.toggleConfirmRedirect = this.toggleConfirmRedirect.bind(this);
    }

    toggleNav() {
        this.setState({ navExpanded: !this.state.navExpanded });
    }

    toggleHelpModal(boolVal) {
        this.setState({ isHelpModal: boolVal, firstTime: false });
    }

    setFirstTime(firstTime) {
        this.setState({ firstTime: firstTime });
    }


    toggleConfirmRedirect(bValue, path, isLocalLink) {
        this.setState({ isRedirectModal: bValue, pendingRedirect: path, isLocalLink: isLocalLink });
    }

    getComponents(screenCase) {
        return (
            <>
                {(this.state.isHelpModal || this.state.firstTime) && (
                    <Help
                        screenCase={screenCase}
                        pageName={this.props.currentPage}
                        firstTime={this.state.firstTime}
                        togleHelpModal={this.toggleHelpModal}
                        posLeft={263 / 1536}
                    />
                )}
                {this.state.isRedirectModal && (
                    <ConfirmRedirect
                        screenCase={screenCase}
                        path={this.state.pendingRedirect}
                        message={this.redirectMessage}
                        isLocalLink={this.state.isLocalLink}
                        toggleConfirmRedirect={this.toggleConfirmRedirect}
                    />
                )}
                <div className={this.props.classes.nav_bar}>
                    {this.state.navExpanded && (
                        <HelpComponent
                            screenCase={screenCase}
                            currentPage={this.props.currentPage}
                            togleHelpModal={this.toggleHelpModal}
                            setFirstTime={this.setFirstTime}
                            theme={this.props.theme}
                            pageIcon="help"
                            classes={{
                                button: "go-to-help",
                            }}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="Home"
                            path="/"
                            classes={{
                                button: "go-to-home",
                                "icon-container": "home-icon",
                                text: "home-text",
                            }}
                            pageIcon="home"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={9}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="New Game"
                            path="/NewGame"
                            classes={{
                                button: "go-to-new-game",
                                "icon-container": "new-game-icon",
                                text: "new-game-text",
                            }}
                            pageIcon="new-game"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={8}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="Load Game"
                            path="/LoadGame"
                            classes={{
                                button: "go-to-load-game",
                                "icon-container": "go-to-load-game-icon",
                                text: "go-to-load-game-text",
                            }}
                            pageIcon="load-game"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={7}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="Create Piece"
                            path="/CreatePiece"
                            classes={{
                                button: "go-to-create-piece",
                                "icon-container": "create-piece-icon",
                                text: "create-piece-text",
                            }}
                            pageIcon="create-piece"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={6}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="Chess Rules"
                            path="https://www.chess.com/learn-how-to-play-chess"
                            classes={{
                                button: "go-to-chess-rules",
                                "icon-container": "council-rules-icon",
                                text: "chess-rules-text",
                            }}
                            pageIcon="chess-rules"
                            isLocalLink={false}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={5}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="Council Rules"
                            path="/CouncilRules"
                            classes={{
                                button: "go-to-council-rules",
                                "icon-container": "council-rules-icon",
                                text: "council-rules-text",
                            }}
                            pageIcon="council-rules"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={4}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="My Pieces"
                            path="/MyPieces"
                            classes={{
                                button: "go-to-my-pieces",
                                "icon-container": "my-pieces-icon",
                                text: "my-pieces-text",
                            }}
                            pageIcon="my-pieces"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={3}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            screenCase={screenCase}
                            pageName="Author Github"
                            path="https://github.com/symLogicDMUS"
                            classes={{
                                button: "go-to-author-github",
                                "icon-container": "author-github-icon",
                                text: "author-github-text",
                            }}
                            pageIcon="author-github"
                            isLocalLink={false}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={2}
                        />
                    )}
                    <ToggleNav
                        screenCase={screenCase}
                        navExpanded={this.state.navExpanded}
                        toggleNav={this.toggleNav}
                        theme={this.props.theme}
                    />
                </div>
            </>
        );
    }

    render() {
        return (
            <>    
                <MediaQuery minDeviceWidth={768}>{this.getComponents('desktop')}</MediaQuery>
                <MediaQuery maxDeviceWidth={767}>{this.getComponents('mobile')}</MediaQuery>
            </>
        );
    }
}

export default withStyles(styles)(NavBar)