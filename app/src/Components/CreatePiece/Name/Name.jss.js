import {darken} from "@material-ui/core/styles";
import {marginBottom} from "../CreatePiece.jss";
import {themes} from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

const padding = 16;

export const useStyles = makeStyles({
    name_window: props => ({
        '--widthA': '100vw',
        '--widthB': `calc(var(--widthA) - ${miniVariantIconsColumnWidth}px)`,
        width: 'var(--widthB)',
        paddingLeft: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingTop: padding + 3.5,
        position: 'fixed',
        top: 50,
        left: 0,
    }),
    name: props => ({
        '@media screen and (min-width: 960px)': {
            marginBottom: marginBottom,
        },

        /*root*/
        "& .MuiInputLabel-root": {
            color: darken(themes[props.theme].text, 0.2),
        },
        /*root when variant is outline*/
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },

        /*hover*/
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },
        "&:hover .MuiInputLabel-root": {
            color: themes[props.theme].text,
        },

        /*focused*/
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].text,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].text,
        },
    }),
    close_icon: props => ({
       color: themes[props.theme].text,
    }),
}, {index: 1});