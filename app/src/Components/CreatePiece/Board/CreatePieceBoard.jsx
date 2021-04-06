import React from "react";
import "../../helpers/stepFuncs";
import {FabChild} from "./FabChild";
import {getHasFabChild} from "./getHasFabChild";
import { difference } from "../../helpers/setOps";
import { rankfiles } from "../../helpers/rankfiles";
import { useMediaQuery } from "@material-ui/core";
import { LocationButton } from "../Location/LocationButton";
import { getAngleLocations } from "../Range/SpanArrowButtons/getAngleLocations";
import { ArrowButton } from "../Range/SpanArrowButtons/ArrowButton";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import { useStyles } from "./CreatePieceBoard.jss";

export function CreatePieceBoard({
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
    miniVariantTool,
    toggleMiniVariantTool,
}) {
    const isWide = useMediaQuery("(min-width: 960px)");
    const screenCase = isWide ? "wide" : "thin";

    const classes = useStyles();

    const getRegularSquare = (rf) => {
        const hasFabChild = getHasFabChild(rf, pieceLoc, miniVariantTool)
        return (
            <Square
                rf={rf}
                key={rf}
                theme={theme}
                isSpan={spanDisplays[rf]}
                toggleOffset={toggleOffset}
                isOffset={offsetDisplays[rf]}
                pieceLoc={pieceLoc}
                screenCase={screenCase}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                hasFabChild={hasFabChild}
                hasToolChild={false}
            >
                {hasFabChild ? (
                    <FabChild theme={theme} onClick={() => toggleMiniVariantTool(miniVariantTool)} />
                ) : null}
            </Square>
        );
    };

    const getSquareWithPiece = (rf, pieceLocHighlight) => {
        return (
            <Square
                rf={rf}
                key={rf}
                theme={theme}
                isSpan={spanDisplays[rf]}
                toggleOffset={toggleOffset}
                isOffset={offsetDisplays[rf]}
                pieceLoc={pieceLoc}
                screenCase={screenCase}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                pieceLocHighlight={pieceLocHighlight}
                miniVariantTool={miniVariantTool}
                toggleMiniVariantTool={toggleMiniVariantTool}
                hasFabChild={false}
                hasToolChild={false}
            >
                <Piece
                    key="piece"
                    theme={theme}
                    imgUrl={imgUrl}
                    rf={rf.toUpperCase()}
                    pieceLocHighlight={pieceLocHighlight}
                />
            </Square>
        );
    };

    const getSquareWithArrowButton = (rf, angle) => {
        return (
            <Square
                rf={rf}
                key={rf}
                theme={theme}
                isSpan={spanDisplays[rf]}
                toggleOffset={toggleOffset}
                isOffset={offsetDisplays[rf]}
                pieceLoc={pieceLoc}
                screenCase={screenCase}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                miniVariantTool={miniVariantTool}
                toggleMiniVariantTool={toggleMiniVariantTool}
                hasFabChild={false}
                hasToolChild={true}
            >
                <ArrowButton
                    rf={rf}
                    angle={angle}
                    toggleSpan={toggleSpan}
                    isActive={spanDisplays[rf]}
                    isOffset={offsetDisplays[rf]}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                    pieceLoc={pieceLoc}
                    screenCase="thin"
                    theme={theme}
                />
            </Square>
        );
    };

    const getSquareWithLocationButton = (rf) => {
        return (
            <Square
                rf={rf}
                key={rf}
                theme={theme}
                isSpan={spanDisplays[rf]}
                toggleOffset={toggleOffset}
                isOffset={offsetDisplays[rf]}
                pieceLoc={pieceLoc}
                screenCase={screenCase}
                showSpanText={showSpanText}
                showOffsetText={showOffsetText}
                miniVariantTool={miniVariantTool}
                toggleMiniVariantTool={toggleMiniVariantTool}
                hasFabChild={false}
                hasToolChild={true}
            >
                <LocationButton
                    rf={rf}
                    theme={theme}
                    key={`location-${rf}`}
                    onClick={() => setLoc(rf)}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                />
            </Square>
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
                squares.push(getSquareWithPiece(rf, false));
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
            if (rf === pieceLoc) {
                squares.push(getSquareWithPiece(rf, true));
            } else if (locations.includes(rf)) {
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
                squares.push(getSquareWithPiece(rf, false));
            } else {
                squares.push(getRegularSquare(rf));
            }
        }
        return squares;
    };

    const getBoard = () => {
        if (screenCase === "thin") {
            if (miniVariantTool === "Range") {
                return getRangToolBoard();
            }
            if (miniVariantTool === "Location") {
                return getLocationToolBoard();
            }
        }
        return getRegularBoard();
    };

    return (
        <>
            <div className={classes.board}>{getBoard()}</div>
        </>
    );
}
