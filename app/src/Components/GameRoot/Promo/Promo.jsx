import React, { useEffect, useReducer, useState } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { PromoChoice } from "./PromoChoice";
import { shuffle } from "../../helpers/shuffleArray";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Typography from "@material-ui/core/Typography";
import ForwardIcon from "@material-ui/icons/Forward";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Backdrop, Button, IconButton, Portal } from "@material-ui/core";
import { standardPieceNames } from "../../helpers/standardPieceNames";
import ProfileWBModal from "../../PieceProfiles/ProfileWB/ProfileWBModal";
import { specialThemeList } from "../../styles/themes/specialThemeImgs/specialThemeList.jss";
import { franchisePieceImgs } from "../../styles/themes/specialThemeImgs/franchisePieceImgs";
import { getPawnImg } from "./getPawnImg";
import { reducer } from "./Promo.red";
import { useStyles } from "./Promo.jss";

function Promo(props) {
    const classes = useStyles({ theme: props.theme });

    const [state, dispatch] = useReducer(reducer, {
        current: 0,
        prev: props.promoChoices.length - 1,
        numPieces: props.promoChoices.length,
        direction: "right",
        reverseDirection: "left",
    });

    useEffect(() => {
        if (props.color === props.aiColor) {
            aiPromote(props.promoDest);
        }
    }, [props.color]);

    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? "wide" : "thin";

    const [profileModal, setProfileModal] = useState(false);

    const pawnImg = getPawnImg(props.gameType, props.color, props.theme);

    const getPromoImg = () => {
        const pieceName = props.promoChoices[state.current];
        if (
            standardPieceNames.includes(pieceName) &&
            specialThemeList.includes(props.theme)
        ) {
            return franchisePieceImgs[props.theme][pieceName][props.color];
        } else {
            return props.defs[pieceName][props.color].img;
        }
    };

    /**
     * Pawn promotion means we are adding another piece,
     * idNumber is how many of that piece for that color
     * there is now
     **/
    const getIdNumber = (idChoice) => {
        let matches = Object.values(props.board).filter((pieceId) =>
            pieceId.startsWith(props.color + idChoice.toUpperCase())
        );
        return matches.length + 1;
    };

    const getNewId = (idChoice, idNumber) => {
        return props.color + idChoice.toUpperCase() + idNumber;
    };

    const removePawnHistory = (pawnId) => {
        delete props.jsonRecords.pawnHistories[pawnId];
    };

    const replacePawnWithPromo = (pawnLoc, newId) => {
        props.board[pawnLoc] = newId;
    };

    const promote = () => {
        const pawnLoc = props.promoDest;
        const pieceName = props.promoChoices[state.current];
        const id = props.pieceDict[pieceName];
        const idNumber = getIdNumber(id);
        const newId = getNewId(id, idNumber);
        const oldId = props.board[pawnLoc];
        replacePawnWithPromo(pawnLoc, newId);
        removePawnHistory(oldId);
        props.piecesDispatch({
            type: "promote",
            oldId: oldId,
            newId: newId,
            defs: props.defs,
            idDict: props.idDict,
            theme: props.theme,
        });
        props.finishMove(props.promoStart, pawnLoc);
    };

    const aiPromote = (pawnLoc) => {
        let ids = aiPromoChoices();
        ids = shuffle(ids);
        const idType = ids[0];
        const idNumber = getIdNumber(idType);
        const newId = getNewId(idType, idNumber);
        const oldId = props.board[pawnLoc];
        replacePawnWithPromo(pawnLoc, newId);
        removePawnHistory(oldId);
        props.piecesDispatch({
            type: "promote",
            oldId: oldId,
            newId: newId,
            defs: props.defs,
            idDict: props.idDict,
        });
        props.finishMove(props.promoStart, pawnLoc);
    };

    const aiPromoChoices = () => {
        let pieceName = null;
        const promoChoices = [];
        for (const id of Object.keys(props.idDict)) {
            pieceName = props.idDict[id];
            if (props.promoChoices.includes(pieceName)) {
                promoChoices.push(id);
            }
        }
        return promoChoices;
    };

    const currentPieceName = props.promoChoices[state.current];

    return (
        <Portal>
            <Backdrop open={true} className={classes.modal}>
                {profileModal && (
                    <Portal>
                        <ProfileWBModal
                            isModal={true}
                            theme={props.theme}
                            color={props.color}
                            imgUrl={getPromoImg()}
                            screenCase={screenCase}
                            pieceName={currentPieceName}
                            def={props.defs[currentPieceName][props.color]}
                            closeProfile={() => setProfileModal(false)}
                        />
                    </Portal>
                )}
                <IconButton
                    className={clsx(classes.nav_button, {
                        [classes.prevButton]: true,
                    })}
                    onClick={() => dispatch({ type: "previous" })}
                >
                    <ArrowLeft className={classes.arrow_icon} />
                </IconButton>
                {props.promoChoices.map((pieceName, i) => (
                    <PromoChoice
                        key={i}
                        onClick={promote}
                        defs={props.defs}
                        color={props.color}
                        pieceName={pieceName}
                        pieceId={props.pieceDict[pieceName]}
                        isCurrent={currentPieceName === pieceName}
                        isLast={i === props.promoChoices.length - 1}
                        reverseDirection={state.reverseDirection}
                        direction={state.direction}
                        theme={props.theme}
                    />
                ))}
                <IconButton
                    className={clsx(classes.nav_button, {
                        [classes.nextButton]: true,
                    })}
                    onClick={() => dispatch({ type: "next" })}
                >
                    <ArrowRight className={classes.arrow_icon} />
                </IconButton>
                <Box className={classes.content}>
                    <Box
                        onClick={promote}
                        className={clsx(classes.promote_button, {
                            [classes.button2]: true,
                        })}
                    >
                        <Box className={classes.icons}>
                            <img
                                src={pawnImg}
                                className={classes.piece_img}
                                alt="icon of Pawn"
                            />
                            <ForwardIcon
                                className={clsx(classes.piece_img, {
                                    [classes.icon]: true,
                                })}
                            />
                            <img
                                src={getPromoImg()}
                                className={classes.piece_img}
                                alt="icon of potential promo"
                            />
                        </Box>
                        <Typography variant="button" className={classes.text}>
                            Promote
                        </Typography>
                    </Box>
                    <Box
                        onClick={() => setProfileModal(true)}
                        className={clsx(classes.promote_button, {
                            [classes.button1]: true,
                        })}
                    >
                        <Button
                            size={"large"}
                            className={classes.icon}
                            style={{ opacity: 0.6 }}
                            startIcon={<ListAltIcon size={"small"} />}
                            onClick={() => setProfileModal(true)}
                        >
                            Data
                        </Button>
                    </Box>
                </Box>
            </Backdrop>
        </Portal>
    );
}

export default Promo;
