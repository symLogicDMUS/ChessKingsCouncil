import {makeStyles} from "@material-ui/core/styles"
import {innerHeight, innerWidth} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";
import {
    fontSize012,
    fontSize0016,
    fontSize0018,
    fontSizeW018,
    fontSize002,
    fontSize001725,
    fontSizeW015,
} from "../styles/fontSizes.jss";
import {themes} from "../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize012,
    mobile: fontSizeW015,
    ipx: fontSizeW018,
    ipad: fontSize012,
}

export const text_field_style = (fontSize) => ({
    fontSize: fontSize,
    height: '1em',
});
export const textFieldStyle = (fontSize) => ({
    text: {
        normal: {
            ...text_field_style(fontSize),
        },
        hover: {
            ...text_field_style(fontSize),

        },
        focused: {
            ...text_field_style(fontSize),
        },
    },
    root: {
        normal: {
            ...text_field_style(fontSize),
        },
        hover: {
            ...text_field_style(fontSize),
        },
        focused: {
            ...text_field_style(fontSize),
        },
    }
})

export const textFieldGenStyle = {
    width: '100%',
}

export const dropdownGenStyle = {
    width: '58%',
}

export const useStyles = makeStyles({
    new_game: props => ({
        width: '100%',
        height: innerHeight() *0.85,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "@media (max-aspect-ratio: 1/1)": {
            height: innerHeight() - (appBarHeight + innerHeight() * 0.1),
            marginTop: '7.5vh',
            justifyContent: 'space-between',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            height: '90vh',
            justifyContent: 'space-between',
        },
    }),
    item: props => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-aspect-ratio: 1/1)': {
            width: innerWidth() * 0.7,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: innerWidth() * 0.3,
        },
    }),
    title: props => ({
        width: '100%',
        marginBottom: '1.5vh',
    }),
    game_types: props => ({
       width: '75%',
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'nowrap',
       alignItems: 'flex-start',
       justifyContent: 'center',
    }),
    game_types_divider: props => ({
       width: '5%',
    }),
    player_type: props => ({
        fontSize: fontSize0018,
    }),
    play_button: props => ({
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSize001725,
            margin: '1em',
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            fontSize: fontSize0018,
            margin: '1.5em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
            margin: '1em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize0016,
            margin: '1.5em',
        },
        ...dropdownGenStyle,
    }),
});
