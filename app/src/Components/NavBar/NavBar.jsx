import React from "react";
import { TogleNav } from "./TogleNav";
import { NavBarButton } from "./NavBarButton";
import { Help } from "./Help/Help";
import { HelpComponent } from "./Help/HelpComponent";
import { yMult, xMult } from "../styles/scaleValues";
import { styles } from "./styles";
// import "./NavBar.scss";

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { navExpanded: true, isHelpModal: false, firstTime: false };
        this.navBarStyle = {
            left: xMult * this.props.startingProperties.initLeft,
            top: yMult * this.props.startingProperties.initTop,
            ...styles["nav_bar"],
        };
        this.togleNav = this.togleNav.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.setFirstTime = this.setFirstTime.bind(this);
    }

    togleNav() {
        this.setState({ navExpanded: !this.state.navExpanded });
    }

    togleHelpModal(boolVal) {
        this.setState({ isHelpModal: boolVal, firstTime: false });
    }

    setFirstTime(firstTime) {
        this.setState({ firstTime: firstTime });
    }

    // getStyle() {
    //     return {
    //         left: xMult * this.props.startingProperties.initLeft,
    //         top: yMult * this.props.startingProperties.initTop,
    //         ...styles["nav_bar"],
    //     };
    // }

    render() {
        return (
            <>
                {(this.state.isHelpModal || this.state.firstTime) && (
                    <Help
                        pageName={this.props.currentPage}
                        firstTime={this.state.firstTime}
                        togleHelpModal={this.togleHelpModal}
                        posLeft={263}
                    />
                )}
                <div style={this.navBarStyle}>
                    {this.state.navExpanded && (
                        <HelpComponent
                            currentPage={this.props.currentPage}
                            setFirstTime={this.setFirstTime}
                            togleHelpModal={this.togleHelpModal}
                            theme={this.props.theme}
                            styles={{
                                button: styles.help,
                            }}
                            pageIcon="help"
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="Home"
                            path="/"
                            styles={{
                                button: styles.home,
                                "icon-container": styles.home.icon,
                                text: styles.home.text,
                            }}
                            pageIcon="home"
                            localLink={true}
                            theme={this.props.theme}
                            currentPath={this.props.currentPath}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="New Game"
                            path="/NewGame"
                            currentPath={this.props.currentPath}
                            styles={{
                                button: styles.new_game,
                                "icon-container": styles.new_game.icon,
                                text: styles.new_game.text,
                            }}
                            pageIcon="new-game"
                            localLink={true}
                            theme={this.props.theme}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="Load Game"
                            path="/LoadGame"
                            currentPath={this.props.currentPath}
                            styles={{
                                button: styles.load_game,
                                "icon-container": styles.load_game.icon,
                                text: styles.load_game.text,
                            }}
                            pageIcon="load-game"
                            localLink={true}
                            theme={this.props.theme}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="Create Piece"
                            path="/CreatePiece"
                            currentPath={this.props.currentPath}
                            styles={{
                                button: styles.create_piece,
                                "icon-container": styles.create_piece.icon,
                                text: styles.create_piece.text,
                            }}
                            pageIcon="create-piece"
                            localLink={true}
                            theme={this.props.theme}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="Chess Rules"
                            path="https://www.chess.com/learn-how-to-play-chess"
                            currentPath={this.props.currentPath}
                            styles={{
                                button: styles.chess_rules,
                                "icon-container": styles.council_rules.icon,
                                text: styles.chess_rules.text,
                            }}
                            pageIcon="chess-rules"
                            localLink={false}
                            theme={this.props.theme}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="Council Rules"
                            path="/CouncilRules"
                            currentPath={this.props.currentPath}
                            styles={{
                                button: styles.council_rules,
                                "icon-container": styles.council_rules.icon,
                                text: styles.council_rules.text,
                            }}
                            pageIcon="council-rules"
                            localLink={true}
                            theme={this.props.theme}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="My Pieces"
                            path="/MyPieces"
                            currentPath={this.props.currentPath}
                            styles={{
                                button: styles.my_pieces,
                                "icon-container": styles.my_pieces.icon,
                                text: styles.my_pieces.text,
                            }}
                            pageIcon="my-pieces"
                            localLink={true}
                            theme={this.props.theme}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    {this.state.navExpanded && (
                        <NavBarButton
                            pageName="Author Github"
                            path="https://github.com/symLogicDMUS"
                            currentPath={this.props.currentPath}
                            styles={{
                                button: styles.author_github,
                                "icon-container": styles.author_github.icon,
                                text: styles.author_github.text,
                            }}
                            pageIcon="author-github"
                            localLink={false}
                            theme={this.props.theme}
                            setHelpText={this.props.setHelpText}
                            togleMessageModal={this.props.togleMessageModal}
                            unsavedProgress={this.props.unsavedProgress}
                            setConfirmRedirect={this.props.setConfirmRedirect}
                        />
                    )}
                    <TogleNav
                        type="colapse"
                        togleNav={this.togleNav}
                        theme={this.props.theme}
                        styles={styles.togle_nav}
                    />
                </div>
            </>
        );
    }
}
