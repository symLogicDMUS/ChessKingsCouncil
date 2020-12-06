import React from "react";
import {Redirect} from "react-router-dom";
import MediaQuery from "react-responsive";
import NavBar from "../NavBar/NavBar";
// import { SearchBar } from "./SearchBar";
import {ConfirmModal} from "../NavBar/ConfirmModal";
import {deleteDef} from "../../API/deleteDef";
import {getDefs} from "../../API/getDefs";
import {MessageModal} from "../NavBar/Help/MessageModal";
import PieceProfiles from "../PieceProfiles/PieceProfiles";
import withStyles from "@material-ui/core/styles/withStyles";
import "../styles/backgrounds.scss";
import {styles} from "./MyPieces.jss";

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
        this.hmChildren = {none: null};
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
        document.body.className = "chessboard-background";
        this.setDefs();
    }

    setDefs() {
        getDefs().then(([defs]) => {
            if (defs) {
                this.defs = defs;
                for (const pieceName of this.standards) {
                    if (Object.keys(this.defs).includes(pieceName)) delete this.defs[pieceName];
                }
            } else {
                this.defs = {};
            }
            this.setState({fetched: true});
        });
    }

    triggerRender() {
        this.setState({binaryValue: !this.state.binaryValue});
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    load(pieceName) {
        this.setState({selectedPiece: pieceName, redirect: true});
    }

    togleMessageModal(boolVal) {
        this.setState({messageModal: boolVal});
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({messageModal: true});
    }

    prepareDelete(pieceName) {
        this.setState({selectedPiece: pieceName, deleteModal: true});
    }

    cancelDelete() {
        this.setState({selectedPiece: null, deleteModal: false});
    }

    delete() {
        deleteDef(this.state.selectedPiece).then(([response]) => {
            delete this.defs[this.state.selectedPiece];
            this.setState({deleteModal: false, profileRef: this.state.selectedPiece, selectedPiece: null});
            this.setState({profileRef: null});
        });
    }

    getComponents(screenCase) {
        return (
            <>
                {this.state.messageModal && (
                    <MessageModal
                        screenCase={screenCase}
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
                <NavBar
                    screenCase={screenCase}
                    currentPage="MyPieces"
                    theme={this.state.theme}
                    startingProperties={{initLeft: 0, initTop: 0}}
                />

                <div className={this.props.classes.my_pieces}>
                    <div className={this.props.classes.topbar}>
                        <div className={this.props.classes.title}>My Pieces</div>
                    </div>
                    {this.state.fetched && (
                        <PieceProfiles
                            context="load-delete"
                            screenCase={screenCase}
                            title="My Pieces"
                            defs={this.defs}
                            load={this.load}
                            scaler={1}
                            profileRef={this.state.profileRef}
                            prepareDelete={this.prepareDelete}
                        />
                    )}
                </div>
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
                <MediaQuery minDeviceWidth={768}>{this.getComponents("desktop")}</MediaQuery>
                <MediaQuery maxDeviceWidth={767}>{this.getComponents("mobile")}</MediaQuery>
            </>
        );
    }
}

export default withStyles(styles)(MyPieces)
