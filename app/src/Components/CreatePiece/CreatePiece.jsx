import React from "react";
import { v4 as uuidv4 } from "uuid";
import MediaQuery from "react-responsive";
import withStyles from "@material-ui/core/styles/withStyles";
import { copy } from "../helpers/copy";
import { messageStr } from "./helpers/messageStr";
import { NavBar } from "../Reuseables/NavBar";
import { Name } from "./Name/Name";
import { Icon } from "./Icon/Icon";
import { Range } from "./Range/Range";
import { Location } from "./Location/Location";
import { Options } from "./Options/Options";
import { saveDef } from "../../API/saveDef";
import { stepFuncDict } from "../helpers/stepFuncs";
import { outOfBounds as oob } from "../helpers/oob";
import { xyToRf, rfToXy } from "../helpers/crdCnvrt";
import { getRotations } from "./helpers/getRotations";
import { getSpansDict } from "./helpers/getSpansDict";
import { flipOffsets } from "./helpers/flipOffsets";
import { getStepFuncNames } from "./helpers/getStepFuncNames";
import { SideBar } from "../Reuseables/SidBar";
import PermanentDrawer from "../Reuseables/PermanentDrawer";
import { CreatePieceBoard as Board } from "./Board/CreatePieceBoard";
import { getBinaryBoarAllFalse } from "../helpers/getBinaryBoardAllFalse";
import { navBarWidth } from "../Reuseables/NavBar.jss";
import { fontSize } from "../styles/fontSize.jss";
import { sideBarWidth } from "../Reuseables/SidBar.jss";
import { drawerWidth } from "../Reuseables/PermanentDrawer.jss";
import { navBarButtonWidth } from "../Reuseables/NavBarButton.jss";
import Typography from "@material-ui/core/Typography";
import MuiAccordion from "../Reuseables/MuiAccordion";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import "../styles/_backgrounds.scss";
import { styles } from "./CreatePiece.jss";

class CreatePiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "d4",
            theme: "dark",
            whiteImg: null,
            blackImg: null,
            binaryValue: 0,
            unsavedChanges: false,
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
        this.loadedName = null;
        this.loadedSpans = null;
        this.loadedOffsets = null;

        //binds
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
        this.erase = this.erase.bind(this);
        this.clear = this.clear.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.updateName = this.updateName.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.toggleSpan = this.toggleSpan.bind(this);
        this.toggleOffset = this.toggleOffset.bind(this);
        this.resetImg = this.resetImg.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
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
                blackImg: this.props.location.state.blackImg
            })
        }
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    triggerRender() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    load({name, spans, offsets, whiteImg, blackImg}) {
        this.spans = getSpansDict(spans);
        this.offsets = offsets;
        this.whiteAndBlackImgs = {
            white: whiteImg,
            black: blackImg,
        };

        // provide static copy so that can reset if need to:
        this.loadedName = copy(name);
        this.loadedSpans = copy(this.spans);
        this.loadedOffsets = copy(this.offsets);

        this.setLoc("d4");

        this.setState({
            name: name,
            unsavedChanges: false,
        });
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

        newPiece.W.spans = getStepFuncNames(angles);
        newPiece.B.spans = getStepFuncNames(getRotations(angles, 180));
        newPiece.W.offsets = this.offsets;
        newPiece.B.offsets = flipOffsets(this.offsets);
        newPiece.W.img = this.whiteAndBlackImgs.white;
        newPiece.B.img = this.whiteAndBlackImgs.black;

        saveDef(this.state.name, newPiece).then(
            ([r]) => {
                this.setState({ unsavedChanges: false });
            }
        );
    }

    /**
     * reset to the last saved or loaded, or to blank if not saved or loaded
     */
    reset() {
        if (this.loadedName === null) this.clear();
        else {
            this.spans = copy(this.loadedSpans);
            this.offsets = copy(this.loadedOffsets);
            const name = copy(this.loadedName);
            this.setState({ name: name, unsavedChanges: false });
        }
    }

    /**
     * used by the Erase Option button to erase the range of a piece all spans
     * and offsets are reset to false. The images for white and black are not
     * */
    erase() {
        this.resetOffsetsAndRange();
        if (
            this.state.name === "" &&
            !this.whiteAndBlackImgs.white &&
            !this.whiteAndBlackImgs.black
        ) {
            this.setState({ unsavedChanges: false });
        } else {
            this.setState({ unsavedChanges: true });
        }
    }

    clear() {
        /*used by Reset Option when not a loaded piece*/
        this.resetOffsetsAndRange();
        this.whiteAndBlackImgs = { white: null, black: null };
        this.setState({ name: "", location: "d4", unsavedChanges: false });
    }

    /**used by name tool*/
    updateName(input) {
        this.setState({ name: input, unsavedChanges: true });
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
        let rf = stepFunc(this.state.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = this.spans[angle];
            rf = stepFunc(rf);
        }
        this.setState({ unsavedChanges: true });
    }

    /**used by Location tool, called by this.setDisplaySpans()*/
    setDisplaySpan(angle) {
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.state.location);
        while (!oob(rf)) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    /**
     *  used by Location tool, called by this.setLoc()
     *  updates the squares that are highlighted when piece location changes
     * */
    setDisplaySpans() {
        Object.entries(this.spans).forEach(([angle, isActive]) => {
            if (isActive) this.setDisplaySpan(angle);
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
    setDisplayOffsets() {
        let [x1, y1] = rfToXy(this.state.location);
        let [dx, dy] = [-1, -1];
        this.offsets.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            this.offsetDisplays[xyToRf(dx, dy)] = true;
        });
    }

    /**used by the Reset Option button, called by this.reset()*/
    resetDisplayOffsets() {
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
        this.setState({ location: rf });
        this.resetSpanDisplays();
        this.resetDisplayOffsets();
        this.setDisplaySpans();
        this.setDisplayOffsets();
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

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    <PermanentDrawer
                        drawerType="right"
                        theme={this.state.theme}
                        width={drawerWidth}
                        content={
                            <Board
                                key="content"
                                theme={this.state.theme}
                                toggleOffset={this.toggleOffset}
                                spanDisplays={this.spanDisplays}
                                offsets={this.offsetDisplays}
                                pieceLoc={this.state.location}
                                pieceImgBase64Str={
                                    this.whiteAndBlackImgs["white"]
                                }
                                showSpanText={this.state.showSpanText}
                                showOffsetText={this.state.showOffsetText}
                                screenCase="desktop"
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
                            name={this.name}
                            theme={this.state.theme}
                            updateName={this.updateName}
                        />
                        <Icon
                            key={uuidv4()}
                            theme={this.state.theme}
                            setPieceImg={this.setPieceImg}
                            resetImg={this.resetImg}
                            whiteAndBlackImgs={this.whiteAndBlackImgs}
                        />
                        <Range
                            key={uuidv4()}
                            theme={this.state.theme}
                            spans={this.spans}
                            offsets={this.offsets}
                            toggleSpan={this.toggleSpan}
                            update={this.triggerRender}
                            screenCase="desktop"
                        />
                        <Location
                            key={uuidv4()}
                            setLoc={this.setLoc}
                            theme={this.state.theme}
                            selectedLoc={this.state.location}
                        />
                        <Options
                            key={uuidv4()}
                            load={this.load}
                            save={this.save}
                            reset={this.reset}
                            erase={this.erase}
                            whiteImg={this.whiteAndBlackImgs.white}
                            blackImg={this.whiteAndBlackImgs.black}
                            pieceName={this.state.name}
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
                            style={{ width: navBarWidth }}
                            buttonStyle={{
                                fontSize: fontSize * 1.2,
                                justifyContent: "flex-start",
                                width: navBarButtonWidth,
                                height: "2.5em",
                            }}
                            redirectMessage={messageStr}
                            unsavedChanges={this.state.unsavedChanges}
                            theme={this.state.theme}
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
                                style={{ width: "100%" }}
                                buttonStyle={{
                                    fontSize: fontSize * 1.2,
                                    justifyContent: "flex-start",
                                    width: "99%",
                                    height: "2.5em",
                                }}
                                redirectMessage={messageStr}
                                unsavedChanges={this.state.unsavedChanges}
                                theme={this.state.theme}
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
                            pieceLoc={this.state.location}
                            pieceImgBase64Str={this.whiteAndBlackImgs["white"]}
                            showSpanText={this.state.showSpanText}
                            showOffsetText={this.state.showOffsetText}
                            screenCase="mobile"
                        />
                        <MuiAccordion theme={this.state.theme}>
                            {[
                                {
                                    id: "name",
                                    title: <Typography>Name</Typography>,
                                    body: (
                                        <Name
                                            key={"Name"}
                                            name={this.name}
                                            theme={this.state.theme}
                                            updateName={this.updateName}
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
                                            updateParent={this.triggerRender}
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
                                            update={this.triggerRender}
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
                                            selectedLoc={this.state.location}
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
                                            whiteImg={this.whiteAndBlackImgs.white}
                                            blackImg={this.whiteAndBlackImgs.black}
                                            pieceName={this.state.name}
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
