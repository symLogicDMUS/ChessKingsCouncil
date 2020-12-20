import { makeStyles } from "@material-ui/core/styles";
import {header, text} from "./PieceHeader.jss";

export const button = (fontSize) => ({
    fontSize: fontSize,
    width: '7.5em',
    height: '2em',
});

export const useStyles = makeStyles({
    header: props => ({
       ...header(props.fontSize, props.style, props.theme),
    }),
    piece_name: props => ({
        ...text(props.fontSize, props.theme),
    }),
});