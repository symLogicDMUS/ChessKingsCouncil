import React from "react";
import MediaQuery from "react-responsive";
import Help from "./Help/Help";
import {ToggleNav} from "./ToggleNav";
import {NavBarButton} from "./NavBarButton";
import {ConfirmRedirect} from "./ConfirmRedirect";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {HelpButton} from "./Help/HelpButton";
import {withStyles} from "@material-ui/core";
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
        this.setState({navExpanded: !this.state.navExpanded});
    }

    toggleHelpModal(boolVal) {
        this.setState({isHelpModal: boolVal, firstTime: false});
    }

    setFirstTime(firstTime) {
        this.setState({firstTime: firstTime});
    }


    toggleConfirmRedirect(bValue, path, isLocalLink) {
        this.setState({isRedirectModal: bValue, pendingRedirect: path, isLocalLink: isLocalLink});
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
                        theme={this.props.theme}
                        path={this.state.pendingRedirect}
                        message={this.redirectMessage}
                        isLocalLink={this.state.isLocalLink}
                        toggleConfirmRedirect={this.toggleConfirmRedirect}
                    />
                )}
                <ButtonGroup className={this.props.classes.nav_bar}>
                    {this.state.navExpanded && (
                        <HelpButton
                            column={1}
                            currentPage={this.props.currentPage}
                            togleHelpModal={this.toggleHelpModal}
                            setFirstTime={this.setFirstTime}
                            theme={this.props.theme}
                            pageIcon="help"
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={2}
                            pageName="Home"
                            path="/"
                            pageIcon="home"
                            className="home"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={9}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={3}
                            pageName="New Game"
                            path="/NewGame"
                            pageIcon="new-game"
                            className="new_game"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={8}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={4}
                            pageName="Load Game"
                            path="/LoadGame"
                            pageIcon="load-game"
                            className="load_game"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={7}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={5}
                            pageName="Create Piece"
                            path="/CreatePiece"
                            pageIcon="create-piece"
                            className="create_piece"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={6}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={6}
                            pageName="Chess Rules"
                            path="https://www.chess.com/learn-how-to-play-chess"
                            pageIcon="chess-rules"
                            className="chess_rules"
                            isLocalLink={false}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={5}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={7}
                            pageName="Council Rules"
                            path="/CouncilRules"
                            pageIcon="council-rules"
                            className="council_rules"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={4}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={8}
                            pageName="My Pieces"
                            path="/MyPieces"
                            pageIcon="my-pieces"
                            className="my_pieces"
                            isLocalLink={true}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={3}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            column={9}
                            pageName="Author Github"
                            path="https://github.com/symLogicDMUS"
                            pageIcon="author-github"
                            className="author_github"
                            isLocalLink={false}
                            toggleConfirmRedirect={this.toggleConfirmRedirect}
                            theme={this.props.theme}
                            unsavedChanges={this.props.unsavedChanges}
                            z={2}
                        />
                    )}
                    <ToggleNav
                        column={10}
                        navExpanded={this.state.navExpanded}
                        toggleNav={this.toggleNav}
                        theme={this.props.theme}
                    />
                </ButtonGroup>
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