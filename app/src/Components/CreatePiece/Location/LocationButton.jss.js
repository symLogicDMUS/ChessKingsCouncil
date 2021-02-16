import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles"
import {fontSize0022, fontSize0035, fontSize0036} from "../../styles/fontSizes.jss";
import {availHeight, innerHeight} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {fontSizes} from "../Board/CreatePieceBoard.jss";
import {buttonSize} from "./Location.jss";

const buttonOrderMobile = {
    d5: 1,
    e5: 2,
    d4: 3,
    e4: 4,
}


const location_button = (theme, rf) => ({
    '@media (max-aspect-ratio: 6/10)': {
        order : buttonOrderMobile[rf],
        width: buttonSize.ipx,
        height: buttonSize.ipx,
        fontSize: buttonSize.ipx * 0.3,
        margin: 'auto',
        borderRadius: '0.05em',
        border: `0.01em solid ${themes[theme].outline}`,
    },
    "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
        width: buttonSize.mobile,
        height: buttonSize.mobile,
        fontSize: buttonSize.mobile * 0.3,
        margin: 'auto',
        borderRadius: '0.05em',
        border: `0.01em solid ${themes[theme].outline}`,
    },
    '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
        order : buttonOrderMobile[rf],
        width: buttonSize.ipad,
        height: buttonSize.ipad,
        fontSize: buttonSize.ipad * 0.3,
        margin: 'auto',
        borderRadius: '0.05em',
        border: `0.01em solid ${themes[theme].outline}`,
    },
    '@media (min-aspect-ratio: 1001/1000)': {
        fontSize: fontSize0022,
        margin: 'unset',
        width: '3.5em',
        height: '3.5em',
        border: `0.04em solid ${themes[theme].outline}`,
    },
    minWidth: 0,
    minHeight: 0,
    color: themes[theme].text,
    borderRadius: '0.2em',
});

export const useStyles = makeStyles({
    button_normal: (props) => ({
        background: '#414141',
        ...location_button(props.theme, props.rf),
    }),
    button_selected: (props) => ({
        ...location_button(props.theme, props.rf),
        background: '#4b6eaf',
        '&:hover': {
            background: '#4b6eaf',
        },
    }),
});