import React from "react";
import "../styles/scrollbar.scss";
import MediaQuery from "react-responsive";
import "../Reuseables/Background/_backgrounds.scss";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { HelpTitle } from "../Reuseables/NavBar/Help/HelpTitle";
import { HelpText } from "./Help/HelpText";
import { messageStr } from "./helpers/messageStr";
import { saveDef } from "../../API/saveDef";
import { copy } from "../helpers/copy";
import { Name } from "./Name/Name";
import { Icon } from "./Icon/Icon";
import { Range } from "./Range/Range";
import { Options } from "./Options/Options";
import { Location } from "./Location/Location";
import { NavBar } from "../Reuseables/NavBar/NavBar";
import { SideBar } from "../Reuseables/Drawers/SidBar";
import { incrementImgRefCount } from "../../API/incrementImgRefCount";
import { CreatePieceBoard as Board } from "./Board/CreatePieceBoard";
import PermanentDrawer from "../Reuseables/Drawers/PermanentDrawer";
import PersistentDrawer from "../Reuseables/Drawers/PersistentDrawer";
import { ToolButton } from "../Reuseables/Clickables/ToolButton";
import { MuiCheckbox } from "../Reuseables/Clickables/MuiCheckbox";
import { stepFuncDict } from "../helpers/stepFuncs";
import { outOfBounds as oob } from "../helpers/oob";
import { rfToXy, xyToRf } from "../helpers/crdCnvrt";
import { getRotations } from "./helpers/getRotations";
import { getSpansDict } from "./helpers/getSpansDict";
import { flipOffsets } from "./helpers/flipOffsets";
import { getStepFuncNames } from "./helpers/getStepFuncNames";
import { DrawerContent } from "../Reuseables/Drawers/DrawerContent";
import { getBinaryBoarAllFalse } from "../helpers/getBinaryBoardAllFalse";
import { PieceSavedSuccessfully } from "./animations/PieceSavedSuccessfully";
import { pageTitleStyle } from "../Reuseables/Drawers/PersistentDrawer.jss";
import {fontSize002, fontSize0026, fontSizeW0045,} from "../styles/fontSizes.jss";
import { AnimatePresencePortal } from "../Reuseables/Animations/AnimatePresencePortal";
import { PuttingThePieceICreatedIntoAGame } from "../Reuseables/NavBar/Help/Extra/PuttingThePieceICreatedIntoAGame";
import { getDoesPieceNameExist } from "../../API/getDoesPieceNameExist";
import { ToolButtons } from "../Reuseables/Clickables/ToolButtons";
import { appBarTitle, styles } from "./CreatePiece.jss";

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
            isFirstVisit: false,
            mobileTool: null,
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
        this.clear = this.clear.bind(this);
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
        this.toggleMobileTool = this.toggleMobileTool.bind(this);
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

    toggleMobileTool(toolName) {
        if (this.state.mobileTool === toolName) {
            this.setState({ mobileTool: null });
        }
        else {
            this.setState({ mobileTool: toolName });
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
        this.loadedName = copy(name);
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

        getDoesPieceNameExist(this.name).then(([pieceNameExists]) => {
            if (!pieceNameExists) {
                saveDef(this.name, newPiece).then(([r]) => {
                    incrementImgRefCount(newPiece.W.img).then(([r]) => {
                        incrementImgRefCount(newPiece.B.img).then(([r]) => {
                            this.setState({
                                unsavedChanges: false,
                                justSaved: true,
                            });
                        });
                    });
                });
            } else {
                saveDef(this.name, newPiece).then(([r]) => {
                    this.setState({ unsavedChanges: false, justSaved: true });
                });
            }
        });
    }

    /**
     * reset to the last saved or loaded, or to blank if not saved or loaded
     */
    reset() {
        if (!this.loadedName) {
            this.clear();
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

    clear() {
        /*used by Reset Option when not a loaded piece*/
        this.resetOffsetsAndRange();
        this.whiteAndBlackImgs = { white: null, black: null };
        this.name = "";
        this.location = "d4";
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
    setPieceImg(color, pieceImgBase64Str) {
        this.whiteAndBlackImgs[color] = pieceImgBase64Str;
        this.setState({ unsavedChanges: true });
    }

    /**used by Range tool*/
    toggleSpan(angle) {
        this.spans[angle] = !this.spans[angle];
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = this.spans[angle];
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
     * @param deletedBase64ImgStr (str)
     */
    resetImg(deletedBase64ImgStr) {
        if (this.whiteAndBlackImgs.white === deletedBase64ImgStr) {
            this.whiteAndBlackImgs.white = null;
        }
        if (this.whiteAndBlackImgs.black === deletedBase64ImgStr) {
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
                        onClose={() => this.updateFirstVisit(false)}
                        title={
                            <HelpTitle
                                theme={this.state.theme}
                                fontSize={fontSize0026}
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
            </>
        );
    }

    updateTheme(theme) {
        this.setState({ theme: theme });
    }

    render() {
        return (
            <div className='scrollbar-tan'>
                {this.modals()}
                <MediaQuery minWidth={1040}>
                    <PermanentDrawer
                        drawerType="right"
                        theme={this.state.theme}
                        content={
                            <DrawerContent>
                                <Board
                                    key='Board-Desktop'
                                    screenCase='desktop'
                                    theme={this.state.theme}
                                    pieceLoc={this.location}
                                    setLoc={this.setLoc}
                                    spanDisplays={this.spanDisplays}
                                    offsetDisplays={this.offsetDisplays}
                                    toggleOffset={this.toggleOffset}
                                    toggleSpan={this.toggleSpan}
                                    showSpanText={this.state.showSpanText}
                                    showOffsetText={this.state.showOffsetText}
                                    imgUrl={this.whiteAndBlackImgs["white"]}
                                    mobileTool={this.state.mobileTool}
                                />
                            </DrawerContent>
                        }
                        appBarContent={
                            <Typography
                                style={appBarTitle}
                                variant="subtitle1"
                                noWrap
                            >
                                Create Piece
                            </Typography>
                        }
                    >
                        <Name
                            key={`Name-Desktop${this.state.loadInstance}`}
                            updateName={this.updateName}
                            defaultValue={this.name}
                            theme={this.state.theme}
                            screenCase="desktop"
                        />
                        <Icon
                            key="Icon-Desktop"
                            theme={this.state.theme}
                            resetImg={this.resetImg}
                            setPieceImg={this.setPieceImg}
                            whiteAndBlackImgs={this.whiteAndBlackImgs}
                        />
                        <Range
                            key="Range-Desktop"
                            spans={this.spans}
                            offsets={this.offsets}
                            toggleSpan={this.toggleSpan}
                            pieceLoc={this.location}
                            theme={this.state.theme}
                            screenCase="desktop"
                        />
                        <Location
                            key="Location-Desktop"
                            setLoc={this.setLoc}
                            theme={this.state.theme}
                            selectedLoc={this.location}
                        />
                        <Options
                            key="Options-Desktop"
                            load={this.load}
                            save={this.save}
                            reset={this.reset}
                            erase={this.erase}
                            pieceName={this.name}
                            theme={this.state.theme}
                            whiteImg={this.whiteAndBlackImgs.white}
                            blackImg={this.whiteAndBlackImgs.black}
                        />
                    </PermanentDrawer>
                    <SideBar theme={this.state.theme} drawerType="left">
                        <NavBar
                            currentPage="CreatePiece"
                            screenCase="desktop"
                            theme={this.state.theme}
                            redirectMessage={messageStr}
                            helpTitle={
                                <HelpTitle
                                    theme={this.state.theme}
                                    fontSize={fontSize0026}
                                >
                                    Creating a Piece
                                </HelpTitle>
                            }
                            helpText={HelpText(fontSize002, this.state.theme)}
                            updateFirstVisit={this.updateFirstVisit}
                            additionalSettings={
                                <>
                                    <MuiCheckbox
                                        onClick={() =>
                                            this.setState({
                                                showSpanText: !this.state
                                                    .showSpanText,
                                            })
                                        }
                                        defaultChecked={this.state.showSpanText}
                                        rootClassProp={this.props.classes.sqr_text_checkbox}
                                        theme={this.state.theme}
                                    >
                                        Show Span Text
                                    </MuiCheckbox>
                                    <MuiCheckbox
                                        onClick={() =>
                                            this.setState({
                                                showOffsetText: !this.state
                                                    .showOffsetText,
                                            })
                                        }
                                        defaultChecked={
                                            this.state.showOffsetText
                                        }
                                        rootClassProp={this.props.classes.sqr_text_checkbox}
                                        theme={this.state.theme}
                                    >
                                        Show Offset Text
                                    </MuiCheckbox>
                                </>
                            }
                            isUnsavedChanges={this.isUnsavedChanges}
                            updateTheme={this.updateTheme}
                        />
                    </SideBar>
                </MediaQuery>
                <MediaQuery maxWidth={1040}>
                    <PersistentDrawer
                        theme={this.state.theme}
                        drawer={
                            <NavBar
                                currentPage="CreatePiece"
                                screenCase="mobile"
                                redirectMessage={messageStr}
                                helpTitle={
                                    <HelpTitle
                                        theme={this.state.theme}
                                        fontSize={fontSize0026}
                                    >
                                        Creating a Piece
                                    </HelpTitle>
                                }
                                helpText={HelpText(
                                    fontSizeW0045,
                                    this.state.theme
                                )}
                                isUnsavedChanges={this.isUnsavedChanges}
                                updateFirstVisit={this.updateFirstVisit}
                                updateTheme={this.updateTheme}
                                theme={this.state.theme}
                                additionalSettings={
                                    <>
                                        <MuiCheckbox
                                            onClick={() =>
                                                this.setState({
                                                    showSpanText: !this.state
                                                        .showSpanText,
                                                })
                                            }
                                            defaultChecked={
                                                this.state.showSpanText
                                            }
                                            rootClassProp={this.props.classes.sqr_text_checkbox}
                                            theme={this.state.theme}
                                        >
                                            Show Span Text
                                        </MuiCheckbox>
                                        <MuiCheckbox
                                            onClick={() =>
                                                this.setState({
                                                    showOffsetText: !this.state
                                                        .showOffsetText,
                                                })
                                            }
                                            defaultChecked={
                                                this.state.showOffsetText
                                            }
                                            rootClassProp={this.props.classes.sqr_text_checkbox}
                                            theme={this.state.theme}
                                        >
                                            Show Offset Text
                                        </MuiCheckbox>
                                    </>
                                }
                            />
                        }
                        appBarContent={
                            <>
                                <Typography
                                    variant="subtitle1"
                                    style={pageTitleStyle}
                                    noWrap
                                >
                                    Create Piece
                                </Typography>
                                <ToolButtons>
                                    <ToolButton
                                        theme={this.state.theme}
                                        iconName={"name_tool"}
                                        isActive={this.state.mobileTool === "Name"}
                                        onClick={() => this.toggleMobileTool("Name")}
                                    />
                                    <ToolButton
                                        theme={this.state.theme}
                                        iconName={"icon_tool"}
                                        isActive={this.state.mobileTool === "Icon"}
                                        onClick={() => this.toggleMobileTool("Icon")}
                                    />
                                    <ToolButton
                                        theme={this.state.theme}
                                        iconName={"range_tool"}
                                        isActive={this.state.mobileTool === "Range"}
                                        onClick={() => this.toggleMobileTool("Range")}
                                    />
                                    <ToolButton
                                        theme={this.state.theme}
                                        iconName={"location_tool"}
                                        isActive={this.state.mobileTool === "Location"}
                                        onClick={() => this.toggleMobileTool("Location")}
                                    />
                                    <ToolButton
                                        theme={this.state.theme}
                                        iconName={"options_tool"}
                                        isActive={this.state.mobileTool === "Options"}
                                        onClick={() => this.toggleMobileTool("Options")}
                                    />
                                </ToolButtons>
                            </>
                        }
                        neighborOpen={false}
                    >
                        <Board
                            key="Board-Mobile"
                            screenCase='mobile'
                            theme={this.state.theme}
                            pieceLoc={this.location}
                            setLoc={this.setLoc}
                            spanDisplays={this.spanDisplays}
                            offsetDisplays={this.offsetDisplays}
                            toggleOffset={this.toggleOffset}
                            toggleSpan={this.toggleSpan}
                            showSpanText={this.state.showSpanText}
                            showOffsetText={this.state.showOffsetText}
                            mobileTool={this.state.mobileTool}
                            imgUrl={this.whiteAndBlackImgs.white}
                        />
                        {this.state.mobileTool === "Name" ? (
                            <Name
                                key={`Name-Mobile${this.state.loadInstance}`}
                                defaultValue={this.name}
                                theme={this.state.theme}
                                updateName={this.updateName}
                                screenCase="mobile"
                            />
                        ) : null}
                        {this.state.mobileTool === "Icon" ? (
                            <Icon
                                key="Icon-Mobile"
                                theme={this.state.theme}
                                setPieceImg={this.setPieceImg}
                                resetImg={this.resetImg}
                                whiteAndBlackImgs={this.whiteAndBlackImgs}
                            />
                        ) : null}
                        {this.state.mobileTool === "Options" ? (
                            <Options
                                key="Options-Mobile"
                                pieceName={this.name}
                                load={this.load}
                                save={this.save}
                                reset={this.reset}
                                erase={this.erase}
                                whiteImg={this.whiteAndBlackImgs.white}
                                blackImg={this.whiteAndBlackImgs.black}
                                isFirstVisit={this.state.isFirstVisit}
                                theme={this.state.theme}
                            />
                        ) : null}
                    </PersistentDrawer>
                </MediaQuery>
            </div>
        );
    }
}

export default withStyles(styles)(CreatePiece);
