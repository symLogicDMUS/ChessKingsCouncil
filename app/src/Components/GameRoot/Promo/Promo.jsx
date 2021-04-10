import React, {useEffect,useReducer} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {PromoChoice} from "./PromoChoice";
import {shuffle} from "../../helpers/shuffleArray";
import {IconButton, Portal} from "@material-ui/core";
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import ForwardIcon from '@material-ui/icons/Forward';
import {reducer} from "./Promo.red";
import {useStyles} from "./Promo.jss";
import {getPawnImg} from "./getPawnImg";

export function Promo(props) {

    const classes = useStyles({theme: props.theme});

    // const pawnImg = useMemo(() => getPawnImg(props.gameType, props.color, props.theme), [])
    const pawnImg = getPawnImg(props.gameType, props.color, props.theme);

    const [state, dispatch] = useReducer(reducer, {
        current: 0,
        prev: props.promoChoices.length - 1,
        numPieces: props.promoChoices.length,
        direction: 'right',
        reverseDirection: 'left',
    });

    useEffect(() => {
        if (props.color === props.aiColor) {
            aiPromote(props.promoDest);
        }
    }, [props.color]);

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
        const pieceName = props.promoChoices[state.current]
        const id = props.pieceDict[pieceName]
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

    return (
        <Portal>
            <div className={classes.modal}>
                    <IconButton
                        className={clsx(classes.nav_button, {
                            [classes.prevButton]: true,
                        })}
                        onClick={() => dispatch({type: "previous"})}
                    >
                        <ArrowLeft className={classes.arrow_icon}/>

                    </IconButton>
                    {props.promoChoices.map((pieceName, i) => (
                        <PromoChoice
                            key={i}
                            onClick={promote}
                            theme={props.theme}
                            pieceName={pieceName}
                            pieceId={props.pieceDict[pieceName]}
                            imgUrl={props.defs[pieceName][props.color].img}
                            isCurrent={props.promoChoices[state.current] === pieceName}
                            isLast={i === props.promoChoices.length - 1}
                            reverseDirection={state.reverseDirection}
                            direction={state.direction}
                        />
                    ))}
                    <IconButton
                        className={clsx(classes.nav_button, {
                            [classes.nextButton]: true,
                        })}
                        onClick={() => dispatch({type: "next"})}
                    >
                        <ArrowRight className={classes.arrow_icon}/>
                    </IconButton>
                    <Box
                        onClick={promote}
                        className={classes.promote_button}
                    >
                        <Box className={classes.icons}>
                            <img src={pawnImg} className={classes.piece_img} alt='icon of Pawn'/>
                            <ForwardIcon className={clsx(classes.piece_img, {[classes.icon]: true})} />
                            <img src={props.defs[props.promoChoices[state.current]][props.color].img}
                                 className={classes.piece_img}
                                 alt='icon of potential promo'
                            />
                        </Box>
                        <Typography variant='button' className={classes.text}>
                            Promote
                        </Typography>
                    </Box>
            </div>
        </Portal>
    );
}
