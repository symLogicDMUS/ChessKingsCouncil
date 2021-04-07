import React, {memo, useState} from "react";
import clsx from "clsx";
import { Fab } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./FabChild.jss";

/**
 * Close the interactive tools that are displayed on the CreatePiece board for thin screens
 */
export const FabChild = memo(({
    onClick,
    className,
    style,
    theme,
    isHoverRed,
}) => {
    const [hover, setHover] = useState(false);

    const classes = useStyles({ theme: theme });

    return (
        <Fab
            onClick={onClick}
            className={clsx(classes.fab, {
                [className]: className,
                [classes.rangeHoverButton]: isHoverRed,
                [classes.locHoverButton]: ! isHoverRed,
            })}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            size='small'
            style={style}
        >
            <CloseIcon className={clsx(classes.fab_icon, {
                [classes.rangeHoverIcon]: isHoverRed && hover,
                [classes.locHoverIcon]: ! isHoverRed && hover,
            })} />
        </Fab>
    );
});
