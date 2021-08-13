import React, {useMemo} from "react";
import {getSteps} from "./getSteps";
import {MuiStepper} from "./MuiStepper";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import {invalids} from "../../helpers/invalids";
import StepLabel from "@material-ui/core/StepLabel";
import {charNotInStr} from "../../helpers/charNotInStr";
import {MuiButton} from "../../Reuseables/Clickables/MuiButton";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import {getStepperTheme} from "./stepper themes/getMuiStepperTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getIsNextDisabled} from "./getIsNextDisabled";
import {useStyles} from "./HorizontalLineStepper.jss";

export default function HorizontalLinearStepper({
    activeStep,
    handleNext,
    handleBack,
    gameName,
    gameType,
    playerType,
    finish,
    theme,
}) {
    const steps = getSteps();
    const sm = useMediaQuery("(max-width: 600px)");
    const classes = useStyles({ theme });

    const isNextDisabled = getIsNextDisabled(activeStep, gameName, gameType, playerType);

    const predicate = (c) => charNotInStr(c, gameName);
    const isPlayDisabled = !(
        playerType &&
        gameType &&
        gameName !== "" &&
        invalids.every(predicate)
    );

    const stepperTheme = useMemo(() => getStepperTheme(theme), [theme]);

    return (
        <>
            <MuiThemeProvider theme={stepperTheme}>
                <MuiStepper
                    strings={steps}
                    activeStep={activeStep}
                    alternativeLabel={sm}
                    callbackfn={(label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step id={index} key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    }}
                />
            </MuiThemeProvider>
            <div className={classes.action_buttons}>
                <Button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className={classes.button}
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
                        className={classes.button}
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
                        className={classes.button}
                        variant="contained"
                        size="large"
                        theme={theme}
                    >
                        Play
                    </MuiButton>
                )}
            </div>
        </>
    );
}
