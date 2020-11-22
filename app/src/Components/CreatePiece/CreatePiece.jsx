import React from "react";
import MediaQuery from "react-responsive";
import NavBar from "../NavBar/NavBar";
import { Name } from "./Name/Name";
import { Icon } from "./Icon/Icon";
import { Range } from "./Range/Range";
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
import { getBinaryBoarAllFalse } from "./getBinaryBoardAllFalse";
import "./scss/CreatePiece.scss";

class CreatePiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "d4",
            theme: "dark",
            binaryValue: 0,
            unsavedChanges: false,
            whiteImg: null,
            blackImg: null,
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
            displaySuccessfulSaveMessage: false,
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
            toggleMethod: this.toggleMessageModal,
        };

        //these are used because of Reset Option.
        this.loadedName = null;
        this.loadedSpans = null;
        this.loadedOffsets = null;

        //binds
        this.save = this.save.bind(this);
        this.load = this.load.bind(this);
        this.reset = this.reset.bind(this);
        this.clear = this.clear.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.deletePiece = this.deletePiece.bind(this);
        this.prepareDelete = this.prepareDelete.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.eraseRange = this.eraseRange.bind(this);
        this.updateName = this.updateName.bind(this);
        this.setSaveStatus = this.setSaveStatus.bind(this);
        this.toggleSpan = this.toggleSpan.bind(this);
        this.toggleOffset = this.toggleOffset.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.toggleSpanText = this.toggleSpanText.bind(this);
        this.toggleOffsetText = this.toggleOffsetText.bind(this);
        // this.setMessageText = this.setMessageText.bind(this);
        this.setCurrentIconColor = this.setCurrentIconColor.bind(this);
        this.showChooseModal = this.showChooseModal.bind(this);
        this.closeChooseModal = this.closeChooseModal.bind(this);
        this.toggleLoadModal = this.toggleLoadModal.bind(this);
        this.toggleMessageModal = this.toggleMessageModal.bind(this);
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

    triggerRender() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    load(pieceName) {
        this.spans = getSpansDict(this.defs[pieceName]["W"]["spans"]);
        this.offsets = this.defs[pieceName]["W"]["offsets"];
        this.whiteAndBlackImgs = { white: this.defs[pieceName]["W"]["img"], black: this.defs[pieceName]["B"]["img"] };

        // provide static copy so that can reset if need to:
        this.loadedName = JSON.parse(JSON.stringify(this.state.name));
        this.loadedSpans = JSON.parse(JSON.stringify(this.spans));
        this.loadedOffsets = JSON.parse(JSON.stringify(this.offsets));
        this.setLoc("d4");
        this.setState({ name: pieceName, isLoadModal: false, unsavedChanges: false });
    }

    toggleLoadModal(boolVal) {
        this.setState({ isLoadModal: boolVal });
    }

    save() {
        let saveCase = this.getIfReadyToSave();
        if (saveCase !== "ready") {
            this.setSaveStatus(saveCase);
            return;
        }

        //creating new entry in dictionary to save piece to
        this.defs[this.state.name] = {
            W: { spans: null, offsets: null, img: null },
            B: { spans: null, offsets: null, img: null },
        };

        const angles = [];
        for (const s of Object.keys(this.spans)) {
            if (this.spans[s]) angles.push(s);
        }

        this.defs[this.state.name].W.spans = getStepFuncNames(angles);
        this.defs[this.state.name].B.spans = getStepFuncNames(getRotations(angles, 180));
        this.defs[this.state.name].W.offsets = this.offsets;
        this.defs[this.state.name].B.offsets = flipOffsets(this.offsets);
        this.defs[this.state.name].W.img = this.whiteAndBlackImgs.white;
        this.defs[this.state.name].B.img = this.whiteAndBlackImgs.black;

        saveDef(this.state.name, this.defs[this.state.name]).then(([response]) => {
            this.setSaveStatus("success");
            this.setState({ unsavedChanges: false });
        });
    }

    setSaveStatus(value) {
        this.saveStatus = value;
        switch (this.saveStatus) {
            case "blank-Name":
                this.msgModalConfig = { title: "blank Name", text: "You must give a piece Name before saving." };
                this.setState({ isMessageModal: true });
                break;
            case "standard-Name":
                this.msgModalConfig = {
                    title: "used standard Name",
                    text:
                        "You cannot use the Name of any of the 6 standard pieces: Rook, Bishop, Knight, King, Queen, and Pawn.",
                };
                this.setState({ isMessageModal: true });
                break;
            case "no-Icon":
                this.msgModalConfig = {
                    title: "Missing Icon",
                    text: "You must pick an image Icon for both hover-off and black.",
                };
                this.setState({ isMessageModal: true });
                break;
            case "success":
                this.setState({ isMessageModal: false, displaySuccessfulSaveMessage: true });
                break;
            case "confirm-overwrite":
                this.setState({ isMessageModal: false, displaySuccessfulSaveMessage: false });
                break;
            case "none":
                this.setState({ isMessageModal: false, displaySuccessfulSaveMessage: false });
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
        /**used by name tool*/
        this.setState({ name: input, unsavedChanges: true });
    }

    setPieceImg(color, pieceImgBase64Str) {
        /**used by Icon tool*/
        this.whiteAndBlackImgs[color] = pieceImgBase64Str;
        this.setState({ unsavedChanges: true });
    }

    toggleSpan(angle) {
        /**used by Range tool*/
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
        /**used by Location tool, called by this.setDisplaySpans()*/
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.state.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    setDisplaySpans() {
        /**used by Location tool, called by this.setLoc()*/
        Object.entries(this.spans).forEach(([angle, isActive]) => {
            if (isActive) this.setDisplaySpan(angle);
        });
    }

    toggleSpanText() {
        /**used by checkbox for displaying text on squares*/
        this.setState({ showSpanText: !this.state.showSpanText });
    }

    resetSpanDisplays() {
        /**used by the Reset Option button, called by this.reset()*/
        this.spanDisplays = getBinaryBoarAllFalse();
    }

    resetOffsetDisplays() {
        /**used by the Reset Option button, called by this.reset()*/
        this.offsetDisplays = getBinaryBoarAllFalse();
    }

    toggleOffset(rf, offset) {
        /**used by Range tool*/
        this.offsetDisplays[rf] = !this.offsetDisplays[rf];
        let offsetStrs = this.offsets.map((o) => JSON.stringify(o));
        if (offsetStrs.includes(JSON.stringify(offset))) {
            let i = offsetStrs.indexOf(JSON.stringify(offset));
            this.offsets.splice(i, 1);
        } else this.offsets.push(offset);
        this.setState({ unsavedChanges: true });
    }

    setOffsetDisplays() {
        /**used by the Location tool when changing location*/
        let [x1, y1] = rfToXy(this.state.location);
        let [dx, dy] = [-1, -1];
        this.offsets.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            this.offsetDisplays[xyToRf(dx, dy)] = true;
        });
    }

    toggleOffsetText() {
        /**used by Checkboxes that toggle displaying text on squares*/
        this.setState({ showOffsetText: !this.state.showOffsetText });
    }

    setLoc(rf) {
        /**used by the Location tool*/
        this.setState({ location: rf });
        this.resetSpanDisplays();
        this.resetOffsetDisplays();
        this.setDisplaySpans();
        this.setOffsetDisplays();
        this.triggerRender();
    }

    getIfReadyToSave() {
        /**
         * the cases are used to determine what message to display. they are reset to none after each
         * save attempt:
         *
         * confirm-overwrite: the name given already exists and need to ask if want to save over it.
         * blank-name: name field left blank
         * standard-name: name given was one of of Rook, Bishop, King, Queen or Pawn
         * no-icon: an image was not given for either white or black or both
         * ready: none of the above cases are true so ready to save
         */

        if (Object.keys(this.defs).includes(this.props.name)) {
            return "confirm-overwrite";
        }

        if (this.state.name === "") {
            return "blank-Name";
        }

        if (this.standardsLc.includes(this.state.name.toLowerCase())) {
            return "standard-Name";
        }

        if (this.whiteAndBlackImgs["white"] === null || this.whiteAndBlackImgs["black"] === null) {
            return "no-Icon";
        }

        return "ready";
    }

    // setMessageText(helpTitle, helpText) {
    //     /**/
    //     this.messageTitle = helpTitle;
    //     this.messageText = helpText;
    //     this.setState({ messageModal: true });
    // }

    toggleMessageModal(boolVal) {
        /**used by Save Button when a message needs to be displayed*/
        this.setState({ messageModal: boolVal });
    }

    resetSaveStatus() {
        /**used by Save tool, after a message has been displayed or a Save has occurred, that nothing more needs to be done*/
        this.setSaveStatus("none");
    }

    resetDisplayBoardAndRange() {
        /**used by the Reset Option button. called by this.eraseRange() and this.clear()*/
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
        /**used by the Erase Option button*/
        this.resetDisplayBoardAndRange();
        if (this.state.name === "" && !this.whiteAndBlackImgs.white && !this.whiteAndBlackImgs.black) {
            this.setState({ unsavedChanges: false });
        } else {
            this.setState({ unsavedChanges: true });
        }
        this.setSaveStatus("none");
    }

    clear() {
        /*used by Reset Option when not a loaded piece*/
        this.resetDisplayBoardAndRange();
        this.whiteAndBlackImgs = { white: null, black: null };
        this.setState({ name: "", location: "d4", unsavedChanges: false });
        this.setSaveStatus("none");
    }

    reset() {
        if (this.loadedName === null) this.clear();
        else {
            this.spans = JSON.parse(JSON.stringify(this.loadedSpans));
            this.offsets = JSON.parse(JSON.stringify(this.loadedOffsets));
            const name = JSON.parse(JSON.stringify(this.loadedName));
            this.setState({ name: name, unsavedChanges: false });
            this.setSaveStatus("none");
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
                        toggleMessageModal={this.resetSaveStatus}
                    />
                )}
                {this.state.isLoadModal && (
                    <ProfilesModal
                        load={this.load}
                        defs={this.defs}
                        screenCase={screenCase}
                        togleLoadModal={this.toggleLoadModal}
                        prepareDelete={this.prepareDelete}
                    />
                )}
                {this.state.chooseModal && (
                    <ChooseModal
                        screenCase={screenCase}
                        closeChooseModal={this.closeChooseModal}
                        setPieceImg={this.setPieceImg}
                        color={this.state.currentIconColor}
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
                {this.state.displaySuccessfulSaveMessage && (
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
                    update={this.triggerRender}
                    toggleOffset={this.toggleOffset}
                    spanDisplays={this.spanDisplays}
                    offsets={this.offsetDisplays}
                    pieceLoc={this.state.location}
                    pieceImgBase64Str={this.whiteAndBlackImgs["white"]}
                    showSpanText={this.state.showSpanText}
                    showOffsetText={this.state.showOffsetText}
                />
                {screenCase === "mobile" && <ToolsMenuMobile notifyParent={this.setSelectedToolMobile} />}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "name") && (
                    <Name name={this.name} screenCase={screenCase} updateName={this.updateName} />
                )}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "icon") && (
                    <Icon
                        screenCase={screenCase}
                        pieceImg={this.whiteAndBlackImgs}
                        setPieceImg={this.setPieceImg}
                        updateParent={this.triggerRender}
                        showChooseModal={this.showChooseModal}
                        currentIconColor={this.state.currentIconColor}
                        setCurrentIconColor={this.setCurrentIconColor}
                    />
                )}
                {(screenCase !== "mobile" || this.state.selectedToolMobile === "range") && (
                    <Range
                        theme={this.state.theme}
                        screenCase={screenCase}
                        spans={this.spans}
                        offsets={this.offsets}
                        togleSpan={this.toggleSpan}
                        update={this.triggerRender}
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
                        save={this.save}
                        reset={this.reset}
                        togleLoadModal={this.toggleLoadModal}
                        eraseRange={this.eraseRange}
                        screenCase={screenCase}
                    />
                )}
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

export default CreatePiece;
