import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
import { Name } from "./Name/Name";
import { Icon } from "./Icon/Icon";
import { Range } from "./Range/Range";
import { defs } from "../tests/defs1";
import { NavBar } from "../NavBar/NavBar";
import { getDefs } from "../../API/getDefs";
import { deleteDef } from "../../API/deleteDef";
import { Options } from "./Options/Options";
import { saveDef } from "../../API/saveDef";
import { Location } from "./Location/Location";
import { NameLabel } from "./NameLabel/NameLabel";
import { stepFuncDict } from "../helpers/stepFuncs";
import { outOfBounds as oob } from "../helpers/oob";
import { xyToRf, rfToXy } from "../helpers/crdCnvrt";
import { getRotations } from "./helpers/getRotations";
import { Success } from "./Options/SaveModals/Success";
import { getSpansDict } from "./helpers/getSpansDict";
import { flipOffsets } from "./helpers/flipOffsets";
import { ChooseModal } from "./Icon/Choose/ChooseModal";
import { MessageModal } from "../NavBar/Help/MessageModal";
import { getStepFuncNames } from "./helpers/getStepFuncNames";
import { createPieceRedirectMessageStr } from "./helpers/createPieceRedirectMessageStr";
import { CreatePieceBoard as Board } from "./Board/CreatePieceBoard";
import { ProfilesModal } from "./ProfilesModal/ProfilesModal";
import { ToolsMenuMobile } from "./ToolsMenuMobile/ToolsMenuMobile";
import { ConfirmModal } from "../NavBar/ConfirmModal";
import "./scss/CreatePiece.scss";
import { getBinaryBoarAllFalse } from "./getBinaryBoardAllFalse";

