import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    game_info: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (min-width: 768px)': {
            width: '90%',
            marginBottom: '5%',
            marginLeft: '5%',
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
            fontSize: props.fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 1.2,
        },
        width: '50%',
        height: '1.5em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
});