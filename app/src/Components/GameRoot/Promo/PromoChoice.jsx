import React, {useState} from "react";
import { Slide } from "@material-ui/core";
import { motion } from "framer-motion";
import { timeout, style, useStyles } from "./PromoChoice.jss";
import {specialThemeList} from "../../styles/themes/specialThemeList.jss";
import {franchisePieceImgs} from "../../../API/sampleData/specialThemeImgs/franchisePieceImgs";

export function PromoChoice({
    onClick,
    defs,
    color,
    pieceName,
    pieceId,
    isCurrent,
    isLast,
    direction,
    reverseDirection,
    theme,
}) {
    const classes = useStyles({ theme });
    const [canHover, setCanHover] = useState(false);

    const getImgUrl = () => {
        if (specialThemeList.includes(theme)) {
            return franchisePieceImgs[theme][pieceName][color]
        }
        else {
            return defs[pieceName][color].img;
        }
    };

    return (
        <Slide
            in={isCurrent}
            direction={isCurrent ? direction : reverseDirection}
            style={style(isCurrent, isLast)}
            onEntered={() => setCanHover(true)}
            onExit={() => setCanHover(false)}
            timeout={timeout}
            mountOnEnter
            unmountOnExit
        >
            <motion.img
                src={getImgUrl()}
                onClick={onClick}
                whileHover={canHover ? { scale: 1.2, transition: { duration: 0.3 }} : null}
                alt={`${pieceName} (icon of piece)`}
                className={classes.promo_choice}
            />
        </Slide>
    );
}
