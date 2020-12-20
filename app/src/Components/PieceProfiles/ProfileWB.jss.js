import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../Reuseables/imgFillDiv.jss";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    profile_wb: props => ({
        fontSize: props.fontSize,
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'space-evenly',
        marginBottom: '0.75em',
        marginTop: '0.75em',
    }),
    range_header: props => ({
        fontSize: props.fontSize,
        width: '30em',
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '1.5em',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    box: props => ({
        flexGrow: 100,
    }),
    /*Parts of the range table's header: */
    range_title: props => ({
        fontSize: '0.85em',
        textAlign: 'center',
        paddingLeft: '2em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    range_expand_widget: props => ({
        fontSize: '1em',
        width: '1.5em',
        height: '1.5em',
        color: themes[props.theme].text,
    }),
})