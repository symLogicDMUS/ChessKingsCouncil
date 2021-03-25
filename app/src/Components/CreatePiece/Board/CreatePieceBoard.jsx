import React from "react";
import "../../helpers/stepFuncs";
import { difference } from "../../helpers/setOps";
import { rankfiles } from "../../helpers/rankfiles";
import { getAngleLocations } from "../Range/SpanArrowButtons/getAngleLocations";
import { LocationButton } from "../Location/LocationButton";
import { ArrowButton } from "../Range/SpanArrowButtons/ArrowButton";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import { useStyles } from "./CreatePieceBoard.jss";
import {useMediaQuery} from "@material-ui/core";

export function CreatePieceBoard({
    theme,
    pieceLoc,
    setLoc,
    spanDisplays,
    offsetDisplays,
    toggleOffset,
    toggleSpan,
    showSpanText,
    showOffsetText,
    miniVariantTool,
    imgUrl,
}) {
    const isWide = useMediaQuery('(min-width: 960px)');
    const screenCase = isWide ? 'wide' : 'thin';

    const classes = useStyles();

    const getEmptySquare = (rf) => {
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
                hasToolChild={false}
            >
                {null}
            </Square>
        );
    };

    const getSquareWithPiece = (rf) => {
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
                hasToolChild={false}
            >
                <Piece
                    key='piece'
                    theme={theme}
                    rf={rf.toUpperCase()}
                    imgUrl={imgUrl}
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
                hasToolChild={true}
            >
                <ArrowButton
                    angle={angle}
                    isActive={spanDisplays[rf]}
                    toggleSpan={toggleSpan}
                    screenCase='thin'
                    isOffset={offsetDisplays[rf]}
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
                hasToolChild={true}
            >
                <LocationButton
                    rf={rf}
                    theme={theme}
                    key={`location-${rf}`}
                    onClick={() => setLoc(rf)}
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
                squares.push(getSquareWithPiece(rf));
            } else {
                squares.push(getEmptySquare(rf));
            }
        }
        return squares;
    };

    const getLocationToolBoard = () => {
        const locations = ["d4", "e4", "d5", "e5"];
        const squares = [];
        for (const rf of rankfiles) {
            if (rf === pieceLoc) {
                squares.push(getSquareWithPiece(rf));
            } else if (locations.includes(rf)) {
                squares.push(getSquareWithLocationButton(rf));
            }
            else {
                squares.push(getEmptySquare(rf))
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
                squares.push(getEmptySquare(rf));
            }
        }
        return squares;
    };

    return (
        <>
            <div className={classes.board}>
                {screenCase === 'thin' && miniVariantTool === "Range" ? (
                    getRangToolBoard()
                ) : null}
                {screenCase === 'thin' && miniVariantTool === "Location" ? (
                    getLocationToolBoard()
                ) : null}
                {screenCase !== 'thin' || (screenCase === 'thin' && miniVariantTool === null) ? (
                    getRegularBoard()
                ) : null}
            </div>
        </>
    );
}
