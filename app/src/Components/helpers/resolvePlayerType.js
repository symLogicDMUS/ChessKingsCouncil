export const resolvePlayerType = (color) => {
    switch (color) {
        case "W":
            return "White";
        case "B":
            return "Black";
        default:
            return "Test";
    }
};
