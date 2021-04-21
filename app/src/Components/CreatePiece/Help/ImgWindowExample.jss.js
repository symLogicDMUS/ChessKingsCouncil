import {fontSize002, fontSizeW041} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    windows_area: props => ({
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px dashed red',
    }),
    img_window: props => ({
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].text}`,
        borderRadius: '0.5rem',
        '@media screen and (max-width: 960px)': {
            width: '40vw',
            height: '40vw',
        },
    }),
    img_label: props => ({
        fontSize: '1.5vw',
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        width: '2rem',
        height: '2rem',
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        fontSize: '2rem',
        marginLeft: '0.5rem',
        color: themes[props.theme].text,
    }),
}, {index: 1});