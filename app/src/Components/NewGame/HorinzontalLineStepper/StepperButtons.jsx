import { useStyles } from "./StepperButtons.jss";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { MuiButton } from "../../Reuseables/Clickables/MuiButton";
import React from "react";
import clsx from "clsx";

export function StepperButtons(props) {
    const {
        steps,
        activeStep,
        handleBack,
        handleNext,
        isNextDisabled,
        isPlayDisabled,
        finish,
        theme,
    } = props;

    const classes = useStyles({ theme: theme });

    return (
        <Box className={classes.action_buttons}>
            <Button
                onClick={handleBack}
                disabled={activeStep === 0}
                className={clsx(classes.button, {
                    [classes.back]: true,
                })}
                variant="outlined"
                color="primary"
                size="large"
                theme={theme}
            >
                Back
            </Button>
            {activeStep !== steps.length - 1 && (
                <MuiButton
                    onClick={handleNext}
                    disabled={isNextDisabled}
                    className={clsx(classes.button, {
                        [classes.next]: true,
                    })}
                    variant="contained"
                    size="large"
                    theme={theme}
                >
                    Next
                </MuiButton>
            )}
            {activeStep === steps.length - 1 && (
                <MuiButton
                    onClick={finish}
                    disabled={isPlayDisabled}
                    className={clsx(classes.button, {
                        [classes.play]: true,
                    })}
                    variant="contained"
                    size="large"
                    theme={theme}
                >
                    Play
                </MuiButton>
            )}
        </Box>
    );
}
