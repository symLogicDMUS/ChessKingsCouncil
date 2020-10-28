import React from "react";
import ReactDOM from "react-dom";
import { Name } from "./Name/Name";
import { Icon } from "./Icon/Icon";
import { Range } from "./Range/Range";
import { defs } from "../tests/defs1";
import { NavBar } from "../NavBar/NavBar";
import { getDefs } from "../../API/getDefs";
import { Options } from "./Options/Options";
import { saveDef } from "../../API/saveDef";
import { Location } from "./Location/Location";
import { NameLabel } from "./NameLabel/NameLabel";
import { stepFuncDict } from "../helpers/stepFuncs";
import { outOfBounds as oob } from "../helpers/oob";
import { xyToRf, rfToXy } from "../helpers/crdCnvrt";
import { getRotations } from "./helpers/getRotations";
import { Success } from "./Options/Save/Modals/Success/Success";
import { getSpansDict } from "./helpers/getSpansDict";
import { flipOffsets } from "./helpers/flipOffsets";
import { ChooseModal } from "./Icon/Choose/ChooseModal";
import { MessageModal } from "../NavBar/Help/MessageModal";
import { getStepFuncNames } from "./helpers/getStepFuncNames";
import { redirectMessageStr } from "./helpers/redirectMessageStr";
import { CreatePieceBoard as Board } from "./Board/CreatePieceBoard";
import { CreatedPieceProfiles } from "./Options/Load/Modals/CreatedPieceProfiles";
import "./CreatePiece.scss";

