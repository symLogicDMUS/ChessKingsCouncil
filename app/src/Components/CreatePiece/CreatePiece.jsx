import React from "react";
import {v4 as uuidv4} from "uuid";
import MediaQuery from "react-responsive";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {HelpText, HelpTitle} from "./HelpText"
import "../styles/_backgrounds.scss";
import {fontSize002} from "../styles/fontSize.jss";
import {messageStr} from "./helpers/messageStr";
import {saveDef} from "../../API/saveDef";
import {copy} from "../helpers/copy";
import {Name} from "./Name/Name";
import {Icon} from "./Icon/Icon";
import {Range} from "./Range/Range";
import {Options} from "./Options/Options";
import {Location} from "./Location/Location";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {SideBar} from "../Reuseables/SidBar";
import {CreatePieceBoard as Board} from "./Board/CreatePieceBoard";
import PermanentDrawer from "../Reuseables/PermanentDrawer";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import MuiAccordion from "../Reuseables/MuiAccordion";
import {navBarWidth} from "../Reuseables/NavBar/NavBar.jss";
import {sideBarWidth} from "../Reuseables/SidBar.jss";
import {drawerWidth} from "../Reuseables/PermanentDrawer.jss";
import {navBarButtonWidth} from "../Reuseables/NavBar/NavBarButton.jss";
import {stepFuncDict} from "../helpers/stepFuncs";
import {outOfBounds as oob} from "../helpers/oob";
import {rfToXy, xyToRf} from "../helpers/crdCnvrt";
import {getRotations} from "./helpers/getRotations";
import {getSpansDict} from "./helpers/getSpansDict";
import {flipOffsets} from "./helpers/flipOffsets";
import {getStepFuncNames} from "./helpers/getStepFuncNames";
import {getBinaryBoarAllFalse} from "../helpers/getBinaryBoardAllFalse";
import {AnimatePresencePortal} from "../Reuseables/AnimatePresencePortal";
import {PieceSavedSuccessfully} from "./animations/PieceSavedSuccessfully";
import {largeBoardFontSizeDesktop, largeBoardFontSizeMobile} from "../Reuseables/Board.jss";
import {styles} from "./CreatePiece.jss";

