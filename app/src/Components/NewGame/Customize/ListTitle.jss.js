import {text} from "../../PieceProfiles/Header/ProfileHeader.jss";
import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {drawerItemWidth} from "./Customize.jss";
import {fontSizes} from "../../PieceProfiles/PieceProfiles.jss";

export const useStyles = makeStyles({
    list_title: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            width: drawerItemWidth,
        },
        '@media (max-aspect-ratio: 1/1)': {
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