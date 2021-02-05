import {text} from "../../PieceProfiles/Header/PieceHeader.jss";
import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {drawerItemWidth} from "./Customize.jss";
import {fontSizes} from "../../PieceProfiles/PieceProfiles.jss";

export const useStyles = makeStyles({
    list_title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: drawerItemWidth,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: '100%',
        },
        textAlign: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
});