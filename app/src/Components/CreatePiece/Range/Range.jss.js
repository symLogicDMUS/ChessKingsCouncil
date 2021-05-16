import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes/themes.jss";
import {lgScreenToolWidth, marginBottom} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    range_tool: props => ({
        width: lgScreenToolWidth,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: marginBottom,
    }),
    scroll_table_list_item: props => ({
        height: '1.7vw',
        width: "10.625vw",
        borderLeft: `0.025em solid ${themes[props.theme].outline}`,
        borderRight: `0.025em solid ${themes[props.theme].outline}`,
        paddingLeft: '0.5rem',
    }),
    scroll_table_text: props => ({
        fontSize: '0.9vw',
    }),
    scroll_table_arrow_button: props => ({
        height: '1.0625vw',
        width: "10.625vw",
        minHeight: 'unset',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    top_arrow_button: props => ({
       borderTopLeftRadius: '0.2rem',
       borderTopRightRadius: '0.2rem',
       borderBottomLeftRadius: 0,
       borderBottomRightRadius: 0,
    }),
    bottom_arrow_button: props => ({
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: '0.2rem',
        borderBottomRightRadius: '0.2rem',
    }),

}, {index: 1});

