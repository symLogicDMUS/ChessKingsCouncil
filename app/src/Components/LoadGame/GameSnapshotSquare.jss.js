/** see /Reusables/Square.jss.js */
import {themes} from "../styles/themes/themes.jss";
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


const sqrSizewide = '1.7vw';
const sqrSizethin = '4.226238vw';

export const useStyles = makeStyles({
    square: props => ({
        ...rfToGridLoc(props.rf),
        '@media screen and (max-width: 960px)': {
            width: sqrSizethin,
            height: sqrSizethin,
        },
        '@media screen and (min-width: 960px)': {
            width: sqrSizewide,
            height: sqrSizewide,
        },
        backgroundColor: getSqrColor(props.isLightSqr, props.theme),
    }),
}, {index: 1});