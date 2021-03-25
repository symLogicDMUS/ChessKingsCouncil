import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {fontSize0023} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    profile_top: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        '@media screen and (max-width: 960px)': {

        },
        '@media screen and (min-width: 960px)': {

        },
    }),
    profile_wb_modal: props => ({
        '@media screen and (max-width: 960px)': {

        },
        '@media screen and (min-width: 960px)': {

        },
        backgroundColor: themes[props.theme].fill,
        border: `0.075em solid ${themes[props.theme].outline}`,
    }),
    wb_container: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'auto',
        '@media screen and (max-width: 960px)': {

        },
        '@media screen and (min-width: 960px)': {

        },
    }),
    header: props => ({
        '@media screen and (max-width: 960px)': {

        },
        '@media screen and (min-width: 960px)': {

        },
    }),
    close_icon: props => ({
        fontSize: fontSize0023,
        '@media screen and (min-width: 960px)': {
            width: "1.5em",
            height: "1.5em",
        },
        '@media screen and (max-width: 960px)': {
            width: "0.5em",
            height: "0.5em",
        },
    }),
}, {index: 1});