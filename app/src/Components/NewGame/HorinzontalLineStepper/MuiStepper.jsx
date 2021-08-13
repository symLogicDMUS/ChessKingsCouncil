import clsx from "clsx";
import React, {useEffect, useState} from "react";
import {viewHeight, viewWidth} from "../../helpers/windowMeasurments";
import {Stepper} from "@material-ui/core";
import {useStyles} from "./MuiStepper.jss";

export function MuiStepper(props) {
    const classes = useStyles();

    const [userTouchedScreen, setUserTouchedScreen] = useState(false);
    useEffect(() => {
        function handleTouch() {
            setUserTouchedScreen(true);
        }
        window.addEventListener("touchstart", handleTouch);
        return (_) => {
            window.removeEventListener("touchstart", handleTouch);
        };
    });

    const hLessThanEqualWidth = () => viewHeight() / viewWidth() <= 1;
    const [lgAspect, setLgAspect] = useState(hLessThanEqualWidth());
    useEffect(() => {
        function handleResize() {
            if (hLessThanEqualWidth()) {
                setLgAspect(true);
            } else {
                setLgAspect(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <Stepper
            className={clsx(classes.stepper, {
                [classes.hidden]: lgAspect && userTouchedScreen,
            })}
            activeStep={props.activeStep}
            alternativeLabel={props.alternativeLabel}
        >
            {props.strings.map(props.callbackfn)}
        </Stepper>
    );
}