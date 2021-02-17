import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, widths} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    header: props => ({
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
        width: '100%',
        height: '1.5em',
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
});