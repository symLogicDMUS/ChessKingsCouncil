export function getButtonSize(height) {
    return {
        height: height,
        width: height * 3.8,
        fontSize: height / 1.66,
        // paddingTop: height * 0.1,
        borderRadius: height / 3.57,
    };
}