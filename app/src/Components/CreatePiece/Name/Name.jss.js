import {tool_flexbox} from "../CreatePiece.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize002, fontSize0024} from "../../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize002,
    ipx: fontSize002,
    ipad: fontSize0024,
}

export const genStyle = () => ({
});

export const useStyles = makeStyles({
    name: props => ({
        width: '100%',
        '@media screen and (min-device-width: 1040px)': {
            ...tool_flexbox,
        },
    }),
}, {index: 1});