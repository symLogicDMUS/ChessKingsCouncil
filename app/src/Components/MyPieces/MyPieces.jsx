import React from "react";
import { Redirect } from "react-router-dom";
import MediaQuery from "react-responsive";
import { NavBar } from "../Reuseables/NavBar";
// import { SearchBar } from "./SearchBar";
// import {ProfilesTitle} from "../PieceProfiles/ProfilesTitle";
import { ProfilesTitle } from "../PieceProfiles/ProfilesTitle";
import { styles } from "./MyPieces.jss";
import { ConfirmModal } from "../Reuseables/ConfirmModal";
import { deleteDef } from "../../API/deleteDef";
import { getDefs } from "../../API/getDefs";
import { MessageModal } from "../Reuseables/Help/MessageModal";
import { PieceProfiles } from "../PieceProfiles/PieceProfiles";
import withStyles from "@material-ui/core/styles/withStyles";
import "../styles/_backgrounds.scss";
import { fontSize } from "../styles/fontSize.jss";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import { navBarWidth } from "../Reuseables/NavBar.jss";
import { navBarButtonWidth } from "../Reuseables/NavBarButton.jss";
import { SideBar } from "../Reuseables/SidBar";
import Typography from "@material-ui/core/Typography";
import {availWidth} from "../helpers/windowMeasurments";

class MyPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            binaryValue: true,
            selectedPiece: null,
            messageModal: false,
            deleteModal: false,
            redirect: false,
            fetched: false,
        };
        this.defs = {};
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.firstTime = false;
        this.navExpanded = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = { none: null };
        this.load = this.load.bind(this);
        this.delete = this.delete.bind(this);
        this.prepareDelete = this.prepareDelete.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
        this.setDefs = this.setDefs.bind(this);
        this.setDefs();
    }

    componentDidMount() {
        document.body.className = "dark-background";
        this.setDefs();
    }

    setDefs() {
        getDefs().then(([defs]) => {
            if (defs) {
                this.defs = defs;
                for (const pieceName of this.standards) {
                    if (Object.keys(this.defs).includes(pieceName))
                        delete this.defs[pieceName];
                }
            } else {
                this.defs = {};
            }
            this.setState({ fetched: true });
        });
    }

    triggerRender() {
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

    prepareDelete(pieceName) {
        this.setState({ selectedPiece: pieceName, deleteModal: true });
    }

    cancelDelete() {
        this.setState({ selectedPiece: null, deleteModal: false });
    }

    delete() {
        deleteDef(this.state.selectedPiece).then(([response]) => {
            delete this.defs[this.state.selectedPiece];
            this.setState({
                deleteModal: false,
                profileRef: this.state.selectedPiece,
                selectedPiece: null,
            });
            this.setState({ profileRef: null });
        });
    }

    modals(screenCase) {
        return (
            <>
                {this.state.messageModal && (
                    <MessageModal
                        theme={this.state.theme}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}
                {this.state.deleteModal && (
                    <ConfirmModal
                        theme={this.state.theme}
                        text={`You are asking to delete piece "${this.state.selectedPiece}". Games in progress will not be
                               effected but the piece's record for new games will be destroyed. This action cannot be undone.
                               Are you sure you want to delete piece "${this.state.selectedPiece}"?`}
                        yesClick={this.delete}
                        noClick={this.cancelDelete}
                    />
                )}
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
                />
            );
        }

        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    {this.modals("desktop")}
                    <NavBar
                        currentPage="MyPieces"
                        theme={this.state.theme}
                        style={{
                            fontSize: fontSize,
                            width: "100%",
                            height: "2.25em",
                        }}
                        buttonStyle={{
                            fontSize: fontSize,
                            height: "2.25em",
                            justifyContent: "center",
                        }}
                        unsavedChanges={false}
                    />
                    <div className={this.props.classes.my_pieces}>
                        {this.state.fetched && (
                            <PieceProfiles
                                context="load-delete"
                                title="My Pieces"
                                defs={this.defs}
                                load={this.load}
                                theme={this.state.theme}
                                profileRef={this.state.profileRef}
                                prepareDelete={this.prepareDelete}
                            >
                                <ProfilesTitle theme={this.state.theme} />
                            </PieceProfiles>
                        )}
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    {this.modals("mobile")}
                    <PersistentDrawer
                        theme={this.state.theme}
                        spacing={0}
                        drawer={
                            <NavBar
                                currentPage="MyPieces"
                                flexDirection="column"
                                style={{ width: "100%" }}
                                buttonStyle={{
                                    fontSize: fontSize * 1.2,
                                    justifyContent: "flex-start",
                                    width: "99%",
                                    height: "2.5em",
                                }}
                                redirectMessage={null}
                                unsavedChanges={false}
                                theme={this.state.theme}
                            />
                        }
                        appBarContent={<Typography variant='h6' noWrap>My Pieces</Typography>}
                    >
                        <div className={this.props.classes.my_pieces}>
                            {this.state.fetched && (
                                <PieceProfiles
                                    context="load-delete"
                                    title="My Pieces"
                                    defs={this.defs}
                                    load={this.load}
                                    theme={this.state.theme}
                                    profileRef={this.state.profileRef}
                                    prepareDelete={this.prepareDelete}
                                />
                            )}
                        </div>
                    </PersistentDrawer>
                </MediaQuery>
            </>
        );
    }
}

export default withStyles(styles)(MyPieces);
