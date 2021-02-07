import React, { useEffect, useReducer } from "react";
import Box from "@material-ui/core/Box";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { shuffle } from "../../helpers/shuffleArray";
import { PromoArrow } from "./PromoArrow";
import { MuiButton as OkButton } from "../../Reuseables/MuiButton";
import { itemStyle, ok_button, useStyles } from "./Promo.jss";
import { reducer } from "./reducer.red";
import MediaQuery from "react-responsive/src";
import {fontSize0015, fontSize002, fontSize01} from "../../styles/fontSizes.jss";

function Promo(props) {
    const [state, dispatch] = useReducer(reducer, {
        promoChoice: null,
        promoChoices: [],
    });

    useEffect(() => {
        if (props.color === props.aiColor) {
            aiPromote(props.promoDest);
        }
    }, [props.color]);

    const classes = useStyles({ theme: props.theme});

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

    const promote = (pawnLoc) => {
        let idNumber = getIdNumber(state.promoChoice);
        let newId = getNewId(state.promoChoice, idNumber);
        let oldId = props.board[pawnLoc];
        replacePawnWithPromo(pawnLoc, newId);
        removePawnHistory(oldId);
        props.piecesDispatch({
            type: "promote",
            oldId: oldId,
            newId: newId,
            defs: props.pieceDefs,
            idDict: props.idDict,
        });
        props.finishMove(props.promoStart, pawnLoc);
    };

    const aiPromote = (pawnLoc) => {
        let ids = aiPromoChoices();
        ids = shuffle(ids);
        let idType = ids[0];
        let idNumber = getIdNumber(idType);
        let newId = getNewId(idType, idNumber);
        let oldId = props.board[pawnLoc];
        replacePawnWithPromo(pawnLoc, newId);
        removePawnHistory(oldId);
        props.piecesDispatch({
            type: "promote",
            oldId: oldId,
            newId: newId,
            defs: props.pieceDefs,
            idDict: props.idDict,
        });
        props.finishMove(props.promoStart, pawnLoc);
    };

    const aiPromoChoices = () => {
        let pieceName = null;
        let promoChoices = [];
        for (const id of Object.keys(props.idDict)) {
            pieceName = props.idDict[id];
            if (props.promoChoices.includes(pieceName)) {
                promoChoices.push(id);
            }
        }

        return promoChoices;
    };

    const noStandardPieces = () => {
        const standardPromoNames = ["Queen", "Rook", "Bishop", "Knight"];
        for (const pieceName of Object.values(props.idDict)) {
            if (standardPromoNames.includes(pieceName)) {
                return false;
            }
        }
        return true;
    };

    useEffect(() => {
        if (props.promoChoices.length === 0 && noStandardPieces()) {
            props.updateSpecialCase("none");
        } else {
            dispatch({
                type: "new-list",
                idDict: props.idDict,
                pieceDefs: props.pieceDefs,
                promoChoices: props.promoChoices,
                color: props.color,
                theme: props.theme,
            });
        }
    }, [props.promoChoices]);

    const selectPiece = (key) => {
        dispatch({ type: "select", key: key });
        dispatch({
            type: "new-list",
            idDict: props.idDict,
            pieceDefs: props.pieceDefs,
            promoChoices: props.promoChoices,
            color: props.color,
            theme: props.theme,
        });
    };

    return (
        <>
            <Box className={classes.modal}>
                <div className={classes.promos}>
                    <Box className={classes.img_group}>
                        <ScrollMenu
                            data={state.promoChoices}
                            promoChoice={state.promoChoice}
                            onSelect={selectPiece}
                            menuClass={classes.menu}
                            itemStyle={itemStyle()}
                            itemClassActive={classes.item_active}
                            arrowLeft={
                                <PromoArrow
                                    icon={<NavigateBeforeIcon />}
                                    theme={props.theme}
                                />
                            }
                            arrowRight={
                                <PromoArrow
                                    icon={<NavigateNextIcon />}
                                    theme={props.theme}
                                />
                            }
                        />
                    </Box>
                    <MediaQuery minDeviceWidth={768}>
                        <OkButton
                            onClick={() => promote(props.promoDest)}
                            style={ok_button('desktop', props.theme)}
                            isDisabled={!state.promoChoice}
                            theme={props.theme}
                            variant={"contained"}
                        >
                            Ok
                        </OkButton>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={767}>
                        <OkButton
                            onClick={() => promote(props.promoDest)}
                            style={ok_button('mobile', props.theme)}
                            isDisabled={!state.promoChoice}
                            theme={props.theme}
                            variant={"contained"}
                        >
                            Ok
                        </OkButton>
                    </MediaQuery>
                </div>
            </Box>
        </>
    );
}

export default Promo;
