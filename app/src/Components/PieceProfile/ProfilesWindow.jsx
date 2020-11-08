import React from "react";
import { Textfit } from "react-textfit";
import { styleObjects } from "./styleObjects";
import { pieceProfilesSizePos } from "./pieceProfilesSizePos";
import { offsetToText } from "../helpers/offsetToText";
import { spanToText } from "../helpers/spanToText";
import { Profile } from "./Profile";
import { DisplayBoardModal } from "./DisplayBoardModal/DisplayBoardModal";
import { ProfileHeader } from "./ProfileHeader";
// import { SearchBar } from "./SearchBar";
import { getDefs } from "../../API/getDefs";
import { deleteDef } from "../../API/deleteDef";
import { ConfirmModal } from "../NavBar/ConfirmModal";
import "../PieceProfile/ProfilesWindow.scss";

export class ProfilesWindow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            theme: "dark",
            binaryValue: true,
            selectedPiece: null,
            redirect: false,
            deleteModal: false,
        };
        
        this.displayBoard = null;
        this.color = null;
        this.rangeType = null;
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.searchText = "";
        
        this.update = this.update.bind(this);
        this.load = this.load.bind(this);
        this.delete = this.delete.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.prepareDelete = this.prepareDelete.bind(this);
        this.expand = this.expand.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.applySearchFilter = this.applySearchFilter.bind(this);
        
        this.displayDefs = JSON.parse(JSON.stringify(this.props.defs));
        Object.keys(this.displayDefs).forEach((pieceName) => {
            this.displayDefs[pieceName]["W"]["spans"] = this.getSpans(this.displayDefs[pieceName]["W"]);
            this.displayDefs[pieceName]["W"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["W"]);
            this.displayDefs[pieceName]["B"]["spans"] = this.getSpans(this.displayDefs[pieceName]["B"]);
            this.displayDefs[pieceName]["B"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["B"]);
        });
    }

    componentDidMount() {
            // this.displayDefs = JSON.parse(JSON.stringify(this.props.defs));
            // Object.keys(this.displayDefs).forEach((pieceName) => {
            //     this.displayDefs[pieceName]["W"]["spans"] = this.getSpans(this.displayDefs[pieceName]["W"]);
            //     this.displayDefs[pieceName]["W"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["W"]);
            //     this.displayDefs[pieceName]["B"]["spans"] = this.getSpans(this.displayDefs[pieceName]["B"]);
            //     this.displayDefs[pieceName]["B"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["B"]);
            // });
            // this.setState({ binaryValue: !this.state.binaryValue });
    }

    update() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    prepareDelete(pieceName) {
        this.setState({ selectedPiece: pieceName, deleteModal: true });
    }

    cancelDelete() {
        this.setState({ selectedPiece: null, deleteModal: false });
    }

    delete(pieceName) {
        delete this.defs[pieceName];
        deleteDef(pieceName).then(([response]) => {
            this.setState({ deleteModal: false, selectedPiece: null });
        });
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
                    {ProfileHeader(pieceName, this.load, this.prepareDelete)}
                </Profile>
            );
        }
        return profiles;
    }

    render() {

        return (
            <>
                <div className="profiles-window" style={pieceProfilesSizePos[this.props.screenCase]()}>
                    <div className="top-bar" style={styleObjects[this.props.screenCase]["topBar"]()}>
                        <Textfit
                            className="title"
                            mode="multi"
                            max={1000000}
                            style={styleObjects[this.props.screenCase]["title"]()}
                        >
                            My Pieces
                        </Textfit>
                        {/* <SearchBar updateSearch={this.updateSearch} /> */}
                    </div>
                    <div className="profiles" style={styleObjects[this.props.screenCase]["profiles"]()}>
                        {this.getProfiles()}
                    </div>
                </div>

                {this.state.deleteModal && (
                    <ConfirmModal
                        text={`You are asking to delete piece "${this.state.selectedPiece}". Games in progress will not be
                    effected but the piece's record for new games will be destroyed. This action cannot be undone.
                    Are you sure you want to delete piece "${this.state.selectedPiece}"?`}
                        yesClick={() => this.delete(this.state.selectedPiece)}
                        noClick={() => this.cancelDelete()}
                    />
                )}
                {this.getDisplayBoard()}
            </>
        );
    }
}
