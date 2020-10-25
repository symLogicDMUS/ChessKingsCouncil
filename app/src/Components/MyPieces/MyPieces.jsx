import React from "react";
import { Redirect } from "react-router-dom";
import { offsetToText } from "../helpers/offsetToText";
import { spanToText } from "../helpers/spanToText";
import { Profile } from "../PieceProfile/Profile";
import { MyPieceConfirmDelete } from "./MyPieceConfirmDelete";
import { DisplayBoardModal } from "../PieceProfile/DisplayBoardModal/DisplayBoardModal";
import { ProfileHeader } from "./ProfileHeader";
import { MessageModal } from "../NavBar/Help/MessageModal";
import { SearchBar } from "./SearchBar";
import { NavBar } from "../NavBar/NavBar";
import { getDefs } from "../../API/getDefs";
import { deleteDef } from "../../API/deleteDef";
import "./MyPieces.scss";

export class MyPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            binaryValue: true,
            selectedPiece: null,
            redirect: false,
            deleteModal: false,
        };
        this.firstTime = false;
        this.displayBoard = null;
        this.color = null;
        this.rangeType = null;
        this.navExpanded = true;
        this.defs = {};
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.searchText = "";
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = { none: null };
        this.update = this.update.bind(this);
        this.load = this.load.bind(this);
        this.delete = this.delete.bind(this);
        this.setPiece = this.setPiece.bind(this);
        this.expand = this.expand.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.togleConfirmDeleteModal = this.togleConfirmDeleteModal.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.applySearchFilter = this.applySearchFilter.bind(this);
    }

    componentDidMount() {
        document.body.className = "my-pieces-body";
        getDefs().then(([defs]) => {
            if (defs) {
                this.defs = defs;
                for (var pieceName of this.standards) {
                    if (Object.keys(this.defs).includes(pieceName)) delete this.defs[pieceName];
                }
            } else {
                this.defs = {};
            }

            this.displayDefs = JSON.parse(JSON.stringify(this.defs));
            Object.keys(this.displayDefs).forEach((pieceName) => {
                this.displayDefs[pieceName]["W"]["spans"] = this.getSpans(this.displayDefs[pieceName]["W"]);
                this.displayDefs[pieceName]["W"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["W"]);
                this.displayDefs[pieceName]["B"]["spans"] = this.getSpans(this.displayDefs[pieceName]["B"]);
                this.displayDefs[pieceName]["B"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["B"]);
            });
            this.setState({ binaryValue: !this.state.binaryValue });
        });
    }

    update() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    getStyle() {}

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    setPiece(pieceName) {
        this.setState({ selectedPiece: pieceName });
    }

    load(pieceName) {
        this.setState({ selectedPiece: pieceName, redirect: true });
    }

    togleConfirmDeleteModal(boolVal) {
        this.setState({ deleteModal: boolVal });
        //this.deleteModal = boolVal;
    }

    delete(pieceName) {
        delete this.defs[pieceName];
        deleteDef(pieceName).then(([response]) => {
            this.update();
        });
    }

    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    expand(piece, color, rangeType) {
        this.pieceName = piece;
        this.color = color;
        this.rangeType = rangeType;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    getSpans(def) {
        if (def.spans.length === 0) {
            return Array(0);
        }

        let spanStrings = [];
        for (var span of def.spans) {
            spanStrings.push(spanToText(span));
        }
        return spanStrings;
    }

    getOffsets(def) {
        if (def.offsets.length === 0) {
            return Array(0);
        }

        let offsetStrings = [];
        def.offsets.forEach((offset) => {
            offsetStrings.push(offsetToText(offset));
        });
        return offsetStrings;
    }

    getDisplayBoard() {
        if (this.pieceName != null && this.color != null && this.rangeType != null)
            return (
                <DisplayBoardModal
                    def={this.defs[this.pieceName][this.color]}
                    rangeType={this.rangeType}
                    color={this.color}
                    pieceName={this.pieceName}
                    expand={this.expand}
                    location="d4"
                />
            );
        else return null;
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return Object.keys(this.defs).filter((pieceName) => pieceName.toLowerCase().startsWith(this.searchText));
        else return Object.keys(this.defs);
    }

    getProfiles() {
        let profiles = [];
        let pieceNames = this.applySearchFilter();
        for (var pieceName of pieceNames) {
            profiles.push(
                <Profile pieceName={pieceName} expand={this.expand} displayDefs={this.displayDefs}>
                    {ProfileHeader(pieceName, this.load, this.setPiece, this.togleConfirmDeleteModal)}
                </Profile>
            );
        }
        return profiles;
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
                <NavBar
                    currentPath="/MyPieces"
                    currentPage="MyPieces"
                    theme={this.state.theme}
                    togleMessageModal={this.togleMessageModal}
                    setHelpText={this.setMessageText}
                    startingProperties={{ initLeft: 0, initTop: 0 }}
                />

                {this.state.messageModal && (
                    <MessageModal
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}

                <div className="my-pieces" style={this.getStyle()}>
                    <div className="top-bar">
                        <div className="title">My Pieces</div>
                        <SearchBar updateSearch={this.updateSearch} />
                    </div>
                    <div className="profiles">{this.getProfiles()}</div>
                </div>
                {this.state.deleteModal && (
                    <MyPieceConfirmDelete
                        delete={this.delete}
                        setPiece={this.setPiece}
                        pieceName={this.state.selectedPiece}
                        togleConfirmDeleteModal={this.togleConfirmDeleteModal}
                    />
                )}
                {this.getDisplayBoard()}
            </>
        );
    }
}

export default MyPieces;
