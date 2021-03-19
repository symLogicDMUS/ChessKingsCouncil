import {makeStyles} from "@material-ui/core/styles"
import {appBarHeight} from "../Reuseables/Drawers/PersistentDrawer.jss";
import {viewHeight, viewWidth} from "../helpers/windowMeasurments";
import {fontSize012, fontSize0018, fontSizeW015,} from "../styles/fontSizes.jss";
import {themes} from "../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize012,
    mobile: fontSizeW015,
}

export const dropdownGenStyle = () => ({
    width: '58%'
});

export const inputStyle = (theme) => ({
    root: {
        normal: {color: themes[theme].text_alt3},
        hover: {color: themes[theme].text_alt3},
        focused: {color: themes[theme].text_alt3},
    },
    outline: {
        normal: {color: themes[theme].text_alt3},
        hover: {color: themes[theme].text_alt3},
        focused: {color: themes[theme].text_alt3},
    },
    text: {
        normal: {color: themes[theme].text_alt3},
        hover: {color: themes[theme].text_alt3},
        focused: {color: themes[theme].text_alt3},

    },
})

export const useStyles = makeStyles({
    new_game: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        /*media query for phones and tablets (generalized)*/
        '@media screen and (max-width: 1040px)': {
            height: viewHeight() - appBarHeight,
        },
        '@media screen and (min-width: 1040px)': {
            height: '90vh',
        },
    }),
    item: props => ({
        display: 'flex',
        alignItems: 'center',
        /*phones/tablets(generalized)*/
        "@media screen and (max-width:  1040px)":{
            width: viewWidth() * 0.7,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        /*desktop*/
        '@media screen and (min-width: 1040px)': {
            width: viewWidth() * 0.3,
            flexDirection: 'column',
            justifyContent: 'center',
        },
    }),
    title: props => ({
        width: '100%',
        marginBottom: '1.5vh',
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '75%',

    }),
    game_types_divider: props => ({
        width: '5%',
    }),
    player_type: props => ({
        fontSize: fontSize0018,
    }),
}, {index: 1});
