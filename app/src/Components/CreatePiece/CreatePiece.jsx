import React from "react";
import {copy} from "../helpers/copy";
import {text} from "./CreatePiece.jss";
import {Typography} from "@material-ui/core";
import {AnimatePresence} from "framer-motion";
import { messageStr } from "./helpers/messageStr";
import { stepFuncDict } from "../helpers/stepFuncs";
import { flipOffsets } from "./helpers/flipOffsets";
import { outOfBounds as oob } from "../helpers/oob";
import { rfToXy, xyToRf } from "../helpers/crdCnvrt";
import { getRotations } from "./helpers/getRotations";
import { getSpansDict } from "./helpers/getSpansDict";
import { CreatePieceHelp } from "./Help/CreatePieceHelp";
import { getStepFuncNames } from "./helpers/getStepFuncNames";
import {HelpSlideshow} from "../Reuseables/NavBar/Help/HelpSlideshow";
import {ToolBackdrop} from "../Reuseables/MiniVariantTool/ToolBackdrop";
import { getBinaryBoarAllFalse } from "../helpers/getBinaryBoardAllFalse";
import { LocationSquaresEnter } from "../Reuseables/Animations/LocationSquaresEnter";
import { ShowOffsetText } from "./Board/RangeLabelComponents/ShowOffsetText";
import { ShowSpanText } from "./Board/RangeLabelComponents/ShowSpanText";
import ToolButton from "../Reuseables/MiniVariantTool/ToolButton";
import { MuiSwitch } from "../Reuseables/Clickables/MuiSwitch";
import withStyles from "@material-ui/core/styles/withStyles";
import CreatePieceTitle from "./Title/CreatePieceTitle";
import AskLoginButton from "../Home/Sign In/AskLoginButton";
import {UserContext} from "../../Context/UserContext";
import {ThemeContext} from "../../Context/ThemeContext";
import NameModal from "./Name/NameModal";
import IconModal from "./Icon/IconModal";
import {styles} from "./CreatePiece.jss";

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
const ResponsiveDrawer = React.lazy(() => import('../Reuseables/Drawers/ResponsiveDrawer'));
const Animations = React.lazy(() => import("../Reuseables/Animations/CreatePiecePageAnimations"))

