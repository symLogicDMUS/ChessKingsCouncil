import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../Reuseables/imgFillDiv.jss";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    profile_wb: props => ({
        fontSize: props.fontSize,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        // border: '1px dashed hotpink',
    }),
    range_header: props => ({
        fontSize: props.fontSize*0.85,
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '30.75em',
        height: '2em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`
    }),
    box: props => ({
        flexGrow: 100,
    }),
    /*Parts of the range table's header: */
    range_title: props => ({
        fontSize: props.fontSize,
        textAlign: 'center',
        paddingLeft: '2em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    range_expand_widget: props => ({
        fontSize: props.fontSize,
        width: '1.5em',
        height: '1.5em',
        color: themes[props.theme].text,
    }),
})