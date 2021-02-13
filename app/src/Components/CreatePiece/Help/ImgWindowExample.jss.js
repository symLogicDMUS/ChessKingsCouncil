import {fontSize002, fontSizeW041} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const img_window = (theme) => ({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: themes[theme].fill,
    border: `0.05em solid ${themes[theme].outline}`,
});

export const text = (theme) => ({
    fontSize: fontSize002,
    color: themes[theme].text,
    fontFamily: 'Roboto-Light, Roboto',
});

export const useStyles = makeStyles({
    flexbox: props => ({
        width: '95%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        '@media (min-aspect-ratio: 1001/1000)': {
            justifyContent: 'center',
        },
        '@media (max-aspect-ratio: 1/1)': {
            justifyContent: 'space-between',
        },
    }),
    img_window1: props => ({
        ...img_window(props.theme),
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: "9em",
            height: "9em",
            marginRight: '1vw',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW041,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: "0.0075em solid #2b2b2b",
        },
    }),
    img_window2: props => ({
        ...img_window(props.theme),
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW041,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: "0.0075em solid #2b2b2b",
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: "9em",
            height: "9em",
            marginLeft: '1vw',
        },
    }),
    img_label: props => ({
        fontSize: fontSize002,
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        fontSize: fontSize002,
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        ...text(props.theme),
        margin: '0.75em',
    }),
    img_text: props => ({
        ...text(props.theme),
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
});