import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board/Board.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "./BoardTool.jss";

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        outline: `0.04em solid ${themes[props.theme].outline}`
    }),
}, {index: 1})