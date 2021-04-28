import React from "react";
import { copy } from "../helpers/copy";
import { getDef } from "../../API/getDef";
import { saveDef } from "../../API/saveDef";
import MediaQuery from "react-responsive/src";
import "../Reuseables/Background/_backgrounds.scss";
import withStyles from "@material-ui/core/styles/withStyles";
import { HelpTitle } from "../Reuseables/NavBar/Help/HelpTitle";
import { CreatePieceHelp } from "./Help/CreatePieceHelp";
import { messageStr } from "./helpers/messageStr";
import { stepFuncDict } from "../helpers/stepFuncs";
import { outOfBounds as oob } from "../helpers/oob";
import { rfToXy, xyToRf } from "../helpers/crdCnvrt";
import { getRotations } from "./helpers/getRotations";
import { getSpansDict } from "./helpers/getSpansDict";
import { flipOffsets } from "./helpers/flipOffsets";
import { getStepFuncNames } from "./helpers/getStepFuncNames";
import { getBinaryBoarAllFalse } from "../helpers/getBinaryBoardAllFalse";
import { LocationSquaresEnter } from "../Reuseables/Animations/LocationSquaresEnter";
import { AnimatePresencePortal } from "../Reuseables/Animations/AnimatePresencePortal";
import { incrementImgRefCounts } from "../../API/incrementImgRefCounts";
import { updateCountsOnOverwrite } from "../../API/updateCountsOnOverwrite";
import { ShowOffsetText } from "./Board/RangeLabelComponents/ShowOffsetText";
import { ShowSpanText } from "./Board/RangeLabelComponents/ShowSpanText";
import { PageTitle } from "../Reuseables/AppBar/PageTitle";
import { MuiSwitch } from "../Reuseables/Clickables/MuiSwitch";
import { PieceName } from "../PieceProfiles/Header/PieceName";
import { styles } from "./CreatePiece.jss";

const Load = React.lazy(() => import('./Options/Load'));
const Save = React.lazy(() => import('./Options/Save'));
const Reset = React.lazy(() => import('./Options/Reset'));
const Erase = React.lazy(() => import('./Options/Erase'));
const Name = React.lazy(() => import('./Name/Name'));
const Icon = React.lazy(() => import('./Icon/Icon'));
const Range = React.lazy(() => import('./Range/Range'));
const Options = React.lazy(() => import('./Options/Options'));
const Location = React.lazy(() => import('./Location/Location'));
const NavBar = React.lazy(() => import('../Reuseables/NavBar/NavBar'));
const CreatePieceBoard = React.lazy(() => import('./Board/CreatePieceBoard'));
const ToolButton = React.lazy(() => import('../Reuseables/Clickables/ToolButton'));
const ToolButtonAlt = React.lazy(() => import('../Reuseables/Clickables/ToolButtonAlt'));
const ResponsiveDrawer = React.lazy(() => import('../Reuseables/Drawers/ResponsiveDrawer'));
const PieceSavedSuccessfully = React.lazy(() => import('./animations/PieceSavedSuccessfully'));
const PuttingThePieceICreatedIntoAGame = React.lazy(() => import('../Reuseables/NavBar/Help/Extra/PuttingThePieceICreatedIntoAGame'));


