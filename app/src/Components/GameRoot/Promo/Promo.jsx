import React, { useEffect, useReducer } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { PromoArrow } from "./PromoArrow";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { shuffle } from "../../helpers/shuffleArray";
import { MuiButton as OkButton } from "../../Reuseables/MuiButton";
import { fontSizeAlt7 as fontSize } from "../../styles/fontSize.jss";
import { reducer } from "./reducer.red";
import { ok_button } from "./Promo.jss";
import { useStyles } from "./Promo.jss";

function Promo(props) {
    const [state, dispatch] = useReducer(reducer, {
        promoChoice: null,
        promoChoices: [],
    });

    const classes = useStyles({ theme: props.theme, fontSize: fontSize });

    const getIdNumber = (idChoice) => {
        /**Pawn promotion means we are adding another piece,
         * idNumber is how many of that piece for that color
         * there is now
         **/
        let matches = Object.values(props.board).filter((pieceId) =>
            pieceId.startsWith(props.color + idChoice.toUpperCase())
        );
        return matches.length + 1;
    };

    const getNewId = (idChoice, idNumber) => {
        return props.color + idChoice.toUpperCase() + idNumber;
    };

    const removePawnHistory = (pawnLoc) => {
        let pawnId = props.board[pawnLoc];
        delete props.jsonRecords.pawnHistories[pawnId];
    };

    const replacePawnWithPromo = (pawnLoc, newId) => {
        props.board[pawnLoc] = newId;
    };

    const updateGameRoot = () => {
        props.updateTurnData();
        props.updateSpecialCase("none");
        props.triggerRender();
    };

    const promote = (pawnLoc) => {
        let idNumber = getIdNumber(state.promoChoice);
        let newId = getNewId(idNumber, state.promoChoice);
        removePawnHistory(pawnLoc);
        replacePawnWithPromo(pawnLoc, newId);
        updateGameRoot();
    };

    const aiPromote = (pawnLoc) => {
        let ids = aiPromoChoices();
        ids = shuffle(ids);
        let idType = ids[0];
        let idNumber = getIdNumber(idType);
        let newId = getNewId(idNumber, idType);
        removePawnHistory(pawnLoc);
        replacePawnWithPromo(pawnLoc, newId);
        updateGameRoot();
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
            });
        }
    }, [props.promoChoices]);

    useEffect(() => {
        if (props.color === props.aiColor) {
            aiPromote(props.pawnLoc);
        }
    }, [props.color]);

    const selectPiece = (key) => {
        dispatch({ type: "select", key: key });
    };

    return (
        <div className={classes.modal}>
            <div className={classes.img_group}>
                <ScrollMenu
                    data={state.promoChoices}
                    promoChoice={state.promoChoice}
                    onSelect={selectPiece}
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
            </div>
            <OkButton
                onClick={() => promote(props.pawnLoc)}
                isDisabled={!state.promoChoice}
                style={ok_button(fontSize)}
                theme={props.theme}
                variant={"contained"}
            >
                Ok
            </OkButton>
        </div>
    );
}

export default Promo;
