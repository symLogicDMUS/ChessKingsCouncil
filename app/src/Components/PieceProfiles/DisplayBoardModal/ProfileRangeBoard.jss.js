import { makeStyles } from "@material-ui/core/styles";
import {fontSizes, widths as boardSize} from "../PieceProfiles.jss";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    modal_board: props => ({
        ...board(props.fontSize),
    }),
    profile_board: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        lineHeight: '0',
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: boardSize.desktop,
            height: boardSize.desktop
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: boardSize.mobile,
            height: boardSize.mobile
        },
        outline: `0.05em solid ${themes[props.theme].outline}`
    }),
});