class CreatePiece extends React.Component {
    constructor(props) {
        super(props);
        this.name = "";
        this.location = "d4";
        this.textInput = React.createRef();
        this.state = {
            loadInstance: 0,
            theme: "dark",
            binaryValue: 0,
            justSaved: false,
            showSpanText: true,
            showOffsetText: true,
            locSqrAnimate: false,
            isFirstVisit: false,
            miniVariantTool: null,
            clientX: 0,
            clientY: 0,
        };
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

        this.whiteAndBlackImgs = { white: null, black: null };

        //these are used because of Reset Option.
        this.loadedName = "";
        this.loadedSpans = null;
        this.loadedOffsets = null;

        //binds
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
        this.erase = this.erase.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.resetImg = this.resetImg.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.updateName = this.updateName.bind(this);
        this.toggleSpan = this.toggleSpan.bind(this);
        this.updateTheme = this.updateTheme.bind(this);
        this.toggleOffset = this.toggleOffset.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
        this.isUnsavedChanges = this.isUnsavedChanges.bind(this);
        this.updateFirstVisit = this.updateFirstVisit.bind(this);
        this.toggleMiniVariantTool = this.toggleMiniVariantTool.bind(this);
        this.locationToolClick = this.locationToolClick.bind(this);
        //if MyPieces page redirected to here:
        if (
            this.props.location !== undefined &&
            this.props.location.state !== undefined &&
            this.props.location.state.name !== undefined
        ) {
            this.load({
                name: this.props.location.state.name,
                spans: this.props.location.state.spans,
                offsets: this.props.location.state.offsets,
                whiteImg: this.props.location.state.whiteImg,
                blackImg: this.props.location.state.blackImg,
            });
        }
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    componentDidUpdate() {
        if (this.state.theme === "tan") {
            document.body.className = "tan-background-alt";
        } else {
            document.body.className = `${this.state.theme}-background`;
        }
    }

    updateFirstVisit(isFirstVisit) {
        this.setState({ isFirstVisit: isFirstVisit });
    }

    triggerRender() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    toggleMiniVariantTool(toolName, clientX, clientY) {
        if (this.state.miniVariantTool === toolName) {
            this.setState({ miniVariantTool: null, clientX: clientX, clientY: clientY });
        } else {
            this.setState({ miniVariantTool: toolName, clientX: clientX, clientY: clientY });
        }
    }

    locationToolClick() {
        if (this.state.miniVariantTool === "Location") {
            this.setState({ miniVariantTool: null });
        } else {
            this.setState({ locSqrAnimate: true, miniVariantTool: null });
        }
    }

    isUnsavedChanges() {
        return this.unsavedChanges;
    }

    load({ name, spans, offsets, whiteImg, blackImg }) {
        this.name = name;
        this.offsets = offsets;
        this.spans = getSpansDict(spans);
        this.whiteAndBlackImgs = { white: whiteImg, black: blackImg };
        this.loadedName = copy(this.name);
        this.loadedSpans = copy(this.spans);
        this.loadedOffsets = copy(this.offsets);
        this.loadedImgs = copy(this.whiteAndBlackImgs);
        this.setState({
            unsavedChanges: false,
            loadInstance: this.state.loadInstance + 1,
        });
        this.setLoc("d4");
    }

    save() {
        const newPiece = {
            W: { spans: null, offsets: null, img: null },
            B: { spans: null, offsets: null, img: null },
        };
        const angles = [];
        for (const s of Object.keys(this.spans)) {
            if (this.spans[s]) angles.push(s);
        }
        newPiece.W.offsets = this.offsets;
        newPiece.W.spans = getStepFuncNames(angles);
        newPiece.B.spans = getStepFuncNames(getRotations(angles, 180));
        newPiece.B.offsets = flipOffsets(this.offsets);
        newPiece.W.img = this.whiteAndBlackImgs.white;
        newPiece.B.img = this.whiteAndBlackImgs.black;
        getDef(this.name).then(([oldPieceFromDb]) => {
            if (oldPieceFromDb) {
                updateCountsOnOverwrite(
                    [oldPieceFromDb.W.img, oldPieceFromDb.B.img],
                    [newPiece.W.img, newPiece.B.img]
                ).then((r) => {
                    saveDef(this.name, newPiece).then((r) => {
                        this.setState({
                            unsavedChanges: false,
                            justSaved: true,
                        });
                    });
                });
            } else {
                incrementImgRefCounts(
                    Array.from(new Set([newPiece.W.img, newPiece.B.img]))
                ).then((r) => {
                    saveDef(this.name, newPiece).then((r) => {
                        this.setState({
                            unsavedChanges: false,
                            justSaved: true,
                        });
                    });
                });
            }
        });
    }

    /**
     * reset to the last saved or loaded, or to blank if not saved or loaded
     */
    reset() {
        if (!this.loadedName) {
            this.erase();
        } else {
            this.name = copy(this.loadedName);
            this.spans = copy(this.loadedSpans);
            this.offsets = copy(this.loadedOffsets);
            this.whiteAndBlackImgs = copy(this.loadedImgs);
            this.setLoc("d4");
        }
        this.setState({
            unsavedChanges: false,
            loadInstance: this.state.loadInstance + 1,
        });
        this.triggerRender();
    }

    /**
     * used by the Erase Option button to erase the range of a piece all spans
     * and offsets are reset to false. The images for white and black are not
     * */
    erase() {
        this.resetOffsetsAndRange();
        this.name = "";
        this.whiteAndBlackImgs = { white: null, black: null };
        this.setState({
            unsavedChanges: false,
            loadInstance: this.state.loadInstance + 1,
        });
    }

    /**used by Name tool*/
    updateName(name) {
        this.name = name;
        this.setState({ unsavedChanges: true });
    }

    /**used by Icon tool*/
    setPieceImg(color, imgUrl) {
        this.whiteAndBlackImgs[color] = imgUrl;
        this.setState({ unsavedChanges: true });
    }

    /**used by Range tool*/
    toggleSpan(angle) {
        this.spans[angle] = !this.spans[angle];
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = this.spans[angle];
            if (this.offsetDisplays[rf]) {
                this.removeOffset(rf);
            }
            rf = stepFunc(rf);
        }
        this.setState({ unsavedChanges: true });
    }

