import React, {memo, useState} from "react";
import clsx from "clsx";
import {motion} from "framer-motion";
import MediaQuery from "react-responsive/src";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { useStyles } from "./LocationButton.jss";
import { lighten } from "@material-ui/core/styles";
import { themes } from "../../styles/themes.jss";

export const LocationButton = memo(
    ({ rf, onClick, selected, theme, children }) => {
        const classes = useStyles({ theme: theme, rf: rf });
        const classes2 = useMoreStyles({ theme: theme });
        const [animate, setAnimate] = useState(false);

        const variants = {
            colorShift: {
                backgroundColor: [
                    lighten(themes[theme].dark_in_range, 0.7),
                    themes[theme].dark_in_range,
                ],
            },
            none: {}
        };
        return (
            <>
                <MediaQuery maxWidth={960}>
                    <motion.div
                        onClick={() => {
                            onClick()
                            setAnimate(true)
                        }}
                        variants={variants}
                        className={classes.sqr_button}
                        animate={animate ? "colorShift" : "none"}
                        onAnimationComplete={() => setAnimate(false)}
                    >
                        <Typography className={classes.text} variant="button">
                            {children}
                        </Typography>
                    </motion.div>
                </MediaQuery>
                <MediaQuery minWidth={960}>
                    <Button
                        onClick={onClick}
                        className={clsx(classes2.button, {
                            [classes.button_selected]: selected,
                            [classes.button_normal]: !selected,
                            [classes2.icon_button]: true,
                        })}
                        variant="outlined"
                    >
                        {children}
                    </Button>
                </MediaQuery>
            </>
        );
    }
);
