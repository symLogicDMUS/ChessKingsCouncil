import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    location_tool: (props) => ({
        '@media screen and (max-width: 1040px)': {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'no-wrap',
        },
        '@media screen and (min-width: 1040px)': {
            backgroundColor: themes[props.theme].fill,
            width: '100%',
            marginBottom: '3vh',
        },
    }),
    box: props => ({
        fontSize: fontSize002,
        '@media screen and (max-width: 1040px)': {
            width: '100em',
            height: '5em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
}, {index: 1});