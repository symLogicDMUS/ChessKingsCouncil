import {lighten, makeStyles} from "@material-ui/core/styles";
import {rfToGridLoc} from "../../helpers/crdCnvrt";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    square: props => ({
        ...rfToGridLoc(props.rf),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        width: '100%',
        height: '100%',
        backgroundColor: themes[props.theme].dark_in_range,
    }),
    text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3vw',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '3.5vw',
        },
        margin: 'auto',
        color: lighten(themes[props.theme].dark_in_range, 0.5),
    }),
}, {index: 1});