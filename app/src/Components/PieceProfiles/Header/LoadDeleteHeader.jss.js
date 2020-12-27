import { makeStyles } from "@material-ui/core/styles";
import {header, text} from "./PieceHeader.jss";
import {themes} from "../../styles/themes.jss";

export const button = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '6.1em',
    height: '2em',
    border: `0.05em solid ${themes[theme].outline}`
});

export const useStyles = makeStyles({
    header: props => ({
       ...header(props.fontSize, props.style, props.theme),
    }),
    piece_name: props => ({
        ...text(props.fontSize*1.25, props.theme),
    }),
    buttons_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 3,
    }),
});