import React, {useState} from "react";
import { Slide } from "@material-ui/core";
import { motion } from "framer-motion";
import { timeout, style, useStyles } from "./PromoChoice.jss";

export function PromoChoice({
    imgUrl,
    onClick,
    theme,
    pieceName,
    isCurrent,
    isLast,
    direction,
    reverseDirection,
}) {
    const classes = useStyles({ theme });
    const [canHover, setCanHover] = useState(false);
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
                src={imgUrl}
                onClick={onClick}
                whileHover={canHover ? { scale: 1.2, transition: { duration: 0.3 }} : null}
                alt={`${pieceName} (icon of piece)`}
                className={classes.promo_choice}
            />
        </Slide>
    );
}
