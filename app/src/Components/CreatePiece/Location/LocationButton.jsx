import React, {memo, useState} from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive/src";
import Button from "@material-ui/core/Button";
import {fade, Grow, Typography} from "@material-ui/core";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { binaryBoard } from "../../helpers/binaryBoard";
import { themes } from "../../styles/themes.jss";
import {darken, lighten} from "@material-ui/core/styles";
import { useStyles } from "./LocationButton.jss";

export const LocationButton = memo(({ rf, onClick, selected, theme, children }) => {
        const classes = useStyles({ theme: theme, rf: rf });
        const classes2 = useMoreStyles({ theme: theme });
        const [colorShift, setColorShift] = useState(true);
        const [growDuration, setGrowDuration] = useState(1000);

        return (
            <>
                <MediaQuery maxWidth={960}>
                    {colorShift ? (
                        <>
                            <Grow
                                in={true}
                                timeout={{
                                    enter: growDuration,
                                    exit: growDuration
                                }}
                                onEnter={() => setGrowDuration(0)}
                            >
                                <motion.div
                                    className={classes.sqr_button}
                                    animate={{
                                        backgroundColor: [
                                            lighten(themes[theme].dark_in_range, 0.6),
                                            lighten(themes[theme].dark_in_range, 0.08),
                                        ],
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                    onAnimationComplete={() => setColorShift(false)}
                                >
                                    <Typography
                                        className={classes.text}
                                        variant="button"
                                    >
                                        {children}
                                    </Typography>
                                </motion.div>
                            </Grow>
                        </>
                    ) : (
                        <div
                            onClick={() => {
                                setColorShift(true);
                                onClick();
                            }}
                            className={classes.sqr_button}
                        >
                            <div
                                className={classes.sqr_button}
                                onClick={() => {
                                    setColorShift(true);
                                    onClick();
                                }}
                            >
                                <Typography
                                    className={classes.text}
                                    variant="button"
                                >
                                    {children}
                                </Typography>
                            </div>
                        </div>
                    )}
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



// export function Success({setSaveStatus}) {
//
//     const [seconds, setSeconds] = useState(1);
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSeconds(seconds => seconds - 1);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);
//
//     if (seconds === 0)
//         setSaveStatus("reset");
//
//     return (<div style={{
//         position: "absolute",
//         zIndex:"3",
//         width: "100%",
//         height: "100%"
//     }}>
//         <div style={{
//             position:"absolute",
//             zIndex:"3",
//             fontSize:"50px",
//             fontFamily:"Tahoma",
//             color:"#72e2ff",
//             left: "20%",
//             top:"40%"}}>Piece saved successfully!</div>
//     </div>)
//
// };