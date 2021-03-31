import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    }),
    /* screens thinner than 960px: */
    options_window: props => ({
        zIndex: 10,
        margin: 'auto',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
    }),
    options_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',

    }),
    close_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    close: props => ({
       width: '1vw',
       height: '1vw',
    }),
    close_icon: props => ({
        width: '2vw',
        height: '2vw',
    }),
    smOption: props => ({
        marinTop: '1vw',
        marginLeft: '2vw',
        marginRight: '2vw',
        marginBottom: '2vw',
    }),
}, {index: 1});
