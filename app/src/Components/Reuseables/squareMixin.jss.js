import { getLeftAndTopPos } from "../helpers/getLeftAndTopPos";

export const square = (rf) => ({
    position: "absolute",
    height: "12.5%",
    width: "12.5%",
    zIndex: 1,
    ...getLeftAndTopPos(rf),
});

export const dark_normal = (rf) => ({
    ...square(rf),
    backgroundColor: "#008000",
});
export const light_normal = (rf) => ({
    ...square(rf),
    backgroundColor: "#ffffff",
});
export const dark_in_range = (rf) => ({
    ...square(rf),
    backgroundColor: "#fdfd35",
});
export const light_in_range = (rf) => ({
    ...square(rf),
    backgroundColor: "#ddff00",
});
export const none = (rf) => ({
    ...square(rf),
});
