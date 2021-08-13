import clsx from "clsx";
import React, { useMemo } from "react";
import { getSteps } from "./getSteps";
import Step from "@material-ui/core/Step";
import { StepperButtons } from "./StepperButtons";
import { getStepContent } from "./getStepContent";
import { invalids } from "../../helpers/invalids";
import StepLabel from "@material-ui/core/StepLabel";
import { charNotInStr } from "../../helpers/charNotInStr";
import { MuiThemeProvider, Stepper, Typography } from "@material-ui/core";
import { getStepperTheme } from "./stepper themes/getMuiStepperTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { getIsNextDisabled } from "./getIsNextDisabled";
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
    const smHeight = useMediaQuery("(max-height: 500px)");
    const classes = useStyles({ theme: theme });

    const isNextDisabled = getIsNextDisabled(
        activeStep,
        gameName,
        gameType,
        playerType
    );

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
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel={sm}
                    className={clsx(classes.stepper, {[classes.hidden]: smHeight})}
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
            <div className={classes.actions}>
                <Typography className={clsx(classes.instructions, {[classes.hidden]: ! smHeight})}>
                    {getStepContent(activeStep)}
                </Typography>
                <StepperButtons
                    steps={steps}
                    activeStep={activeStep}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    isNextDisabled={isNextDisabled}
                    isPlayDisabled={isPlayDisabled}
                    finish={finish}
                    theme={theme}
                />
            </div>
        </>
    );
}
