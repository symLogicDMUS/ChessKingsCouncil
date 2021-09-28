import React, {useEffect} from "react";
import "../../helpers/stepFuncs";
import { useMediaQuery } from "@material-ui/core";
import { getAngleLocations } from "../Range/SpanArrowButtons/getAngleLocations";
import { difference } from "../../helpers/setOps";
import { rankfiles } from "../../helpers/rankfiles";
import CreatePiecePiece from "./CreatePiecePiece";
import CreatePieceSquare from "./CreatePieceSquare";
import LocationButton from "../Location/LocationButton";
import ArrowButton from "../Range/SpanArrowButtons/ArrowButton";
import { useStyles } from "./CreatePieceBoard.jss";

function CreatePieceBoard(props) {
    const {
        theme,
        imgUrl,
        setLoc,
        pieceLoc,
        spanDisplays,
        offsetDisplays,
        toggleOffset,
        toggleSpan,
        showSpanText,
        showOffsetText,
        activeTool,
        ...other
    } = props;

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [theme]);

    const isWide = useMediaQuery("(min-width: 960px)");
    const screenCase = isWide ? "wide" : "thin";

    const classes = useStyles({ theme: theme });

    const getRegularSquare = (rf) => {
        return (
            <CreatePieceSquare
                rf={rf}
                key={rf}
                theme={theme}
                pieceLoc={pieceLoc}
                isSpan={spanDisplays[rf]}
                toggleOffset={toggleOffset}
                isOffset={offsetDisplays[rf]}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                hasToolChild={false}
            >
                {null}
            </CreatePieceSquare>
        );
    };

    const getSquareWithPiece = (rf) => {
        return (
            <CreatePieceSquare
                rf={rf}
                key={rf}
                theme={theme}
                pieceLoc={pieceLoc}
                isSpan={spanDisplays[rf]}
                toggleOffset={toggleOffset}
                isOffset={offsetDisplays[rf]}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                hasFabChild={false}
                hasToolChild={false}
            >
                <CreatePiecePiece rf={rf} theme={theme} imgUrl={imgUrl} />
            </CreatePieceSquare>
        );
    };

    const getSquareWithArrowButton = (rf, angle) => {
        return (
            <CreatePieceSquare
                rf={rf}
                key={rf}
                theme={theme}
                pieceLoc={pieceLoc}
                isSpan={spanDisplays[rf]}
                toggleOffset={toggleOffset}
                isOffset={offsetDisplays[rf]}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                hasFabChild={false}
                hasToolChild={true}
            >
                <ArrowButton
                    rf={rf}
                    angle={angle}
                    key={"location-" + rf}
                    toggleSpan={toggleSpan}
                    isActive={spanDisplays[rf]}
                    isOffset={offsetDisplays[rf]}
                    pieceLoc={pieceLoc}
                    screenCase="thin"
                    theme={theme}
                />
            </CreatePieceSquare>
        );
    };

    const getSquareWithLocationButton = (rf) => {
        return (
            <CreatePieceSquare
                rf={rf}
                key={rf}
                theme={theme}
                pieceLoc={pieceLoc}
                isSpan={spanDisplays[rf]}
                isOffset={offsetDisplays[rf]}
                toggleOffset={toggleOffset}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                hasFabChild={false}
                hasToolChild={true}
            >
                <LocationButton
                    rf={rf}
                    theme={theme}
                    onClick={() => setLoc(rf)}
                    hasPieceChild={rf === pieceLoc}
                >
                    {rf === pieceLoc ? (
                        <CreatePiecePiece
                            rf={rf}
                            theme={theme}
                            imgUrl={imgUrl}
                        />
                    ) : (
                        rf
                    )}
                </LocationButton>
            </CreatePieceSquare>
        );
    };

    const getRangToolBoard = () => {
        let rf;
        const squares = [];
        const angleLocations = getAngleLocations(pieceLoc);
        for (const angle of Object.keys(angleLocations)) {
            rf = angleLocations[angle];
            squares.push(getSquareWithArrowButton(rf, angle));
        }
        const remainingRfs = difference(
            new Set(rankfiles),
            new Set(Object.values(angleLocations))
        );
        for (const rf of remainingRfs) {
            if (rf === pieceLoc) {
                squares.push(getSquareWithPiece(rf));
            } else {
                squares.push(getRegularSquare(rf));
            }
        }
        return squares;
    };

    const getLocationToolBoard = () => {
        const locations = ["d4", "e4", "d5", "e5"];
        const squares = [];
        for (const rf of rankfiles) {
            if (locations.includes(rf)) {
                squares.push(getSquareWithLocationButton(rf));
            } else {
                squares.push(getRegularSquare(rf));
            }
        }
        return squares;
    };

    const getRegularBoard = () => {
        const squares = [];
        for (const rf of rankfiles) {
            if (rf === pieceLoc) {
                squares.push(getSquareWithPiece(rf));
            } else {
                squares.push(getRegularSquare(rf));
            }
        }
        return squares;
    };

    const getBoard = () => {
        if (screenCase === "thin") {
            if (activeTool === "Range") {
                return getRangToolBoard();
            }
            if (activeTool === "Location") {
                return getLocationToolBoard();
            }
        }
        return getRegularBoard();
    };

    return (
        <>
            <div className={classes.board} {...other}>
                {getBoard()}
            </div>
        </>
    );
}

export default CreatePieceBoard;
