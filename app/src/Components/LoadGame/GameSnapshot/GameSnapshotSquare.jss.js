/** see /Reusables/Square.jss.js */
import { themes } from "../../styles/themes/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import { rfToGridLoc } from "../../helpers/crdCnvrt";

const getSqrColor = (isLightSqr, theme) => {
    let adjustedTheme;
    if (theme === "tan") {
        adjustedTheme = "tan_dark";
    } else {
        adjustedTheme = theme;
    }

    if (isLightSqr) {
        return themes[adjustedTheme].light_normal;
    } else {
        return themes[adjustedTheme].dark_normal;
    }
};

const sqrSizeLg = "1.7vw";
const sqrSizeSm = "4.226238vw";

export const useStyles = makeStyles(
    {
        square: (props) => ({
            ...rfToGridLoc(props.rf),
            "@media screen and (max-width: 960px)": {
                width: sqrSizeSm,
                height: sqrSizeSm,
            },
            "@media screen and (min-width: 960px)": {
                width: sqrSizeLg,
                height: sqrSizeLg,
            },
            backgroundColor: getSqrColor(props.isLightSqr, props.theme),
        }),
    },
    { index: 1 }
);
