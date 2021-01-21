import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";
import {imgFillDiv} from "./imgFillDiv.jss";

export const img_container = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '10em',
    height: '10em',
    margin: '1em',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.25em',
    border: `0.08em solid ${themes[theme].outline}`,
    backgroundColor: themes[theme].fill,
});

export const useStyles = makeStyles({
    img_choice: props => ({
       display: 'flex',
       flexDirection: 'column',
       flexWrap: 'nowrap',
       alignItems: 'center',
       justifyContent: 'center',
    }),
    normal: props => ({
        ...img_container(props.fontSize, props.theme),
    }),
    selected: props => ({
        ...img_container(props.fontSize, props.theme),
        boxShadow: "0 0 0.5em white",
    }),
    img: props => ({
        // ...imgFillDiv,
        fontSize: props.fontSize,
        width: '9em',
        height: '9em',
    }),
    img_name: props => ({
        fontSize: props.fontSize,
        width: '10em',
        position: 'relative',
        top: '-1em',
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
});
