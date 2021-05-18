import React, {
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/Background/_backgrounds.scss";
import { messageStr } from "./helpers/messageStr";
import { CreatePieceHelp } from "./Help/CreatePieceHelp";
import {DialogActions, DialogTitle} from "@material-ui/core";
import { HelpTitle } from "../Reuseables/NavBar/Help/HelpTitle";
import { LocationSquaresEnter } from "../Reuseables/Animations/LocationSquaresEnter";
import { getBinaryBoarAllFalse } from "../helpers/getBinaryBoardAllFalse";
import { ShowOffsetText } from "./Board/RangeLabelComponents/ShowOffsetText";
import { ShowSpanText } from "./Board/RangeLabelComponents/ShowSpanText";
import { ToolBackdrop } from "../Reuseables/MiniVariantTool/ToolBackdrop";
import { MuiSwitch } from "../Reuseables/Clickables/MuiSwitch";
import CreatePieceTitle from "./Title/CreatePieceTitle";
import AskLoginButton from "../Home/AskLoginButton";
import { ThemeContext } from "../ThemeContext";
import NameModal from "./Name/NameModal";
import IconModal from "./Icon/IconModal";
import { reducer } from "./CreatePiece.red";
import { useStyles } from "./CreatePiece.jss";

const Load = React.lazy(() => import("./Options/Load"));
const Save = React.lazy(() => import("./Options/Save"));
const Reset = React.lazy(() => import("./Options/Reset"));
const Erase = React.lazy(() => import("./Options/Erase"));
const Name = React.lazy(() => import("./Name/Name"));
const Icon = React.lazy(() => import("./Icon/Icon"));
const Range = React.lazy(() => import("./Range/Range"));
const Options = React.lazy(() => import("./Options/Options"));
const Location = React.lazy(() => import("./Location/Location"));
const NavBar = React.lazy(() => import("../Reuseables/NavBar/NavBar"));
const CreatePieceBoard = React.lazy(() => import("./Board/CreatePieceBoard"));
const ToolButton = React.lazy(() => import("../Reuseables/MiniVariantTool/ToolButton"));
const ResponsiveDrawer = React.lazy(() => import("../Reuseables/Drawers/ResponsiveDrawer"));
const Animations = React.lazy(() => import("../Reuseables/Animations/CreatePiecePageAnimations"));

function CreatePiece(props) {
    useEffect(() => {
        //if MyPieces page redirected to here:
        if (
            props.location !== undefined &&
            props.location.state !== undefined &&
            props.location.state.name !== undefined
        ) {
            load({
                name: props.location.state.name,
                spans: props.location.state.spans,
                offsets: props.location.state.offsets,
                whiteImg: props.location.state.whiteImg,
                blackImg: props.location.state.blackImg,
            });
        }
    }, []);

    const [state, dispatch] = useReducer(reducer, {
        loadInstance: 0,
        saveInstance: 0,
        justSaved: false,
        uploadPiece: false,
        showSpanText: true,
        showOffsetText: true,
        isFirstVisit: false,
        whiteUrl: null,
        blackUrl: null,
        clientX: 0,
        clientY: 0,
        spans: {
            "90d": false,
            "45d": false,
            "0d": false,
            "315d": false,
            "270d": false,
            "225d": false,
            "180d": false,
            "135d": false,
        },
        offsets: [],
        spanDisplays: getBinaryBoarAllFalse(),
        offsetDisplays: getBinaryBoarAllFalse(),
        whiteAndBlackImgs: { white: null, black: null },
        imgFileObjs: { white: null, black: null },
        newPiece: {
            W: { spans: null, offsets: null, img: null },
            B: { spans: null, offsets: null, img: null },
        },
        name: "",
        location: "d4",
        loadedName: "",
        loadedSpans: null,
        loadedOffsets: null,
        activeTool: null,
    });

    const { themes, setThemes } = useContext(ThemeContext);
    const [locSqrEntry, setLocSqrEntry] = useState(false);
    const theme = useMemo(() => themes.createPiece, [themes.createPiece]);
    const classes = useStyles({ theme });

    const toggleMiniVariantTool = (toolName) => {
        dispatch({
            type: "toggle-mini-variant-tool",
            toolName: toolName,
        });
    };

    const updateFirstVisit = (isFirstVisit) => {
        dispatch({ type: "update-first-visit", isFirstVisit: isFirstVisit });
    };

    const load = ({ name, spans, offsets, whiteImg, blackImg }) => {
        dispatch({
            type: "load",
            name: name,
            spans: spans,
            offsets: offsets,
            whiteImg: whiteImg,
            blackImg: blackImg,
        });
    };

    const save = () => {
        dispatch({ type: "save" });
    };

    /**
     * reset to the last saved or loaded, or to blank if not saved or loaded
     */
    const reset = () => {
        dispatch({ type: "reset" });
    };

    /**
     * used by the Erase Option button, spans offsets and image reset to false.
     * */
    const erase = () => {
        dispatch({ type: "erase" });
    };

    const saveCallback = () => {
        dispatch({ type: "save-callback" });
    };

    /**used by Name tool*/
    const updateName = (name) => {
        dispatch({ type: "update-name", name: name });
    };

    /**used by Icon tool*/
    const setPieceImg = (color, imgStr) => {
        dispatch({ type: "set-piece-img", imgStr: imgStr, color: color });
        console.log(imgStr);
    };

    /**used by UploadImgButton from Icon tool*/
    const setImgFileObj = (color, fileObj) => {
        dispatch({ type: "set-img-file-obj", color: color, fileObj: fileObj });
    };

    /**used by Range tool*/
    const toggleSpan = (angle) => {
        dispatch({ type: "toggle-span", angle: angle });
    };

    /**used by Range tool*/
    const toggleOffset = (rf, offset) => {
        dispatch({ type: "toggle-offset", rf: rf, offset: offset });
    };

    /**used by the Location tool*/
    const setLoc = (rf) => {
        dispatch({ type: "set-loc", rf: rf });
    };

    /**
     * set white or black image to null if it was just deleted from database
     * @param deletedImgUrl (str)
     */
    const resetImg = (deletedImgUrl) => {
        dispatch({ type: "reset-img", deletedImgUrl: deletedImgUrl });
    };

    const locationToolClick = () => {
        if (state.activeTool === "Location") {
            toggleMiniVariantTool(null);
        } else {
            setLocSqrEntry(true);
        }
    };

    return (
        <>
            <Animations
                state={state}
                theme={theme}
                close={saveCallback}
                key={`${state.saveInstance}-piece-upload`}
                onClose={() => updateFirstVisit(false)}
                callback={() =>
                    dispatch({ type: "set-just-saved", justSaved: false })
                }
            />
            <ResponsiveDrawer
                appBarType="title"
                appBarContent={
                    <CreatePieceTitle name={state.name} theme={theme} />
                }
                theme={theme}
                themeAlt={true}
                className={classes.drawer}
                tools={
                    <>
                        <Name
                            theme={theme}
                            updateName={updateName}
                            defaultValue={state.name}
                            key={`Name-${state.loadInstance}`}
                        />
                        <Icon
                            key="Icon"
                            theme={theme}
                            resetImg={resetImg}
                            setPieceImg={setPieceImg}
                            setImgFileObj={setImgFileObj}
                            whiteAndBlackImgs={state.whiteAndBlackImgs}
                        />
                        <Range
                            key="Range"
                            spans={state.spans}
                            offsets={state.offsets}
                            toggleSpan={toggleSpan}
                            pieceLoc={state.location}
                            theme={theme}
                        />
                        <Location
                            key="Location"
                            theme={theme}
                            setLoc={setLoc}
                            selectedLoc={state.location}
                        />
                        <Options
                            key="Options"
                            load={load}
                            save={save}
                            reset={reset}
                            erase={erase}
                            theme={theme}
                            resetImg={resetImg}
                            pieceName={state.name}
                            whiteImg={state.whiteAndBlackImgs.white}
                            blackImg={state.whiteAndBlackImgs.black}
                            justSaved={state.justSaved}
                        />
                    </>
                }
                toolButtons={
                    <>
                        <ToolButton
                            text="Name"
                            name="Name"
                            theme={theme}
                            iconName={"name_tool"}
                            onClick={() => toggleMiniVariantTool("Name")}
                            isActive={
                                state.activeTool === "Name"
                            }
                        />
                        <ToolButton
                            text="Icon"
                            name="Icon"
                            theme={theme}
                            iconName={"icon_tool"}
                            onClick={() => toggleMiniVariantTool("Icon")}
                            isActive={
                                state.activeTool === "Icon"
                            }
                            setImgFileObj={setImgFileObj}
                        />
                        <ToolButton
                            text="Spans"
                            iconName={"range_tool"}
                            theme={theme}
                            isActive={
                                state.activeTool === "Range"
                            }
                            onClick={() =>
                                toggleMiniVariantTool("Range")
                            }
                        />
                        <ToolButton
                            text="Location"
                            theme={theme}
                            iconName={"location_tool"}
                            isActive={
                                state.activeTool === "Location"
                            }
                            onClick={locationToolClick}
                        />
                        <Load
                            load={load}
                            erase={erase}
                            theme={theme}
                            className={classes.smOption}
                            buttonType="tool"
                        />
                        {state.context ? (
                            <Save
                                save={save}
                                pieceName={state.name}
                                className={classes.smOption}
                                whiteImg={state.whiteAndBlackImgs.white}
                                blackImg={state.whiteAndBlackImgs.black}
                                justSaved={state.justSaved}
                                theme={theme}
                                buttonType="tool"
                            />
                        ) : (
                            <AskLoginButton
                                theme={theme}
                                iconName={"save_alt"}
                                text={"Save"}
                            />
                        )}
                        <Reset
                            reset={reset}
                            theme={theme}
                            className={classes.smOption}
                            buttonType="tool"
                        />
                        <Erase
                            erase={erase}
                            theme={theme}
                            className={classes.smOption}
                            buttonType="tool"
                        />
                    </>
                }
                navBar={
                    <NavBar
                        theme={theme}
                        currentPage="CreatePiece"
                        redirectMessage={messageStr}
                        helpTitle={
                            <HelpTitle theme={theme} fontSize={"2.6vh"}>
                                Creating a Piece
                            </HelpTitle>
                        }
                        helpText={CreatePieceHelp(theme)}
                        updateFirstVisit={updateFirstVisit}
                        additionalSettings={
                            <div className={classes.additional_settings}>
                                <DialogTitle className={classes.text}>Square Display Text</DialogTitle>
                                <DialogActions>
                                    <MuiSwitch
                                        theme={theme}
                                        isChecked={state.showOffsetText}
                                        control={
                                            <ShowOffsetText
                                                theme={theme}
                                                onChange={() =>
                                                    dispatch({
                                                        type: "toggle-offset-text",
                                                    })
                                                }
                                            />
                                        }
                                    >
                                        Show Offset Text
                                    </MuiSwitch>
                                    <MuiSwitch
                                        theme={theme}
                                        isChecked={state.showSpanText}
                                        control={
                                            <ShowSpanText
                                                theme={theme}
                                                onChange={() =>
                                                    dispatch({
                                                        type: "toggle-span-text",
                                                    })
                                                }
                                            />
                                        }
                                    >
                                        Show Span Text
                                    </MuiSwitch>
                                </DialogActions>
                            </div>
                        }
                        isUnsavedChanges={state.isUnsavedChanges}
                        updateTheme={state.updateTheme}
                    />
                }
                navHorizontal={false}
                contentClassName={classes.content}
            >
                <CreatePieceBoard
                    key="Board"
                    theme={theme}
                    setLoc={setLoc}
                    toggleSpan={toggleSpan}
                    toggleOffset={toggleOffset}
                    pieceLoc={state.location}
                    spanDisplays={state.spanDisplays}
                    showSpanText={state.showSpanText}
                    showOffsetText={state.showOffsetText}
                    imgUrl={state.whiteAndBlackImgs.white}
                    offsetDisplays={state.offsetDisplays}
                    activeTool={state.activeTool}
                />
                {locSqrEntry && (
                    <LocationSquaresEnter
                        onAnimationComplete={() => {
                            setLocSqrEntry(false);
                            toggleMiniVariantTool("Location", null);
                        }}
                        isImg={state.whiteAndBlackImgs.white}
                        pieceLoc={state.location}
                        theme={theme}
                    />
                )}
                <AnimatePresence>
                    {(state.activeTool === "Icon" ||
                        state.activeTool === "Name") && (
                        <ToolBackdrop
                            key="backdrop"
                            onClick={() =>
                                toggleMiniVariantTool(
                                    null,
                                )
                            }
                        />
                    )}
                    {state.activeTool === "Name" && (
                        <NameModal
                            theme={theme}
                            key={"Name-Tool"}
                            pieceName={state.name}
                            updateName={updateName}
                        />
                    )}
                    {state.activeTool === "Icon" && (
                        <IconModal
                            theme={theme}
                            key={"Icon-Tool"}
                            resetImg={resetImg}
                            setImgFileObj={setImgFileObj}
                            setNewPieceImg={setPieceImg}
                            whiteAndBlackImgs={state.whiteAndBlackImgs}
                        />
                    )}
                </AnimatePresence>
            </ResponsiveDrawer>
        </>
    );
}

export default CreatePiece;
