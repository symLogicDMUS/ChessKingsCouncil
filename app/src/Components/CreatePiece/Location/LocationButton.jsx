import React, { memo, useState } from "react";
import clsx from "clsx";
import { Frame } from "framer";
import MediaQuery from "react-responsive/src";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useStyles as useMoreStyles } from "../../Reuseables/Clickables/Option.jss";
import {
    clickAnimation,
    currentSqr,
    frame,
    useStyles,
} from "./LocationButton.jss";

const LocationButton = memo(({ rf, onClick, selected, theme, children }) => {
    const classes = useStyles({ theme: theme, rf: rf });
    const classes2 = useMoreStyles({ theme: theme });

    const [animate, setAnimate] = useState(false);

    let addedStyle = {};
    if (rf === selected) {
        addedStyle = currentSqr(theme);
    }

    return (
        <>
            <MediaQuery maxWidth={960}>
                <Frame
                    width="100%"
                    height="100%"
                    onClick={onClick}
                    onTap={() => setAnimate(true)}
                    style={{ ...frame(theme), ...addedStyle }}
                    animate={animate ? clickAnimation(theme) : {}}
                    onAnimationComplete={() => setAnimate(false)}
                >
                    <Typography className={classes.text} variant="button">
                        {children}
                    </Typography>
                </Frame>
            </MediaQuery>
            <MediaQuery minWidth={960}>
                <Button
                    onClick={onClick}
                    className={clsx(classes2.create_piece_option, {
                        [classes.button_normal]: !selected,
                        [classes.button_selected]: selected,
                    })}
                    variant="outlined"
                >
                    {children}
                </Button>
            </MediaQuery>
        </>
    );
});

export default LocationButton;