export class CreatePiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "d4",
            theme: "dark",
            binaryValue: 0,
            whiteImg: null,
            blackImg: null,
            unsavedChanges: false,
            pendingDelete: null,
            currentIconColor: null,
            showSpanText: true,
            showOffsetText: true,
            isLoadModal: false,
            chooseModal: false,
            isDeleteModal: false,
            isMessageModal: false,
            confirmOverwriteModal: false,
            selectedToolMobile: null,
            displaySuccessfullSaveMessage: false,
        };
        this.defs = {};
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
        this.spanDisplays = getBinaryBoarAllFalse();
        this.offsetDisplays = getBinaryBoarAllFalse();

        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.standardsLc = ["rook", "bishop", "queen", "knight", "pawn", "king"];

        this.whiteAndBlackImgs = { white: null, black: null };

        this.msgModalConfig = {
            title: null,
            text: null,
            togleMethod: this.togleMessageModal,
        };

        this.loadedName = null;
        this.loadedSpans = null;
        this.loadedOffsets = null;

        //binds
        this.save = this.save.bind(this);
        this.load = this.load.bind(this);
        this.reset = this.reset.bind(this);
        this.clear = this.clear.bind(this);
        this.update = this.update.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.deletePiece = this.deletePiece.bind(this);
        this.prepareDelete = this.prepareDelete.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.eraseRange = this.eraseRange.bind(this);
        this.updateName = this.updateName.bind(this);
        this.setSaveStatus = this.setSaveStatus.bind(this);
        this.togleSpan = this.togleSpan.bind(this);
        this.togleJump = this.togleJump.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.togleSpanText = this.togleSpanText.bind(this);
        this.togleOffsetText = this.togleOffsetText.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.setCurrentIconColor = this.setCurrentIconColor.bind(this);
        this.showChooseModal = this.showChooseModal.bind(this);
        this.closeChooseModal = this.closeChooseModal.bind(this);
        this.togleLoadModal = this.togleLoadModal.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setUnsavedChanges = this.setUnsavedChanges.bind(this);
        this.resetSaveStatus = this.resetSaveStatus.bind(this);
        this.resetIconWindowIfImageDeleted = this.resetIconWindowIfImageDeleted.bind(this);
        this.setSelectedToolMobile = this.setSelectedToolMobile.bind(this);
    }

    componentDidMount() {
        document.body.className = "create-piece-body";

        getDefs().then(([defs]) => {
            if (defs) {
                this.defs = defs;
                for (const pieceName of this.standards) {
                    if (Object.keys(this.defs).includes(pieceName)) delete this.defs[pieceName];
                }
            } else {
                this.defs = {};
            }

            if (
                this.props.location !== undefined &&
                this.props.location.state !== undefined &&
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
        this.setState({ name: pieceName, isLoadModal: false, unsavedChanges: false });
        this.spans = getSpansDict(this.defs[pieceName]["W"]["spans"]);
        this.offsets = this.defs[pieceName]["W"]["offsets"];
        this.whiteAndBlackImgs = { white: this.defs[pieceName]["W"]["img"], black: this.defs[pieceName]["B"]["img"] };

        // provide static copy so that can reset if need to:
        this.loadedName = JSON.parse(JSON.stringify(this.state.name));
        this.loadedSpans = JSON.parse(JSON.stringify(this.spans));
        this.loadedOffsets = JSON.parse(JSON.stringify(this.offsets));

        //reminder: calls this.update() at end
        this.setLoc("d4");
    }

    togleLoadModal(boolVal) {
        this.setState({ isLoadModal: boolVal });
    }

    setUnsavedChanges(boolVal) {
        this.setState({ unsavedChanges: boolVal });
    }

    save() {
        let namecase = this.getNameCase();
        if (namecase !== "valid") {
            this.setSaveStatus(namecase);
            return;
        }

        if (this.whiteAndBlackImgs["white"] === null || this.whiteAndBlackImgs["black"] === null) {
            this.setSaveStatus("no-Icon");
            return;
        }

        this.defs[this.state.name] = {
            W: { spans: null, offsets: null, img: null },
            B: { spans: null, offsets: null, img: null },
        };

        const angles = [];
        for (const s of Object.keys(this.spans)) {
            if (this.spans[s]) angles.push(s);
        }

        this.defs[this.state.name]["W"]["spans"] = getStepFuncNames(angles);
        this.defs[this.state.name]["B"]["spans"] = getStepFuncNames(getRotations(angles, 180));
        this.defs[this.state.name]["W"]["offsets"] = this.offsets;
        this.defs[this.state.name]["B"]["offsets"] = flipOffsets(this.offsets);
        this.defs[this.state.name]["W"]["img"] = this.whiteAndBlackImgs["white"];
        this.defs[this.state.name]["B"]["img"] = this.whiteAndBlackImgs["black"];

        saveDef(this.state.name, this.defs[this.state.name]).then(([response]) => {
            this.setState({ unsavedChanges: false });
            this.setSaveStatus("success");
        });
    }

    setSaveStatus(value) {
        this.setState({ saveStatus: value });
        switch (this.state.saveStatus) {
            case "saving":
                this.setState({
                    isMessageModal: false,
                    confirmOverwriteModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "blank-Name":
                this.msgModalConfig = {
                    title: "blank Name",
                    text: "You must give a piece Name before saving.",
                    togleMethod: this.resetSaveStatus,
                };
                this.setState({
                    isMessageModal: true,
                    confirmOverwriteModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "standard-Name":
                this.msgModalConfig = {
                    title: "used standard Name",
                    text:
                        "You can not use the Name of any of the 6 standard pieces: Rook, Bishop, Knight, King, Queen, and Pawn.",
                    togleMethod: this.resetSaveStatus,
                };
                this.setState({
                    isMessageModal: true,
                    confirmOverwriteModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "no-Icon":
                this.msgModalConfig = {
                    title: "Missing Icon",
                    text: "You must pick an image Icon for both hover-off and black.",
                    togleMethod: this.resetSaveStatus,
                };
                this.setState({
                    isMessageModal: true,
                    confirmOverwriteModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "success":
                this.setState({
                    displaySuccessfullSaveMessage: true,
                    confirmOverwriteModal: false,
                    isMessageModal: false,
                });
                break;
            case "confirm-overwrite":
                this.setState({
                    isMessageModal: false,
                    confirmOverwriteModal: true,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            case "reset":
                this.clear();
                break;
            case "none":
                this.setState({
                    isMessageModal: false,
                    confirmOverwriteModal: false,
                    displaySuccessfullSaveMessage: false,
                });
                break;
            default:
                break;
        }
    }

    prepareDelete(pieceName) {
        this.setState({ pendingDelete: pieceName, isDeleteModal: true });
    }

    cancelDelete() {
        this.setState({ pendingDelete: null, isDeleteModal: false, isLoadModal: false });
    }

    deletePiece() {
        deleteDef(this.state.pendingDelete).then(([response]) => {
            delete this.defs[this.state.pendingDelete];
            delete this.displayDefs[this.state.pendingDelete];
            this.setState({ isDeleteModal: false, isLoadModal: false, pendingDelete: null });
        });
    }

    updateName(input) {
        this.setState({ name: input });
        this.setState({ unsavedChanges: true });
    }

    setPieceImg(color, pieceImgBase64Str) {
        this.whiteAndBlackImgs[color] = pieceImgBase64Str;
        this.setState({ unsavedChanges: true });
    }

    togleSpan(angle) {
        this.spans[angle] = !this.spans[angle];
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.state.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = this.spans[angle];
            rf = stepFunc(rf);
        }
        this.setState({ unsavedChanges: true });
    }

    setDisplaySpan(angle) {
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.state.location);
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
        this.setState({ showSpanText: !this.state.showSpanText });
    }

    resetSpanDisplays() {
        this.spanDisplays = getBinaryBoarAllFalse();
    }

    resetOffsetDisplays() {
        this.offsetDisplays = getBinaryBoarAllFalse();
    }

    togleJump(rf, offset) {
        this.offsetDisplays[rf] = !this.offsetDisplays[rf];
        let offsetStrs = this.offsets.map((o) => JSON.stringify(o));
        if (offsetStrs.includes(JSON.stringify(offset))) {
            let i = offsetStrs.indexOf(JSON.stringify(offset));
            this.offsets.splice(i, 1);
        } else this.offsets.push(offset);
    }

    setOffsetDisplays() {
        let [x1, y1] = rfToXy(this.state.location);
        let [dx, dy] = [-1, -1];
        this.offsets.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            this.offsetDisplays[xyToRf(dx, dy)] = true;
        });
    }

    togleOffsetText() {
        this.setState({ showOffsetText: !this.state.showOffsetText });
    }

    setLoc(rf) {
        this.setState({ location: rf });
        this.resetSpanDisplays();
        this.resetOffsetDisplays();
        this.setDisplaySpans();
        this.setOffsetDisplays();
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    getNameCase() {
        if (this.state.name === "") return "blank-Name";
        //if name is one of: Queen, King, Rook, Bishop, Knight, Pawn:
        if (this.standardsLc.includes(this.state.name.toLowerCase())) return "standard-Name";
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
        this.setSaveStatus("none");
    }

    resetDisplayBoardAndRange() {
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
        this.spanDisplays = getBinaryBoarAllFalse();
        this.offsetDisplays = getBinaryBoarAllFalse();
    }

    eraseRange() {
        this.resetDisplayBoardAndRange();
        this.setState({ unsavedChanges: true, saveStatus: "none" });
    }

    clear() {
        this.resetDisplayBoardAndRange();
        this.setState({ name: "", location: "d4", unsavedChanges: true });
        this.whiteAndBlackImgs = { white: null, black: null };
        this.setSaveStatus("none");
    }

    reset() {
        if (this.loadedName === null) this.clear();
        else {
            this.spans = JSON.parse(JSON.stringify(this.loadedSpans));
            this.offsets = JSON.parse(JSON.stringify(this.loadedOffsets));
            const name = JSON.parse(JSON.stringify(this.loadedName));
            this.setSaveStatus("none");
            this.setState({ name: name, unsavedChanges: false });
        }
    }

    resetIconWindowIfImageDeleted(deletedBase64ImgStr) {
        if (this.whiteAndBlackImgs["white"] === deletedBase64ImgStr) this.whiteAndBlackImgs["white"] = null;
        if (this.whiteAndBlackImgs["black"] === deletedBase64ImgStr) this.whiteAndBlackImgs["black"] = null;
    }

    setCurrentIconColor(color) {
        this.setState({ currentIconColor: color });
    }

    showChooseModal(color) {
        this.setState({ chooseModal: true, currentIconColor: color });
    }

    closeChooseModal() {
        this.setState({ chooseModal: false, currentIconColor: null });
    }

    setSelectedToolMobile(selectedToolMobile) {
        this.setState({ selectedToolMobile: selectedToolMobile });
    }

    getComponents(screenCase) {
        return (
            <>
                {/*SaveModals */}
                {this.state.isMessageModal && (
                    <MessageModal
                        screenCase={screenCase}
                        messageTitle={this.msgModalConfig.title}
                        messageText={this.msgModalConfig.text}
                        togleMessageModal={this.msgModalConfig.togleMethod}
                    />
                )}
                {this.state.isLoadModal && (
                    <ProfilesModal
                        load={this.load}
                        defs={this.defs}
                        screenCase={screenCase}
                        togleLoadModal={this.togleLoadModal}
                        prepareDelete={this.prepareDelete}
                    />
                )}
                {this.state.chooseModal && (
                    <ChooseModal
                        screenCase={screenCase}
                        closeChooseModal={this.closeChooseModal}
                        setPieceImg={this.setPieceImg}
                        color={this.state.currentIconColor}
                        setUnsaved={this.setUnsavedChanges}
                        resetIconWindowIfImageDeleted={this.resetIconWindowIfImageDeleted}
                    />
                )}
                {this.state.confirmOverwriteModal && (
                    <ConfirmModal
                        screenCase={screenCase}
                        text={`A piece named ${this.name} already exists. do you want to replace it?`}
                        yesClick={() => this.save()}
                        noClick={() => this.setSaveStatus("none")}
                    />
                )}
                {this.state.isDeleteModal && (
                    <ConfirmModal
                        text={`You are asking to delete piece "${this.state.pendingDelete}". Games in progress will not be
                    effected but the piece's record for new games will be destroyed. This action cannot be undone.
                    Are you sure you want to delete piece "${this.state.pendingDelete}"?`}
                        yesClick={this.deletePiece}
                        noClick={this.cancelDelete}
                    />
                )}
                {this.state.displaySuccessfullSaveMessage && (
                    <div className="save-piece-modal">
                        <Success setSaveStatus={this.setSaveStatus} />
                    </div>
                )}
                {/*At time writing ordered by appearance on screen from top to bottom left to right*/}
                <NavBar
                    currentPage="CreatePiece"
                    redirectMessage={createPieceRedirectMessageStr}
                    unsavedChanges={this.state.unsavedChanges}
                    theme={this.state.theme}
                />
                <NameLabel name={this.name} />
                <Board
                    screenCase={screenCase}
                    update={this.update}
                    togleJump={this.togleJump}
                    spanDisplays={this.spanDisplays}
                    jumps={this.offsetDisplays}
                    pieceLoc={this.state.location}
                    pieceImgBase64Str={this.whiteAndBlackImgs["white"]}
                    showSpanText={this.state.showSpanText}
                    showOffsetText={this.state.showOffsetText}
                    setUnsaved={this.setUnsavedChanges}
                />
                {screenCase === "mobile" && <ToolsMenuMobile notifyParent={this.setSelectedToolMobile} />}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "name") && (
                    <Name
                        name={this.name}
                        screenCase={screenCase}
                        updateName={this.updateName}
                        setUnsaved={this.setUnsavedChanges}
                    />
                )}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "icon") && (
                    <Icon
                        screenCase={screenCase}
                        pieceImg={this.whiteAndBlackImgs}
                        setPieceImg={this.setPieceImg}
                        updateParent={this.update}
                        showChooseModal={this.showChooseModal}
                        currentIconColor={this.state.currentIconColor}
                        setCurrentIconColor={this.setCurrentIconColor}
                        setUnsaved={this.setUnsavedChanges}
                    />
                )}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "range") && (
                    <Range
                        theme={this.state.theme}
                        screenCase={screenCase}
                        spans={this.spans}
                        offsets={this.offsets}
                        togleSpan={this.togleSpan}
                        setUnsaved={this.setUnsavedChanges}
                        update={this.update}
                    />
                )}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "location") && (
                    <Location
                        location={this.state.location}
                        screenCase={screenCase}
                        setLoc={this.setLoc}
                        theme={this.state.theme}
                    />
                )}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "options") && (
                    <Options
                        screenCase={screenCase}
                        save={this.save}
                        name={this.name}
                        clear={this.clear}
                        reset={this.reset}
                        togleLoadModal={this.togleLoadModal}
                        togleMessageModal={this.togleMessageModal}
                        setUnsaved={this.setUnsavedChanges}
                        eraseRange={this.eraseRange}
                        saveStatus={this.state.saveStatus}
                        setSaveStatus={this.setSaveStatus}
                        namesOfExistingPieces={Object.keys(this.defs)}
                    />
                )}
                {/* <div className="settings">
                    <div className="show-spans-label">span text squares</div>
                    <ShowSpansCheckbox togleSpanText={this.props.togleSpanText} />
                    <div className="show-offsets-label">offset text squares</div>
                    <ShowOffsetsCheckbox togleOffsetText={this.props.togleOffsetText} />
                </div> */}
            </>
        );
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>{this.getComponents("desktop")}</MediaQuery>
                <MediaQuery maxDeviceWidth={767}>{this.getComponents("mobile")}</MediaQuery>
            </>
        );
    }
}

export let test = () => ReactDOM.render(<CreatePiece defs={defs} />, document.getElementById("root"));