    /**used by Location tool, called by this.setDisplaySpans()*/
    setDisplaySpan(angle) {
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    /**
     *  used by Location tool, called by this.setLoc()
     *  updates the squares that are highlighted when piece location changes
     * */
    setSpanDisplays() {
        Object.entries(this.spans).forEach(([angle, isActive]) => {
            if (isActive) {
                this.setDisplaySpan(angle);
            }
        });
    }

    /**used by the Reset Option button, called by this.reset()*/
    resetSpanDisplays() {
        this.spanDisplays = getBinaryBoarAllFalse();
    }

    /**used by Range tool*/
    toggleOffset(rf, offset) {
        this.offsetDisplays[rf] = !this.offsetDisplays[rf];
        let offsetStrs = this.offsets.map((o) => JSON.stringify(o));
        if (offsetStrs.includes(JSON.stringify(offset))) {
            let i = offsetStrs.indexOf(JSON.stringify(offset));
            this.offsets.splice(i, 1);
        } else this.offsets.push(offset);
        this.setState({ unsavedChanges: true });
    }

    /**called by this.toggleSpan() used when span is overriding an offset */
    removeOffset(rf) {
        this.offsetDisplays[rf] = false;
        let [x1, y1] = rfToXy(this.location);
        let [x2, y2] = rfToXy(rf);
        let offset = [x2 - x1, y2 - y1];
        let offsetStrs = this.offsets.map((o) => JSON.stringify(o));
        let i = offsetStrs.indexOf(JSON.stringify(offset));
        this.offsets.splice(i, 1);
    }

    /**used by the Location tool. Changes the spans displayed on board when piece location changes*/
    setOffsetDisplays() {
        let [x1, y1] = rfToXy(this.location);
        let [dx, dy] = [-1, -1];
        this.offsets.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            this.offsetDisplays[xyToRf(dx, dy)] = true;
        });
    }

    /**used by the Reset Option button, called by this.reset()*/
    resetOffsetDisplays() {
        this.offsetDisplays = getBinaryBoarAllFalse();
    }

    /**used by the Reset Option button. called by this.eraseRange() and this.clear().*/
    resetOffsetsAndRange() {
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

    /**used by the Location tool*/
    setLoc(rf) {
        this.location = rf;
        this.resetSpanDisplays();
        this.resetOffsetDisplays();
        this.setSpanDisplays();
        this.setOffsetDisplays();
        this.triggerRender();
    }

    /**
     * set white or black image to null if it was just deleted from database
     * @param deletedImgUrl (str)
     */
    resetImg(deletedImgUrl) {
        if (this.whiteAndBlackImgs.white === deletedImgUrl) {
            this.whiteAndBlackImgs.white = null;
        }
        if (this.whiteAndBlackImgs.black === deletedImgUrl) {
            this.whiteAndBlackImgs.black = null;
        }
        this.triggerRender();
    }

    modals() {
        return (
            <>
                {this.state.isFirstVisit && this.state.justSaved && (
                    <PuttingThePieceICreatedIntoAGame
                        theme={this.state.theme}
                        updateTheme={this.updateTheme}
                        onClose={() => this.updateFirstVisit(false)}
                        title={
                            <HelpTitle
                                theme={this.state.theme}
                                fontSize={"2.6vh"}
                            >
                                Congratulations on Creating Your First Piece!
                                Here's How To Put it Into a Game
                            </HelpTitle>
                        }
                    />
                )}
                {!this.state.isFirstVisit && this.state.justSaved && (
                    <AnimatePresencePortal>
                        <PieceSavedSuccessfully
                            callback={() => this.setState({ justSaved: false })}
                            theme={this.state.theme}
                        />
                    </AnimatePresencePortal>
                )}
                {this.state.locSqrAnimate && (
                    <LocationSquaresEnter
                        theme={this.state.theme}
                        pieceLoc={this.location}
                        isImg={this.whiteAndBlackImgs.white}
                        onAnimationComplete={() =>
                            this.setState({
                                miniVariantTool: "Location",
                                locSqrAnimate: false,
                            })
                        }
                    />
                )}
            </>
        );
    }

    updateTheme(theme) {
        this.setState({ theme: theme });
    }

    render() {
        return (
            <>
                {this.modals()}
                <div>
                    <Name
                        defaultValue={this.name}
                        theme={this.state.theme}
                        clientX={this.state.clientX}
                        clientY={this.state.clientY}
                        updateName={this.updateName}
                        key={`Name-thin${this.state.loadInstance}`}
                        miniVariantTool={this.state.miniVariantTool}
                        toggleMiniVariantTool={this.toggleMiniVariantTool}
                    />
                    <Icon
                        key="Icon-thin"
                        theme={this.state.theme}
                        resetImg={this.resetImg}
                        clientX={this.state.clientX}
                        clientY={this.state.clientY}
                        setPieceImg={this.setPieceImg}
                        whiteAndBlackImgs={this.whiteAndBlackImgs}
                        miniVariantTool={this.state.miniVariantTool}
                        toggleMiniVariantTool={this.toggleMiniVariantTool}
                    />
                </div>
                <ResponsiveDrawer
                    appBarType="title"
                    appBarContent={
                        <>
                            <MediaQuery maxWidth={960}>
                                {this.name ? (
                                    <PieceName
                                        theme={this.state.theme}
                                        className={
                                            this.props.classes.piece_name
                                        }
                                        title={`Piece name: "${this.name}" (Create Piece page)`}
                                    >
                                        {this.name}
                                    </PieceName>
                                ) : (
                                    <PageTitle theme={this.state.theme}>
                                        Create Piece
                                    </PageTitle>
                                )}
                            </MediaQuery>
                            <MediaQuery minWidth={960}>
                                <PageTitle theme={this.state.theme}>
                                    Create Piece
                                </PageTitle>
                            </MediaQuery>
                        </>
                    }
                    theme={this.state.theme}
                    className={this.props.classes.drawer}
                    appBarClassName={
                        this.name ? this.props.classes.app_bar_padding : null
                    }
                    tools={
                        <>
                            <Name
                                key={`Name-${this.state.loadInstance}`}
                                updateName={this.updateName}
                                defaultValue={this.name}
                                theme={this.state.theme}
                                miniVariantTool={this.state.miniVariantTool}
                                toggleMiniVariantTool={
                                    this.toggleMiniVariantTool
                                }
                            />
                            <Icon
                                key="Icon"
                                theme={this.state.theme}
                                resetImg={this.resetImg}
                                setPieceImg={this.setPieceImg}
                                whiteAndBlackImgs={this.whiteAndBlackImgs}
                                miniVariantTool={this.state.miniVariantTool}
                                toggleMiniVariantTool={
                                    this.toggleMiniVariantTool
                                }
                            />
                            <Range
                                key="Range"
                                spans={this.spans}
                                offsets={this.offsets}
                                toggleSpan={this.toggleSpan}
                                pieceLoc={this.location}
                                theme={this.state.theme}
                                miniVariantTool={this.state.miniVariantTool}
                                toggleMiniVariantTool={
                                    this.toggleMiniVariantTool
                                }
                            />
                            <Location
                                key="Location"
                                setLoc={this.setLoc}
                                theme={this.state.theme}
                                selectedLoc={this.location}
                                miniVariantTool={this.state.miniVariantTool}
                                toggleMiniVariantTool={
                                    this.toggleMiniVariantTool
                                }
                            />
                            <Options
                                key="Options"
                                load={this.load}
                                save={this.save}
                                reset={this.reset}
                                erase={this.erase}
                                pieceName={this.name}
                                theme={this.state.theme}
                                resetImg={this.resetImg}
                                whiteImg={this.whiteAndBlackImgs.white}
                                blackImg={this.whiteAndBlackImgs.black}
                                justSaved={this.state.justSaved}
                            />
                        </>
                    }
                    toolButtons={
                        <>
                            <ToolButton
                                text="Name"
                                name='Name'
                                iconName={"name_tool"}
                                theme={this.state.theme}
                                isActive={this.state.miniVariantTool === "Name"}
                                updateParent={this.toggleMiniVariantTool}
                            />
                            <ToolButton
                                text="Icon"
                                name='Icon'
                                iconName={"icon_tool"}
                                theme={this.state.theme}
                                isActive={this.state.miniVariantTool === "Icon"}
                                updateParent={this.toggleMiniVariantTool}
                            />
                            <ToolButtonAlt
                                text="Spans"
                                theme={this.state.theme}
                                iconName={"range_tool"}
                                isActive={
                                    this.state.miniVariantTool === "Range"
                                }
                                onClick={() =>
                                    this.toggleMiniVariantTool("Range")
                                }
                            />
                            <ToolButtonAlt
                                text="Location"
                                theme={this.state.theme}
                                iconName={"location_tool"}
                                isActive={
                                    this.state.miniVariantTool === "Location"
                                }
                                onClick={this.locationToolClick}
                            />
                            <Load
                                load={this.load}
                                erase={this.erase}
                                theme={this.state.theme}
                                className={this.props.classes.smOption}
                                buttonType="tool"
                            />
                            <Save
                                save={this.save}
                                pieceName={this.name}
                                className={this.props.classes.smOption}
                                whiteImg={this.whiteAndBlackImgs.white}
                                blackImg={this.whiteAndBlackImgs.black}
                                justSaved={this.state.justSaved}
                                theme={this.state.theme}
                                buttonType="tool"
                            />
                            <Reset
                                reset={this.reset}
                                theme={this.state.theme}
                                className={this.props.classes.smOption}
                                buttonType="tool"
                            />
                            <Erase
                                erase={this.erase}
                                theme={this.state.theme}
                                className={this.props.classes.smOption}
                                buttonType="tool"
                            />
                        </>
                    }
                    navBar={
                        <NavBar
                            currentPage="CreatePiece"
                            theme={this.state.theme}
                            redirectMessage={messageStr}
                            helpTitle={
                                <HelpTitle
                                    theme={this.state.theme}
                                    fontSize={"2.6vh"}
                                >
                                    Creating a Piece
                                </HelpTitle>
                            }
                            helpText={CreatePieceHelp(this.state.theme)}
                            updateFirstVisit={this.updateFirstVisit}
                            additionalSettings={
                                <>
                                    <MuiSwitch
                                        theme={this.state.theme}
                                        className={
                                            this.props.classes.show_offset
                                        }
                                        isChecked={this.state.showOffsetText}
                                        control={
                                            <ShowOffsetText
                                                theme={this.state.theme}
                                                onChange={() =>
                                                    this.setState({
                                                        showOffsetText: !this
                                                            .state
                                                            .showOffsetText,
                                                    })
                                                }
                                            />
                                        }
                                    >
                                        Show Offset Text
                                    </MuiSwitch>
                                    <MuiSwitch
                                        theme={this.state.theme}
                                        className={this.props.classes.show_span}
                                        isChecked={this.state.showSpanText}
                                        control={
                                            <ShowSpanText
                                                theme={this.state.theme}
                                                onChange={() =>
                                                    this.setState({
                                                        showSpanText: !this
                                                            .state.showSpanText,
                                                    })
                                                }
                                            />
                                        }
                                    >
                                        Show Span Text
                                    </MuiSwitch>
                                </>
                            }
                            isUnsavedChanges={this.isUnsavedChanges}
                            updateTheme={this.updateTheme}
                        />
                    }
                    navHorizontal={false}
                    contentClassName={this.props.classes.content}
                >
                    <CreatePieceBoard
                        key="Board"
                        theme={this.state.theme}
                        pieceLoc={this.location}
                        setLoc={this.setLoc}
                        toggleSpan={this.toggleSpan}
                        toggleOffset={this.toggleOffset}
                        spanDisplays={this.spanDisplays}
                        imgUrl={this.whiteAndBlackImgs.white}
                        offsetDisplays={this.offsetDisplays}
                        showSpanText={this.state.showSpanText}
                        showOffsetText={this.state.showOffsetText}
                        miniVariantTool={this.state.miniVariantTool}
                        toggleMiniVariantTool={this.toggleMiniVariantTool}
                    />
                </ResponsiveDrawer>
            </>
        );
    }
}

export default withStyles(styles)(CreatePiece);
