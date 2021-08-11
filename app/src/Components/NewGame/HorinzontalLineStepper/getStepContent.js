export function getStepContent(step) {
    switch (step) {
        case 0:
            return "enter name of game...";
        case 1:
            return "pick type of game...";
        case 2:
            return "pick to play as white, black, or test...";
        default:
            return "Unknown step";
    }
}
