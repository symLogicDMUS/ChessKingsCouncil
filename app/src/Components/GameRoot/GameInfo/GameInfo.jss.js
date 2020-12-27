import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    game_info: props => ({
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        marginBottom: '5%',
        marginLeft: '5%',
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        // borderRadius: '0.25em',
        // border: `0.05em solid ${themes[props.theme].outline}`,

    }),
    cell: props => ({
        fontSize: props.fontSize,
        width: '50%',
        height: '1.5em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        // paddingLeft: '2.5%',
    }),
});