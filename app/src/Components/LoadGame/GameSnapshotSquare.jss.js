/** see /Reusables/Square.jss.js */
import {themes} from "../styles/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import {rfToGridLoc} from "../helpers/crdCnvrt";

const getSqrColor = (isLightSqr, theme) => {
    if (isLightSqr) {
        return themes[theme].light_normal
    }
    else {
        return themes[theme].dark_normal;
    }
};


const sqrSizeDesktop = '1.7vw';
const sqrSizeMobile = '4.226238vw';

export const useStyles = makeStyles({
    square: props => ({
        ...rfToGridLoc(props.rf),
        '@media screen and (max-width: 960px)': {
            width: sqrSizeMobile,
            height: sqrSizeMobile,
        },
        '@media screen and (min-width: 960px)': {
            width: sqrSizeDesktop,
            height: sqrSizeDesktop,
        },
        backgroundColor: getSqrColor(props.isLightSqr, props.theme),
    }),
}, {index: 1});