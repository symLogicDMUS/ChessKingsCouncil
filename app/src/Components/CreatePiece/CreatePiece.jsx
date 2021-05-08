import React from "react";
import { copy } from "../helpers/copy";
import { getDef } from "../../API/getDef";
import { saveDef } from "../../API/saveDef";
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
import { MuiSwitch } from "../Reuseables/Clickables/MuiSwitch";
import {filterSamples} from "../../API/filterSamples";
import AskLoginButton from "../Home/AskLoginButton";
import CreatePieceTitle from "./CreatePieceTitle";
import CreatePieceToolbar from "./CreatePieceToolbar";
import {UserContext} from "../../UserContext";
import { styles } from "./CreatePiece.jss";
import LoadBar from "./Icon/LoadBar";

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
const ToolButtonAlt = React.lazy(() => import('../Reuseables/Clickables/ToolButtonAlt'));
const ResponsiveDrawer = React.lazy(() => import('../Reuseables/Drawers/ResponsiveDrawer'));
const PieceSavedSuccessfully = React.lazy(() => import('./animations/PieceSavedSuccessfully'));
const PuttingThePieceICreatedIntoAGame = React.lazy(() => import('../Reuseables/NavBar/Help/Extra/PuttingThePieceICreatedIntoAGame'));


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
        uploadPiece: false,
        theme: "dark",
        binaryValue: 0,
        justSaved: false,
        showSpanText: true,
        showOffsetText: true,
        locSqrAnimate: false,
        isFirstVisit: false,
        miniVariantTool: null,
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

    componentDidMount() {
        document.body.className = "dark-background";
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.saveInstance !== prevState.saveInstance) {
            this.setState({uploadPiece: true})
        }
        // if (this.state.theme === "tan") {
        //     document.body.className = "tan-background-alt";
        // } else {
        //     document.body.className = `${this.state.theme}-background`;
        // }
    }

    updateFirstVisit = isFirstVisit => {
        this.setState({ isFirstVisit: isFirstVisit });
    };

    triggerRender = () => {
        this.setState({ binaryValue: !this.state.binaryValue });
    };

    toggleMiniVariantTool = (toolName, clientX, clientY) => {
        if (this.state.miniVariantTool === toolName) {
            this.setState({ miniVariantTool: null, clientX: clientX, clientY: clientY });
        } else {
            this.setState({ miniVariantTool: toolName, clientX: clientX, clientY: clientY });
        }
    };

    locationToolClick = () => {
        if (this.state.miniVariantTool === "Location") {
            this.setState({ miniVariantTool: null });
        } else {
            this.setState({ locSqrAnimate: true, miniVariantTool: null });
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
        this.imgFileObjs = {
            white: null,
            black: null
        }
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

    modals = () => (
        <>
            {this.state.uploadPiece && (
                <LoadBar
                    pieceName={this.name}
                    newPiece={this.newPiece}
                    theme={this.state.theme}
                    close={this.saveCallback}
                    saveInstance={this.state.saveInstance}
                    key={`${this.state.saveInstance}-piece-upload`}
                />
            )}
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
                        callback={() => this.setState({justSaved: false})}
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

    updateTheme = theme => {
        this.setState({ theme: theme });
    };

    render() {
        return (
            <>
                {this.modals()}
                <ResponsiveDrawer
                    appBarType="title"
                    appBarContent={
                        <CreatePieceTitle name={this.name} theme={this.state.theme} />
                    }
                    theme={this.state.theme}
                    className={this.props.classes.drawer}
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
                                setImgFileObj={this.setImgFileObj}
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
                            <CreatePieceToolbar
                                pieceName={this.name}
                                updateName={this.updateName}
                                whiteAndBlackImgs={this.whiteAndBlackImgs}
                                setNewPieceImg={this.setPieceImg}
                                resetImg={this.resetImg}
                                setImgFileObj={this.setImgFileObj}
                                theme={this.state.theme}
                            />
                            <ToolButtonAlt
                                text="Spans"
                                iconName={"range_tool"}
                                theme={this.state.theme}
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
                            {this.context ? (
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
                            ) : (
                                <AskLoginButton theme={this.state.theme} iconName={"save_alt"} text={"Save"} />
                            )}
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
