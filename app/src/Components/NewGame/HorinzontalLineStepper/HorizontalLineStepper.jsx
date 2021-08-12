import React, {useEffect, useMemo} from "react";
import { getSteps } from "./getSteps";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import {getStepContent} from "./getStepContent";
import {invalids} from "../../helpers/invalids";
import StepLabel from "@material-ui/core/StepLabel";
import {charNotInStr} from "../../helpers/charNotInStr";
import {MuiButton} from "../../Reuseables/Clickables/MuiButton";
import {MuiThemeProvider, Stepper, Typography} from "@material-ui/core";
import {getStepperTheme} from "./stepper themes/getMuiStepperTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles } from "./HorizontalLineStepper.jss";


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
    const classes = useStyles({theme});

    const getIsNextDisabled = () => {
        switch (activeStep) {
            case 0:
                return ! gameName
            case 1:
                return ! gameType
            case 2:
                return ! playerType && playerType !== 'None'
            default:
                console.log("ERROR in HorizontalLineStepper.jsx: Unknown step")
                return false;
        }
    }; const isNextDisabled = getIsNextDisabled()

    const predicate = (c) => charNotInStr(c, gameName)
    const isPlayDisabled = ! (
        playerType &&
        gameType &&
        gameName !== "" &&
        invalids.every(predicate)
    );

    const stepperTheme = useMemo(() => getStepperTheme(theme), [theme])

    const instructions =
    <Typography className={classes.instructions}>
        {getStepContent(activeStep)}
    </Typography>

    return (
        <>
            <MuiThemeProvider theme={stepperTheme}>
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel={sm}
                    className={classes.stepper}
                >
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
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
