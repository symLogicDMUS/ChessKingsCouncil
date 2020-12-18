import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../Reuseables/imgFillDiv.jss";

export const useStyles = makeStyles({
    profile_wb: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'space-evenly',
    }),
    avatar_section: {

    },
    avatar_title: {

    },
    avatar_window: {

    },
    range_header: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        width: '100%'
    }),
    /*Parts of the range table's header: */
    range_title: props => ({
        fontSize: props.fontSize,
        justifySelf: 'center',
    }),
    range_expand_widget: props => ({
        fontSize: props.fontSize,
        justifySelf: 'right',
    }),
})