class CreatePiece extends React.Component {
    constructor(props) {
        super(props);
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
    state = {
        loadInstance: 0,
        saveInstance: 0,
        binaryValue: 0,
        justSaved: false,
        uploadPiece: false,
        showSpanText: true,
        showOffsetText: true,
        locSqrEntry: false,
        activeTool: null,
        whiteUrl: null,
        blackUrl: null,
        clientX: 0,
        clientY: 0,
    };
    spans = {
        "90d": false,
        "45d": false,
        "0d": false,
        "315d": false,
        "270d": false,
        "225d": false,
        "180d": false,
        "135d": false,
    };
    offsets = [];
    spanDisplays = getBinaryBoarAllFalse();
    offsetDisplays = getBinaryBoarAllFalse();
    whiteAndBlackImgs = {white: null, black: null};
    imgFileObjs = { white: null, black: null };
    newPiece = {
        W: {spans: null, offsets: null, img: null},
        B: {spans: null, offsets: null, img: null},
    };
    name = "";
    location = "d4";
    loadedName = "";
    loadedSpans = null;
    loadedOffsets = null;

    static contextType = UserContext;

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.saveInstance !== prevState.saveInstance) {
            this.setState({uploadPiece: true})
        }
    }

    triggerRender = () => {
        this.setState({ binaryValue: !this.state.binaryValue });
    };

    toggleMiniVariantTool = (toolName) => {
        if (this.state.activeTool === toolName) {
            this.setState({ activeTool: null});
        } else {
            this.setState({ activeTool: toolName});
        }
    };

    isUnsavedChanges = () => this.unsavedChanges;

    load = ({ name, spans, offsets, whiteImg, blackImg }) => {
        this.name = name;
        this.offsets = offsets;
        this.spans = getSpansDict(spans);
        this.whiteAndBlackImgs.white = whiteImg;
        this.whiteAndBlackImgs.black = blackImg;

        this.loadedName = copy(this.name);
        this.loadedSpans = copy(this.spans);
        this.loadedOffsets = copy(this.offsets);
        this.loadedImgs = copy(this.whiteAndBlackImgs);

        this.setState({
            unsavedChanges: false,
            loadInstance: this.state.loadInstance + 1,
        });
        this.setLoc("d4");
    };

    save = () => {
        this.newPiece = {
            W: {spans: null, offsets: null, img: null, imgFileObj: null},
            B: {spans: null, offsets: null, img: null, imgFileObj: null},
        };
        const angles = [];
        for (const s of Object.keys(this.spans)) {
            if (this.spans[s]) angles.push(s);
        }
        this.newPiece.W.offsets = this.offsets;
        this.newPiece.W.spans = getStepFuncNames(angles);
        this.newPiece.B.spans = getStepFuncNames(getRotations(angles, 180));
        this.newPiece.B.offsets = flipOffsets(this.offsets);
        this.newPiece.W.img = this.whiteAndBlackImgs.white;
        this.newPiece.B.img = this.whiteAndBlackImgs.black;
        this.newPiece.W.imgFileObj = this.imgFileObjs.white;
        this.newPiece.B.imgFileObj = this.imgFileObjs.black;
        this.setState({saveInstance: this.state.saveInstance + 1});
    };

    /**
     * reset to the last saved or loaded, or to blank if not saved or loaded
     */
    reset = () => {
        if (!this.loadedName) {
            this.erase();
        } else {
            this.name = copy(this.loadedName);
            this.spans = copy(this.loadedSpans);
            this.offsets = copy(this.loadedOffsets);
            this.whiteAndBlackImgs = copy(this.loadedImgs);
        }
        this.setState({
            unsavedChanges: false,
            loadInstance: this.state.loadInstance + 1,
        }, () => {
            this.setLoc("d4");
        });
        this.triggerRender();
    };

    /**
     * used by the Erase Option button to erase the range of a piece all spans
     * and offsets are reset to false. The images for white and black are not
     * */
    erase = () => {
        this.resetOffsetsAndRange();
        this.name = "";
        this.whiteAndBlackImgs = {
            white: null,
            black: null
        }
        this.setState({
            unsavedChanges: false,
            loadInstance: this.state.loadInstance + 1,
        });
    };

    saveCallback = () => {
        this.setState({
            justSaved: true,
            newUpload: false,
            uploadPiece: false,
            unsavedChanges: false,
        });
    };

    /**used by Name tool*/
    updateName = name => {
        this.name = name;
        this.setState({ unsavedChanges: true });
    };

    /**used by Icon tool*/
    setPieceImg = (color, imgStr) => {
        this.whiteAndBlackImgs[color] = imgStr;
        this.setState({unsavedChanges: true});
        console.log(imgStr)
    };

    /**used by UploadImgButton from Icon tool*/
    setImgFileObj = (color, fileObj) => {
        this.imgFileObjs[color] = fileObj;
        this.setState({unsavedChanges: true });
        console.log(fileObj)
    };

    /**used by Range tool*/
    toggleSpan = angle => {
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
    };

    /**used by Location tool, called by this.setDisplaySpans()*/
    setDisplaySpan = angle => {
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    };

    /**
     *  used by Location tool, called by this.setLoc()
     *  updates the squares that are highlighted when piece location changes
     * */
    setSpanDisplays = () => {
        Object.entries(this.spans).forEach(([angle, isActive]) => {
            if (isActive) {
                this.setDisplaySpan(angle);
            }
        });
    };

    /**used by the Reset Option button, called by this.reset()*/
    resetSpanDisplays = () => {
        this.spanDisplays = getBinaryBoarAllFalse();
    };

    /**used by Range tool*/
    toggleOffset = (rf, offset) => {
        this.offsetDisplays[rf] = !this.offsetDisplays[rf];
        let offsetStrs = this.offsets.map((o) => JSON.stringify(o));
        if (offsetStrs.includes(JSON.stringify(offset))) {
            let i = offsetStrs.indexOf(JSON.stringify(offset));
            this.offsets.splice(i, 1);
        } else this.offsets.push(offset);
        this.setState({ unsavedChanges: true });
    };

    /**called by this.toggleSpan() used when span is overriding an offset */
    removeOffset = rf => {
        this.offsetDisplays[rf] = false;
        let [x1, y1] = rfToXy(this.location);
        let [x2, y2] = rfToXy(rf);
        let offset = [x2 - x1, y2 - y1];
        let offsetStrs = this.offsets.map((o) => JSON.stringify(o));
        let i = offsetStrs.indexOf(JSON.stringify(offset));
        this.offsets.splice(i, 1);
    };

    /**used by the Location tool. Changes the spans displayed on board when piece location changes*/
    setOffsetDisplays = () => {
        let [x1, y1] = rfToXy(this.location);
        let [dx, dy] = [-1, -1];
        this.offsets.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            this.offsetDisplays[xyToRf(dx, dy)] = true;
        });
    };

    /**used by the Reset Option button, called by this.reset()*/
    resetOffsetDisplays = () => {
        this.offsetDisplays = getBinaryBoarAllFalse();
    };

    /**used by the Reset Option button. called by this.eraseRange() and this.clear().*/
    resetOffsetsAndRange = () => {
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
    };

    /**used by the Location tool*/
    setLoc = rf => {
        this.location = rf;
        this.resetSpanDisplays();
        this.resetOffsetDisplays();
        this.setSpanDisplays();
        this.setOffsetDisplays();
        this.triggerRender();
    };

    /**
     * set white or black image to null if it was just deleted from database
     * @param deletedImgUrl (str)
     */
    resetImg = deletedImgUrl => {
        if (this.whiteAndBlackImgs.white === deletedImgUrl) {
            this.whiteAndBlackImgs.white = null;
        }
        if (this.whiteAndBlackImgs.black === deletedImgUrl) {
            this.whiteAndBlackImgs.black = null;
        }
        this.triggerRender();
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {value =>
                    <>
                        <HelpSlideshow
                            initialState={{pos: 0, numSlides: 6}}
                            theme={value.themes.createPiece}
                            currentPage={"CreatePiece"}
                            title={"Create Piece"}
                        >
                            {CreatePieceHelp(value.themes.createPiece)}
                        </HelpSlideshow>
                        <Animations
                            name={this.name}
                            state={this.state}
                            newPiece={this.newPiece}
                            close={this.saveCallback}
                            theme={value.themes.createPiece}
                            key={`${this.state.saveInstance}-piece-upload`}
                            callback={() =>
                                this.setState({justSaved: false})
                            }
                        />
                        <ResponsiveDrawer
                            appBarType="title"
                            appBarContent={
                                <CreatePieceTitle
                                    name={this.name}
                                    theme={value.themes.createPiece}
                                    blackImg={this.whiteAndBlackImgs.black}
                                />
                            }
                            themeAlt={true}
                            theme={value.themes.createPiece}
                            className={this.props.classes.drawer}
                            tools={
                                <>
                                    <Name
                                        defaultValue={this.name}
                                        theme={value.themes.createPiece}
                                        updateName={this.updateName}
                                        key={`Name-${this.state.loadInstance}`}
                                        toggleMiniVariantTool={
                                            this.toggleMiniVariantTool
                                        }
                                    />
                                    <Icon
                                        key="Icon"
                                        theme={value.themes.createPiece}
                                        setImgFileObj={this.setImgFileObj}
                                        resetImg={this.resetImg}
                                        setPieceImg={this.setPieceImg}
                                        whiteAndBlackImgs={this.whiteAndBlackImgs}
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
                                        theme={value.themes.createPiece}
                                        toggleMiniVariantTool={
                                            this.toggleMiniVariantTool
                                        }
                                    />
                                    <Location
                                        key="Location"
                                        setLoc={this.setLoc}
                                        theme={value.themes.createPiece}
                                        selectedLoc={this.location}
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
                                        resetImg={this.resetImg}
                                        whiteImg={this.whiteAndBlackImgs.white}
                                        blackImg={this.whiteAndBlackImgs.black}
                                        justSaved={this.state.justSaved}
                                        theme={value.themes.createPiece}
                                    />
                                </>
                            }
                            toolButtons={
                                <>
                                    <ToolButton
                                        text="Name"
                                        name="Name"
                                        theme={value.themes.createPiece}
                                        iconName={"name_tool"}
                                        onClick={() => this.toggleMiniVariantTool("Name")}
                                        isActive={
                                            this.state.activeTool === "Name"
                                        }
                                    />
                                    <ToolButton
                                        text="Icon"
                                        name="Icon"
                                        theme={value.themes.createPiece}
                                        iconName={"icon_tool"}
                                        onClick={() => this.toggleMiniVariantTool("Icon")}
                                        isActive={
                                            this.state.activeTool === "Icon"
                                        }
                                        setImgFileObj={this.setImgFileObj}
                                    />
                                    <ToolButton
                                        text="Spans"
                                        iconName={"range_tool"}
                                        theme={value.themes.createPiece}
                                        isActive={
                                            this.state.activeTool === "Range"
                                        }
                                        onClick={() =>
                                            this.toggleMiniVariantTool("Range")
                                        }
                                    />
                                    <ToolButton
                                        text="Location"
                                        theme={value.themes.createPiece}
                                        iconName={"location_tool"}
                                        isActive={
                                            this.state.activeTool === "Location"
                                        }
                                        onClick={() => this.setState({locSqrEntry: true})}
                                    />
                                    <Load
                                        load={this.load}
                                        erase={this.erase}
                                        theme={value.themes.createPiece}
                                        className={this.props.classes.smOption}
                                        buttonType="tool"
                                    />
                                    {this.context ? (
                                        <Save
                                            save={this.save}
                                            pieceName={this.name}
                                            className={this.props.classes.smOption}
                                            whiteImg={this.whiteAndBlackImgs.white}
                                            blackImg={this.whiteAndBlackImgs.black}
                                            justSaved={this.state.justSaved}
                                            theme={value.themes.createPiece}
                                            buttonType="tool"
                                        />
                                    ) : (
                                        <AskLoginButton
                                            theme={value.themes.createPiece}
                                            iconName={"save_alt"}
                                            text={"Save"}
                                        />
                                    )}
                                    <Reset
                                        reset={this.reset}
                                        theme={value.themes.createPiece}
                                        className={this.props.classes.smOption}
                                        buttonType="tool"
                                    />
                                    <Erase
                                        erase={this.erase}
                                        theme={value.themes.createPiece}
                                        className={this.props.classes.smOption}
                                        buttonType="tool"
                                    />
                                </>
                            }
                            navBar={
                                <NavBar
                                    currentPage="CreatePiece"
                                    redirectMessage={messageStr}
                                    theme={value.themes.createPiece}
                                    additionalSettings={
                                        <>
                                            <Typography
                                                variant={"subtitle1"}
                                                style={text(value.themes.createPiece)}
                                            >
                                                Create Piece Settings
                                            </Typography>

                                            <MuiSwitch
                                                theme={value.themes.createPiece}
                                                className={
                                                    this.props.classes.show_offset
                                                }
                                                isChecked={this.state.showOffsetText}
                                                control={
                                                    <ShowOffsetText
                                                        theme={value.themes.createPiece}
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
                                                theme={value.themes.createPiece}
                                                className={this.props.classes.show_span}
                                                isChecked={this.state.showSpanText}
                                                control={
                                                    <ShowSpanText
                                                        theme={value.themes.createPiece}
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
                                setLoc={this.setLoc}
                                pieceLoc={this.location}
                                toggleSpan={this.toggleSpan}
                                toggleOffset={this.toggleOffset}
                                spanDisplays={this.spanDisplays}
                                offsetDisplays={this.offsetDisplays}
                                showSpanText={this.state.showSpanText}
                                showOffsetText={this.state.showOffsetText}
                                imgUrl={this.whiteAndBlackImgs.white}
                                activeTool={this.state.activeTool}
                                theme={value.themes.createPiece}
                            />
                            {this.state.locSqrEntry && (
                                <LocationSquaresEnter
                                    onAnimationComplete={() => {
                                        this.setState({locSqrEntry: false});
                                        this.toggleMiniVariantTool("Location", null);
                                    }}
                                    isImg={this.whiteAndBlackImgs.white}
                                    pieceLoc={this.state.location}
                                    theme={value.themes.createPiece}
                                />
                            )}
                            {(this.state.activeTool === "Icon" ||
                                this.state.activeTool === "Name") && (
                                <ToolBackdrop
                                    onClick={() =>
                                        this.toggleMiniVariantTool(
                                            null,
                                        )
                                    }
                                />
                            )}
                            <AnimatePresence>
                                {this.state.activeTool === "Name" && (
                                    <NameModal
                                        key={"Name-Tool"}
                                        pieceName={this.name}
                                        theme={value.themes.createPiece}
                                        updateName={this.updateName}
                                    />
                                )}
                                {this.state.activeTool === "Icon" && (
                                    <IconModal
                                        key={"Icon-Tool"}
                                        resetImg={this.resetImg}
                                        theme={value.themes.createPiece}
                                        setImgFileObj={this.setImgFileObj}
                                        setNewPieceImg={this.setPieceImg}
                                        whiteAndBlackImgs={this.whiteAndBlackImgs}
                                    />
                                )}
                            </AnimatePresence>
                        </ResponsiveDrawer>
                    </>
                }
            </ThemeContext.Consumer>
        );
    }
}

export default withStyles(styles)(CreatePiece);