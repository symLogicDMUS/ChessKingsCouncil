import makeStyles from "@material-ui/core/styles/makeStyles";

const width = window.screen.availWidth * 0.08
const height = window.screen.availWidth * 0.12;
const top = window.screen.availHeight * 0.45
const margin = window.screen.availWidth * 0.01

const standard_left = window.screen.availWidth * 0.4;
const custom_left = standard_left + width + margin;
const council_left = custom_left + width + margin;

const gameType = {
    width: width,
    height: height,
    top: top
}
export const useStyles = makeStyles({
    standard: {
        ...gameType,
        left: standard_left,
    },
    custom: {
        ...gameType,
        left: custom_left
    },
    council: {
        ...gameType,
        left: council_left
    },
});
