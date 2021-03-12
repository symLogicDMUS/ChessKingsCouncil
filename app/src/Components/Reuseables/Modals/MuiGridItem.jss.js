import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";
import {itemChoicesWindowWidth} from "./MuiGrid.jss";

const itemChoicesWindowHalfMargin = (screenCase) => {
    return itemChoicesWindowWidth(screenCase) * 0.025
};

/**The sum of the widths to the left, right, and between, image items */
export const itemChoicesWindowPadding = (screenCase) => {
    return itemChoicesWindowHalfMargin(screenCase) * 4
}

export const item_container = (theme, isSelected) => ({
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontSize002,
    borderRadius: '0.3em',
    backgroundColor: isSelected ? themes[theme].odd_row : themes[theme].even_row,
    '@media screen and (max-device-width: 1040px)': {
        width: (itemChoicesWindowWidth('mobile') - itemChoicesWindowPadding('mobile'))*0.5,
        height: (itemChoicesWindowWidth('mobile') - itemChoicesWindowPadding('mobile'))*0.5,
    },
    '@media screen and (min-device-width: 1040px)': {
        width: (itemChoicesWindowWidth('desktop') - itemChoicesWindowPadding('desktop'))*0.2,
        height: (itemChoicesWindowWidth('desktop') - itemChoicesWindowPadding('desktop'))*0.2,
    },
});

export const useStyles = makeStyles({
    item_choice: props => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-device-width: 1040px)': {
            margin: itemChoicesWindowHalfMargin('mobile'),
            width: (itemChoicesWindowWidth('mobile') - itemChoicesWindowPadding('mobile'))*0.5,
        },
        '@media screen and (min-device-width: 1040px)': {
            margin: itemChoicesWindowHalfMargin('desktop'),
            width: (itemChoicesWindowWidth('desktop') - itemChoicesWindowPadding('desktop'))*0.2,
        },
    }),
    normal: props => ({
        ...item_container(props.theme, false),
        border: `0.018em solid ${themes[props.theme].outline}`,
    }),
    selected: props => ({
        ...item_container(props.theme, true),
        border: `0.018em solid ${themes[props.theme].text_alt}`
    }),
    item_name: props => ({
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        fontSize: fontSize002,
        width: '99%',
    }),
    tooltip: props => ({
        fontSize: fontSize001725
    }),
    item: props => ({
        '@media screen and (max-device-width: 1040px)': {
            margin: itemChoicesWindowHalfMargin('mobile'),
            width: (itemChoicesWindowWidth('mobile') - itemChoicesWindowPadding('mobile'))*0.5,
        },
        '@media screen and (min-device-width: 1040px)': {
            margin: itemChoicesWindowHalfMargin('desktop'),
            width: (itemChoicesWindowWidth('desktop') - itemChoicesWindowPadding('desktop'))*0.2,
        },
    }),
    img: props => ({
        width: '95%',
        height: '95%',
    }),
}, {index: 1});