export class CreatePiece extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            binaryValue: 0,
            theme: "dark",
            unsaved: false,
            isLoadModal: false,
            chooseModal: false,
            isMessageModal: false,
            displaySuccessfullSaveMessage: false,
        };

        this.defs = {};

        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.standardsLc = ["rook", "bishop", "queen", "knight", "pawn", "king"];

        //used to record in defs object at the end:
        this.name = "";
        this.spans = {
            "90d": false,
            "45d": false,
            "0d": false,
            "315d": false,
            "270d": false,
            "225d": false,
            "180d": false,
            "135d": false,
        };
        this.offsets = [];

        //static copies so can reset if want to:
        this.loadedName = null;
        this.loadedSpans = null;
        this.loadedOffsets = null;

        this.pieceImg = { white: null, black: null };

        //true values rendered highlight color (currently red) as part of span.
        this.spanDisplays = {
            a1: false,
            a2: false,
            a3: false,
            a4: false,
            a5: false,
            a6: false,
            a7: false,
            a8: false,
            b1: false,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: false,
            b7: false,
            b8: false,
            c1: false,
            c2: false,
            c3: false,
            c4: false,
            c5: false,
            c6: false,
            c7: false,
            c8: false,
            d1: false,
            d2: false,
            d3: false,
            d4: false,
            d5: false,
            d6: false,
            d7: false,
            d8: false,
            e1: false,
            e2: false,
            e3: false,
            e4: false,
            e5: false,
            e6: false,
            e7: false,
            e8: false,
            f1: false,
            f2: false,
            f3: false,
            f4: false,
            f5: false,
            f6: false,
            f7: false,
            f8: false,
            g1: false,
            g2: false,
            g3: false,
            g4: false,
            g5: false,
            g6: false,
            g7: false,
            g8: false,
            h1: false,
            h2: false,
            h3: false,
            h4: false,
            h5: false,
            h6: false,
            h7: false,
            h8: false,
        };

        //true values rendered highlight color (currently dark red) and calculate jump offsets
        this.jumpDisplays = {
            a1: false,
            a2: false,
            a3: false,
            a4: false,
            a5: false,
            a6: false,
            a7: false,
            a8: false,
            b1: false,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: false,
            b7: false,
            b8: false,
            c1: false,
            c2: false,
            c3: false,
            c4: false,
            c5: false,
            c6: false,
            c7: false,
            c8: false,
            d1: false,
            d2: false,
            d3: false,
            d4: false,
            d5: false,
            d6: false,
            d7: false,
            d8: false,
            e1: false,
            e2: false,
            e3: false,
            e4: false,
            e5: false,
            e6: false,
            e7: false,
            e8: false,
            f1: false,
            f2: false,
            f3: false,
            f4: false,
            f5: false,
            f6: false,
            f7: false,
            f8: false,
            g1: false,
            g2: false,
            g3: false,
            g4: false,
            g5: false,
            g6: false,
            g7: false,
            g8: false,
            h1: false,
            h2: false,
            h3: false,
            h4: false,
            h5: false,
            h6: false,
            h7: false,
            h8: false,
        };

        //to use for spans, update by Location:
        this.location = "d4";

        //flag to displaying progress in saving piece, if any
        this.saveStatus = "none";

        //attributes for various displays
        // this.unsaved = false;
        this.currentIconColor = null;
        this.showSpanText = true;
        this.showOffsetText = true;
        this.msgModalConfig = {
            title: null,
            text: null,
            togleMethod: this.togleMessageModal,
        };

        this.navExpanded = true;
        this.optionTool = true;
        this.confirmRedirectModal = false;
        this.redirectPath = null;
        this.redirectMessage = redirectMessageStr;

        //binds
        this.save = this.save.bind(this);
        this.load = this.load.bind(this);
        this.reset = this.reset.bind(this);
        this.clear = this.clear.bind(this);
        this.update = this.update.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.eraseRange = this.eraseRange.bind(this);
        this.updateName = this.updateName.bind(this);
        this.setSaveStatus = this.setSaveStatus.bind(this);
        this.togleSpan = this.togleSpan.bind(this);
        this.togleJump = this.togleJump.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.togleSpanText = this.togleSpanText.bind(this);
        this.togleOffsetText = this.togleOffsetText.bind(this);
        this.togleOptionTool = this.togleOptionTool.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.setCurrentIconColor = this.setCurrentIconColor.bind(this);
        this.showChooseModal = this.showChooseModal.bind(this);
        this.closeChooseModal = this.closeChooseModal.bind(this);
        this.togleLoadModal = this.togleLoadModal.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setUnsaved = this.setUnsaved.bind(this);
        this.resetSaveStatus = this.resetSaveStatus.bind(this)
        this.resetIconWindowIfImageDeleted = this.resetIconWindowIfImageDeleted.bind(this);
    }

    componentDidMount() {
        document.body.className = "create-piece-body";

        getDefs().then(([defs]) => {
            if (defs) {
                this.defs = defs;
                for (var pieceName of this.standards) {
                    if (Object.keys(this.defs).includes(pieceName)) delete this.defs[pieceName];
                }
            } else {
                this.defs = {};
            }

            if (
                this.props.location !== undefined &&
                this.props.location.state != undefined &&
                this.props.location.state.defaultPiece != null
            ) {
                this.load(this.props.location.state.defaultPiece);
            }

            this.setState({ binaryValue: !this.state.binaryValue });
        });
    }

    update() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    load(pieceName) {
        this.name = pieceName;
        this.spans = getSpansDict(this.defs[pieceName]["W"]["spans"]);
        this.offsets = this.defs[pieceName]["W"]["offsets"];
        this.pieceImg = { white: this.defs[pieceName]["W"]["img"], black: this.defs[pieceName]["B"]["img"] };

        // provide static copy so that can reset if want to:
        this.loadedName = JSON.parse(JSON.stringify(this.name));
        this.loadedSpans = JSON.parse(JSON.stringify(this.spans));
        this.loadedOffsets = JSON.parse(JSON.stringify(this.offsets));

        //reminder: calls this.update() at end
        this.setLoc("d4");
    }

    togleLoadModal(boolVal) {
        this.setState({ isLoadModal: boolVal });
    }

    save() {
        /**TODO: add guards against all possible bad user input for name */

        let namecase = this.getNameCase();
        if (namecase !== "valid") {
            this.setSaveStatus(namecase);
            return;
        }

        if (this.pieceImg["white"] === null || this.pieceImg["black"] === null) {
            this.setSaveStatus("no-icon");
            return;
        }

        this.defs[this.name] = {
            W: { spans: null, offsets: null, img: null },
            B: { spans: null, offsets: null, img: null },
        };

        const angles = [];
        for (var s of Object.keys(this.spans)) {
            if (this.spans[s]) angles.push(s);
        }

        this.defs[this.name]["W"]["spans"] = getStepFuncNames(angles);
        this.defs[this.name]["B"]["spans"] = getStepFuncNames(getRotations(angles, 180));
        this.defs[this.name]["W"]["offsets"] = this.offsets;
        this.defs[this.name]["B"]["offsets"] = flipOffsets(this.offsets);
        this.defs[this.name]["W"]["img"] = this.pieceImg["white"];
        this.defs[this.name]["B"]["img"] = this.pieceImg["black"];

        saveDef(this.name, this.defs[this.name]).then(([response]) => {
            this.setSaveStatus("success");
        });
    }

    setSaveStatus(value) {
        this.saveStatus = value;
        switch (this.saveStatus) {
            case "saving":
                this.setState({
                    isMessageModal: false,
                    confirmRedirectModal: false,
                    displaySuccessfullSaveMessage: false,
                    binaryValue: !this.state.binaryValue,
                });
                break;
            case "blank-name":
                this.msgModalConfig = {
                    title: "blank name",
                    text: "You must give a piece name before saving.",
                    togleMethod: this.resetSaveStatus,
                };
                this.setState({
                    isMessageModal: true,
                    confirmRedirectModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "standard-name":
                this.msgModalConfig = {
                    title: "used standard name",
                    text:
                        "You can not use the name of any of the 6 standard pieces: Rook, Bishop, Knight, King, Queen, and Pawn.",
                    togleMethod: this.resetSaveStatus,
                };
                this.setState({
                    isMessageModal: true,
                    confirmRedirectModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "no-icon":
                this.msgModalConfig = {
                    title: "Missing Icon",
                    text: "You must pick an image icon for both white and black.",
                    togleMethod: this.resetSaveStatus,
                };
                this.setState({
                    isMessageModal: true,
                    confirmRedirectModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "success":
                this.setState({
                    displaySuccessfullSaveMessage: true,
                    confirmRedirectModal: false,
                    isMessageModal: false,
                });
                break;
            case "confirm-overwrite":
                this.setState({
                    confirmRedirectModal: true,
                    displaySuccessfullSaveMessage: false,
                    isMessageModal: false,
                });
                break;
            case "reset":
                this.clear();
                break;
            case "none":
                this.setState({
                    isMessageModal: false,
                    confirmRedirectModal: false,
                    displaySuccessfullSaveMessage: false,
                    binaryValue: !this.state.binaryValue,
                });
            default:
                break;
        }
    }

    setUnsaved(boolVal) {
        this.setState({ unsaved: boolVal });
    }

    updateName(input) {
        this.name = input;
        this.update();
    }

    setPieceImg(color, pieceImgBase64Str) {
        this.pieceImg[color] = pieceImgBase64Str;
        this.update();
    }

    togleSpan(angle) {
        this.spans[angle] = !this.spans[angle];
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = this.spans[angle];
            rf = stepFunc(rf);
        }
    }

    setDisplaySpan(angle) {
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    setDisplaySpans() {
        Object.entries(this.spans).forEach(([angle, isActive]) => {
            if (isActive) this.setDisplaySpan(angle);
        });
    }

    togleSpanText() {
        this.showSpanText = !this.showSpanText;
        this.update();
    }

    resetSpanDisplays() {
        //turn off all displays
        this.spanDisplays = Object.values(this.spanDisplays).map((isSpan) => isSpan & false);
    }

    togleJump(rf, offset) {
        this.jumpDisplays[rf] = !this.jumpDisplays[rf];
        let offsetStrs = this.offsets.map((o) => JSON.stringify(o));
        if (offsetStrs.includes(JSON.stringify(offset))) {
            let i = offsetStrs.indexOf(JSON.stringify(offset));
            this.offsets.splice(i, 1);
        } else this.offsets.push(offset);
    }

    resetJumpDisplays() {
        this.jumpDisplays = Object.values(this.jumpDisplays).map((isJump) => isJump & false);
    }

    setJumpDisplays() {
        let [x1, y1] = rfToXy(this.location);
        let [dx, dy] = [-1, -1];
        this.offsets.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            this.jumpDisplays[xyToRf(dx, dy)] = true;
        });
    }

    togleOffsetText() {
        this.showOffsetText = !this.showOffsetText;
        this.update();
    }

    togleOptionTool(boolVal) {
        this.optionTool = boolVal;
        this.update();
    }

    setLoc(rf) {
        this.location = rf;
        this.resetSpanDisplays();
        this.resetJumpDisplays();
        this.setDisplaySpans();
        this.setJumpDisplays();
        this.update();
    }

    getNameCase() {
        if (this.name === "") return "blank-name";
        if (this.standardsLc.includes(this.name.toLowerCase())) return "standard-name";
        return "valid";
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    resetSaveStatus() {
        this.setSaveStatus("none")
    }

    eraseRange() {
        Object.keys(this.spans).forEach((rf) => {
            this.spans[rf] = false;
        });
        Object.keys(this.spanDisplays).forEach((rf) => {
            this.spanDisplays[rf] = false;
        });
        Object.keys(this.jumpDisplays).forEach((rf) => {
            this.jumpDisplays[rf] = false;
        });
        this.offsets = [];
        this.saveStatus = "none";
        this.update();
    }

    clear() {
        Object.keys(this.spans).forEach((rf) => {
            this.spans[rf] = false;
        });
        Object.keys(this.spanDisplays).forEach((rf) => {
            this.spanDisplays[rf] = false;
        });
        Object.keys(this.jumpDisplays).forEach((rf) => {
            this.jumpDisplays[rf] = false;
        });
        this.name = "";
        this.pieceImg = { white: null, black: null };
        this.location = "d4";
        this.offsets = [];
        this.setSaveStatus("none");
    }

    reset() {
        if (this.loadedName === null) this.clear();
        else {
            this.name = JSON.parse(JSON.stringify(this.loadedName));
            this.spans = JSON.parse(JSON.stringify(this.loadedSpans));
            this.offsets = JSON.parse(JSON.stringify(this.loadedOffsets));
            this.setLoc(this.location);
        }
    }

    resetIconWindowIfImageDeleted(deletedBase64ImgStr) {
        if (this.pieceImg["white"] === deletedBase64ImgStr) this.pieceImg["white"] = null;
        if (this.pieceImg["black"] === deletedBase64ImgStr) this.pieceImg["black"] = null;
    }

    setCurrentIconColor(color) {
        this.currentIconColor = color;
        this.update();
    }

    showChooseModal(color) {
        this.currentIconColor = color;
        this.setState({ chooseModal: true });
    }

    closeChooseModal() {
        this.currentIconColor = null;
        this.setState({ chooseModal: false });
    }

    render() {
        return (
            <>
                {/*Modals */}
                {this.state.isMessageModal && (
                    <MessageModal
                        messageTitle={this.msgModalConfig.title}
                        messageText={this.msgModalConfig.text}
                        togleMessageModal={this.msgModalConfig.togleMethod}
                    />
                )}
                {this.state.isLoadModal && (
                    <CreatedPieceProfiles
                        defs={this.defs}
                        load={this.load}
                        togleLoadModal={this.togleLoadModal}
                        setUnsaved={this.setUnsaved}
                    />
                )}
                {this.state.chooseModal && (
                    <ChooseModal
                        closeChooseModal={this.closeChooseModal}
                        setPieceImg={this.setPieceImg}
                        color={this.currentIconColor}
                        setUnsaved={this.setUnsaved}
                        resetIconWindowIfImageDeleted={this.resetIconWindowIfImageDeleted}
                    />
                )}
                {this.state.displaySuccessfullSaveMessage && (
                    <div className="save-piece-modal">
                        <Success setSaveStatus={this.setSaveStatus} />
                    </div>
                )}
                {/*At time writing ordered by screen appearence.(left to right, top to bottom)*/}
                <NavBar currentPage="CreatePiece" unsaved={this.state.unsaved} theme={this.state.theme} />
                <NameLabel name={this.name} />
                <Board
                    update={this.update}
                    togleJump={this.togleJump}
                    spanDisplays={this.spanDisplays}
                    jumps={this.jumpDisplays}
                    pieceLoc={this.location}
                    pieceImgBase64Str={this.pieceImg["white"]}
                    showSpanText={this.showSpanText}
                    showOffsetText={this.showOffsetText}
                    setUnsaved={this.setUnsaved}
                />
                <Name name={this.name} updateName={this.updateName} setUnsaved={this.setUnsaved} />
                <Icon
                    pieceImg={this.pieceImg}
                    setPieceImg={this.setPieceImg}
                    updateParent={this.update}
                    showChooseModal={this.showChooseModal}
                    currentIconColor={this.currentIconColor}
                    setCurrentIconColor={this.setCurrentIconColor}
                    setUnsaved={this.setUnsaved}
                />
                <Range
                    spans={this.spans}
                    offsets={this.offsets}
                    togleSpan={this.togleSpan}
                    update={this.update}
                    togleOffsetText={this.togleOffsetText}
                    togleSpanText={this.togleSpanText}
                    setUnsaved={this.setUnsaved}
                />
                <Location setLoc={this.setLoc} setUnsaved={this.setUnsaved} />
                <Options
                    save={this.save}
                    name={this.name}
                    clear={this.clear}
                    reset={this.reset}
                    togleLoadModal={this.togleLoadModal}
                    togleOptionTool={this.togleOptionTool}
                    togleMessageModal={this.togleMessageModal}
                    setUnsaved={this.setUnsaved}
                    eraseRange={this.eraseRange}
                    existing={Object.keys(this.defs)}
                    saveStatus={this.saveStatus}
                    setSaveStatus={this.setSaveStatus}
                />
            </>
        );
    }
}

export let test = () => ReactDOM.render(<CreatePiece defs={defs} />, document.getElementById("root"));
