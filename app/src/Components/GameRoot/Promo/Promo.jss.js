import {modal} from "../../helpers/modal.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {
    fontSize002,
    fontSize00301,
    fontSize01
} from "../../styles/fontSizes.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const buttonHeight = {
    wide: '1em',
    thin: '1.5em'
}

export const fontSizes = {
    wide: fontSize00301,
    thin: fontSize002,
}

// export const promoChoiceSize = availHeight() * 0.2;
export const promoChoicesSize = {
    wide: availHeight() * 0.2,
    thin: availHeight() * 0.16,
}

export const promoChoicesWidth = {
    wide: promoChoicesSize.wide * 4 + promoChoicesSize.wide * 0.2,
    thin: promoChoicesSize.thin * 2 + promoChoicesSize.thin * 0.16,
}

export const ok_button = (screenCase, theme) => ({
    fontSize: fontSizes[screenCase],
    width: promoChoicesWidth[screenCase],
    height: buttonHeight[screenCase],
    borderRadius: "0.8em",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: themes[theme].fill,
});

export const itemStyle = () => ({
    position: 'relative',
});

export const useStyles = makeStyles({
    modal: (props) => ({
        ...modal,
        zIndex: 7,
    }),
    promos: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }),
    menu: props => ({
        fontSize: fontSize01,
        '@media screen and (min-width: 960px)': {
            height: promoChoicesSize.wide * 1.085,
        },
        '@media screen and (max-width: 960px)': {
            height: promoChoicesSize.thin,
        },
        backgroundColor: themes[props.theme].odd_row,
        borderRadius: '0.1em'
    }),
    img_group: (props) => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 960px)': {
            height: promoChoicesSize.wide,
            width: promoChoicesWidth.wide,
        },
        '@media screen and (max-width: 960px)': {
            height: promoChoicesSize.thin,
            width: promoChoicesWidth.thin,
        },
    }),
    item_active: props => ({
        outline: 'none',
    }),
    ok_button: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: fontSizes.thin,
            width: promoChoicesWidth.thin,
            height: buttonHeight.thin,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSizes.wide,
            width: promoChoicesWidth.wide,
            height: buttonHeight.wide,
        },
        borderRadius: "0.8em",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: themes[props.theme].fill,
    }),
}, {index: 1});
