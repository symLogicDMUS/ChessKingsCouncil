export const getIsNextDisabled = (activeStep, gameName, gameType, playerType) => {
    switch (activeStep) {
        case 0:
            return !gameName;
        case 1:
            return !gameType;
        case 2:
            return !playerType && playerType !== "None";
        default:
            console.log("ERROR in HorizontalLineStepper.jsx: Unknown step");
            return false;
    }
};