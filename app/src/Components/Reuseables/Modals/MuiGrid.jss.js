import {fontSize001685} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const close_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '1.5em',
    height: '1.5em',
});

export const button = (fontSize) => ({
    fontSize: fontSize,
    width: '7.5em',
    height: '2.25em',
    marginTop: '0.75em',
    marginBottom: '0.75em',
});

export const show_names_gen = (screenCase) => {
    switch (screenCase) {
        case 'mobile':
            return {
                fontSize: fontSize001685
            }
        default:
            return null;
    }
};

export const useStyles = makeStyles({
    window: props => ({
        '@media screen and (max-width: 1040px)': {
            width: '100vw',
            height: '100vh',
        },
        '@media screen and (min-width: 1040px)': {
            width: '90vw',
            height: '90vh',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 6,
        fontSize: fontSize001685,
        borderRadius: '0.75em',
        backgroundColor: themes[props.theme].fill,
        ...props.rootStyle,
    }),
    item_choices: props => ({
        '@media screen and (max-width: 1040px)': {
            width: '95vw',
            height: '80vh',
            padding: '2.5vw',
            paddingLeft: '3.5vw',
        },
        '@media screen and (min-width: 1040px)': {
            width: '85.5vw',
            height: '65vh',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        borderRadius: '0.015em',
        border: `0.002em solid ${themes[props.theme].outline}`,
        backgroundColor: themes[props.theme].modal_fill,
    }),
    bottom_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 1040px)': {
            width: '95vw',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '@media screen and (min-width: 1040px)': {
            width: '85.5vw',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        flexGrow: 3,
    }),
    ok_button: props => ({
        '@media screen and (min-width: 1040px)': {
            marginRight: '2vw'
        },
        '@media screen and (max-width: 1040px)': {
            marginRight: '1.25vw',
        },
    }),
}, {index: 1});
