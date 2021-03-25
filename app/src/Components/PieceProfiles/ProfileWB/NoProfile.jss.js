import {makeStyles} from "@material-ui/core/styles";
import {fontSize0023} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    profile_top: props => ({
        '@media screen and (min-width: 960px)': {

        },
        '@media screen and (max-width: 960px)': {

        },
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    profile_flexbox: props => ({
        zIndex: 5,
        position: 'fixed',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // '@media screen and (min-width: 960px)': {
        //     fontSize: fontSizes.wide,
        //     borderRadius: '0.25em',
        //     width: `${profileWidth.wide}em`,
        //     height: `${profileHeight.wide * 0.18}em`,
        //     marginLeft: `${-profileWidth.wide * 0.5}em`,
        //     marginTop: `${-profileHeight.wide * 0.18 * 0.5}em`,
        // },
        // '@media screen and (max-width: 960px)': {
        //     fontSize: fontSizes.thin,
        //     borderRadius: '0.5em',
        //     width: `${profileWidth.thin * 4}em`,
        //     height: `${profileHeight.thin * 0.3}em`,
        //     marginLeft: `${-profileWidth.thin * 2}em`,
        //     marginTop: `${-profileHeight.thin * 0.15}em`,
        // },
        backgroundColor: themes[props.theme].fill,
        border: `0.035em solid ${themes[props.theme].outline}`,
    }),
    content: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }),
    caption: props => ({
        '@media screen and (min-width: 960px)': {

        },
        '@media screen and (max-width: 960px)': {

        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '1em',
    }),
    inline_piece: props => ({
        '@media screen and (min-width: 960px)': {

        },
        '@media screen and (max-width: 960px)': {

        },
        width: '1.1em',
        height: '1.1em',
        marginLeft: '0.25em',
    }),
    close_icon: props => ({
        fontSize: fontSize0023,
        '@media screen and (min-width: 960px)': {
            width: "0.5em",
            height: "0.5em",
        },
        '@media screen and (max-width: 960px)': {
            width: "0.5em",
            height: "0.5em",
        },
    }),
}, {index: 1});
