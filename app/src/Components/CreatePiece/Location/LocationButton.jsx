import React, {memo, useState} from "react";
import clsx from "clsx";
import { Frame } from "framer";
import MediaQuery from "react-responsive/src";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { themes } from "../../styles/themes/themes.jss";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import {frame, useStyles } from "./LocationButton.jss";
import {lighten} from "@material-ui/core/styles";

const LocationButton = memo(({ rf, onClick, selected, theme, children }) => {
        const classes = useStyles({ theme: theme, rf: rf });
        const classes2 = useMoreStyles({ theme: theme });

        const [animate, setAnimate] = useState(false);

        return (
            <>
                <MediaQuery maxWidth={960}>
                    <Frame
                        width="100%"
                        height="100%"
                        onClick={onClick}
                        style={frame(theme)}
                        animate={animate ? {
                            backgroundColor: [
                                lighten(themes[theme].dark_in_range, 0.75),
                                themes[theme].dark_in_range,
                            ],
                        } : {}}
                        onTap={() => setAnimate(true)}
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

export default LocationButton;