class CreatePiece extends React.Component {
    constructor(props) {
        super(props);
        this.name = "";
        this.location = "d4";
        this.textInput = React.createRef();
        this.state = {
            theme: "dark",
            binaryValue: 0,
            justSaved: false,
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

        this.whiteAndBlackImgs = {white: null, black: null};

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
        this.updateNameFinish = this.updateNameFinish.bind(this);
        this.toggleSpan = this.toggleSpan.bind(this);
        this.toggleOffset = this.toggleOffset.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
        this.isUnsavedChanges = this.isUnsavedChanges.bind(this);
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

    triggerRender() {
        this.setState({binaryValue: !this.state.binaryValue});
    }

    isUnsavedChanges() {
        return this.unsavedChanges;
    }

    load({name, spans, offsets, whiteImg, blackImg}) {
        this.name = name;
        this.offsets = offsets;
        this.spans = getSpansDict(spans);
        this.whiteAndBlackImgs = {white: whiteImg, black: blackImg};
        this.loadedName = copy(name);
        this.loadedSpans = copy(this.spans);
        this.loadedOffsets = copy(this.offsets);
        this.setState({unsavedChanges: false});
        this.setLoc("d4");
    }

    save() {
        const newPiece = {
            W: {spans: null, offsets: null, img: null},
            B: {spans: null, offsets: null, img: null},
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
        saveDef(this.name, newPiece).then(([r]) => {
            this.setState({unsavedChanges: false});
            this.setState({justSaved: true});
        });
    }

    /**
     * reset to the last saved or loaded, or to blank if not saved or loaded
     */
    reset() {
        if (!this.loadedName) {
            this.clear();
        } else {
            this.spans = copy(this.loadedSpans);
            this.offsets = copy(this.loadedOffsets);
            this.name = copy(this.loadedName);
            this.setLoc("d4");
        }
        this.setState({unsavedChanges: false});
        this.triggerRender();
    }

    /**
     * used by the Erase Option button to erase the range of a piece all spans
     * and offsets are reset to false. The images for white and black are not
     * */
    erase() {
        this.resetOffsetsAndRange();
        if (
            this.name === "" &&
            !this.whiteAndBlackImgs.white &&
            !this.whiteAndBlackImgs.black
        ) {
            this.setState({unsavedChanges: false});
        } else {
            this.setState({unsavedChanges: true});
        }
    }

    clear() {
        /*used by Reset Option when not a loaded piece*/
        this.resetOffsetsAndRange();
        this.whiteAndBlackImgs = {white: null, black: null};
        this.name = "";
        this.location = "d4";
        this.setState({unsavedChanges: false});
    }

    /**used by Name tool*/
    updateName(userInput) {
        this.name = userInput;
    }

    /**used by Name tool*/
    updateNameFinish() {
        this.setState({unsavedChanges: true});
        this.textInput.current.focus();
    }

    /**used by Icon tool*/
    setPieceImg(color, pieceImgBase64Str) {
        this.whiteAndBlackImgs[color] = pieceImgBase64Str;
        this.setState({unsavedChanges: true});
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
        this.setState({unsavedChanges: true});
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
        this.setState({unsavedChanges: true});
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
        if (this.whiteAndBlackImgs["white"] === deletedBase64ImgStr)
            this.whiteAndBlackImgs["white"] = null;
        if (this.whiteAndBlackImgs["black"] === deletedBase64ImgStr)
            this.whiteAndBlackImgs["black"] = null;
    }

    modals() {
        return (
            <>
                {this.state.justSaved && (
                    <AnimatePresencePortal>
                        <PieceSavedSuccessfully
                            callback={() => this.setState({justSaved: false})}
                            theme={this.state.theme}
                        />
                    </AnimatePresencePortal>
                )}
            </>
        );
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    {this.modals()}
                    <PermanentDrawer
                        drawerType="right"
                        theme={this.state.theme}
                        width={drawerWidth}
                        content={
                            <Board
                                key={uuidv4()}
                                theme={this.state.theme}
                                fontSize={largeBoardFontSizeDesktop}
                                toggleOffset={this.toggleOffset}
                                spanDisplays={this.spanDisplays}
                                offsets={this.offsetDisplays}
                                pieceLoc={this.location}
                                pieceImgBase64Str={
                                    this.whiteAndBlackImgs["white"]
                                }
                            />
                        }
                        appBarContent={
                            <Typography variant="h6" noWrap>
                                Create Piece
                            </Typography>
                        }
                    >
                        <Name
                            key={uuidv4()}
                            updateName={this.updateName}
                            updateNameFinish={this.updateNameFinish}
                            inputRef={this.textInput}
                            defaultValue={this.name}
                            theme={this.state.theme}
                        />
                        <Icon
                            key={uuidv4()}
                            theme={this.state.theme}
                            resetImg={this.resetImg}
                            setPieceImg={this.setPieceImg}
                            whiteAndBlackImgs={this.whiteAndBlackImgs}
                        />
                        <Range
                            key={uuidv4()}
                            theme={this.state.theme}
                            spans={this.spans}
                            offsets={this.offsets}
                            toggleSpan={this.toggleSpan}
                            screenCase="desktop"
                        />
                        <Location
                            key={uuidv4()}
                            setLoc={this.setLoc}
                            theme={this.state.theme}
                            selectedLoc={this.location}
                        />
                        <Options
                            key={uuidv4()}
                            load={this.load}
                            save={this.save}
                            reset={this.reset}
                            erase={this.erase}
                            pieceName={this.name}
                            whiteImg={this.whiteAndBlackImgs.white}
                            blackImg={this.whiteAndBlackImgs.black}
                            theme={this.state.theme}
                        />
                    </PermanentDrawer>
                    <SideBar
                        theme={this.state.theme}
                        drawerType="left"
                        width={sideBarWidth}
                    >
                        <NavBar
                            currentPage="CreatePiece"
                            flexDirection="column"
                            style={{width: navBarWidth}}
                            buttonStyle={{
                                fontSize: fontSize002 * 1.2,
                                justifyContent: "flex-start",
                                width: navBarButtonWidth,
                                height: "2.5em",
                            }}
                            theme={this.state.theme}
                            redirectMessage={messageStr}
                            helpTitle={HelpTitle(fontSize002, this.state.theme)}
                            helpText={HelpText(fontSize002, this.state.theme)}
                            isUnsavedChanges={this.isUnsavedChanges}
                        />
                    </SideBar>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <PersistentDrawer
                        theme={this.state.theme}
                        drawer={
                            <NavBar
                                currentPage="CreatePiece"
                                flexDirection="column"
                                style={{width: "100%"}}
                                buttonStyle={{
                                    fontSize: fontSize002 * 1.2,
                                    justifyContent: "flex-start",
                                    width: "99%",
                                    height: "2.5em",
                                }}
                                theme={this.state.theme}
                                redirectMessage={messageStr}
                                helpTitle={HelpTitle(fontSize002, this.state.theme)}
                                helpText={HelpText(fontSize002, this.state.theme)}
                                isUnsavedChanges={this.isUnsavedChanges}
                            />
                        }
                        appBarContent={
                            <Typography variant="h6" noWrap>
                                Create Piece
                            </Typography>
                        }
                    >
                        <Board
                            key="content"
                            theme={this.state.theme}
                            toggleOffset={this.toggleOffset}
                            spanDisplays={this.spanDisplays}
                            offsets={this.offsetDisplays}
                            pieceLoc={this.location}
                            fontSize={largeBoardFontSizeMobile}
                            pieceImgBase64Str={this.whiteAndBlackImgs["white"]}
                            showSpanText={this.state.showSpanText}
                            showOffsetText={this.state.showOffsetText}
                        />
                        <MuiAccordion theme={this.state.theme}>
                            {[
                                {
                                    id: "name",
                                    title: <Typography>Name</Typography>,
                                    body: (
                                        <Name
                                            key={uuidv4()}
                                            updateName={this.updateName}
                                            updateNameFinish={
                                                this.updateNameFinish
                                            }
                                            inputRef={this.textInput}
                                            defaultValue={this.name}
                                            theme={this.state.theme}
                                        />
                                    ),
                                },
                                {
                                    id: "icon",
                                    title: <Typography>Icon</Typography>,
                                    body: (
                                        <Icon
                                            key={"Icon"}
                                            theme={this.state.theme}
                                            setPieceImg={this.setPieceImg}
                                            whiteAndBlackImgs={
                                                this.whiteAndBlackImgs
                                            }
                                            showChooseModal={
                                                this.showChooseModal
                                            }
                                        />
                                    ),
                                },
                                {
                                    id: "range",
                                    title: <Typography>Range</Typography>,
                                    body: (
                                        <Range
                                            key={"Range"}
                                            theme={this.state.theme}
                                            spans={this.spans}
                                            offsets={this.offsets}
                                            toggleSpan={this.toggleSpan}
                                            screenCase="mobile"
                                        />
                                    ),
                                },
                                {
                                    id: "location",
                                    title: <Typography>Location</Typography>,
                                    body: (
                                        <Location
                                            key={"Location"}
                                            setLoc={this.setLoc}
                                            theme={this.state.theme}
                                            selectedLoc={this.location}
                                        />
                                    ),
                                },
                                {
                                    id: "options",
                                    title: <Typography>Options</Typography>,
                                    body: (
                                        <Options
                                            key={"Options"}
                                            load={this.load}
                                            save={this.save}
                                            reset={this.reset}
                                            erase={this.erase}
                                            whiteImg={
                                                this.whiteAndBlackImgs.white
                                            }
                                            blackImg={
                                                this.whiteAndBlackImgs.black
                                            }
                                            pieceName={this.name}
                                            theme={this.state.theme}
                                        />
                                    ),
                                },
                            ]}
                        </MuiAccordion>
                    </PersistentDrawer>
                </MediaQuery>
            </>
        );
    }
}

export default withStyles(styles)(CreatePiece);
