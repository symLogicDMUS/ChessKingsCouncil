/** see /Reusables/Square.jss.js */
import {themes} from "../styles/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import {itemChoicesWindowWidth} from "../Reuseables/Modals/MuiGrid.jss";
import {itemChoicesWindowPadding} from "../Reuseables/Modals/MuiGridItem.jss";
import {rfToGridLoc} from "../helpers/crdCnvrt";

const getSqrColor = (isLightSqr, theme) => {
    if (isLightSqr) {
        return themes[theme].light_normal
    }
    else {
        return themes[theme].dark_normal;
    }
};

const getSqrSize = (screenCase) => {
    let itemFraction;
    if (screenCase === 'desktop') itemFraction = 0.2;
    else itemFraction = 0.5;
    return (itemChoicesWindowWidth(screenCase) - itemChoicesWindowPadding(screenCase)) * itemFraction * 0.11;
};

export const useStyles = makeStyles({
    square: props => ({
        ...rfToGridLoc(props.rf),
        '@media screen and (max-device-width: 1040px)': {
            width: getSqrSize('mobile'),
            height: getSqrSize('mobile'),
        },
        '@media screen and (min-device-width: 1040px)': {
            width: getSqrSize('desktop'),
            height: getSqrSize('desktop'),
        },
        backgroundColor: getSqrColor(props.isLightSqr, props.theme),
    }),
}, {index: 1});