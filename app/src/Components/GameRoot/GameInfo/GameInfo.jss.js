import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {fontSize002, fontSize0024} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    game_info: props => ({
        fontSize: fontSize002,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (min-width: 768px)': {
            width: drawerItemWidth,
            marginBottom: '1em',
            marginLeft: '1em',
            alignItems: 'flex-end',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            height: '50%',
            alignItems: 'center',
        },
    }),
    cell: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0024,
        },
        width: '50%',
        height: '1.5em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
});