import {makeStyles} from "@material-ui/core/styles";
import {fontSize0025, fontSize00301, fontSize0040} from "../../styles/fontSizes.jss";
import {board} from "../../Reuseables/Board.jss";
import {themes} from "../../styles/themes.jss";
import {heights} from "../PieceProfiles.jss";

export const fontSizes = {
    desktop: fontSize0040,
    mobile: fontSize00301,
}
export const close_style = () => ({
    fontSize: fontSize0025,
    height: '1em',
    width: '1em',
});
export const useStyles = makeStyles({
    partial_range_board: props => ({
        '@media screen and (min-width: 768px)': {
            ...board(fontSizes.desktop)
        },
        '@media screen and (max-width: 767px)': {
            ...board(fontSizes.mobile)
        },
    }),
    top: props => ({
        fontSize: fontSize0025,
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    title: props => ({
        fontSize: fontSize0025,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginRight: '2em'
    }),
});