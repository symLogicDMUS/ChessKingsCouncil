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
    desktop: '1em',
    mobile: '1.5em'
}

export const fontSizes = {
    desktop: fontSize00301,
    mobile: fontSize002,
}

// export const promoChoiceSize = availHeight() * 0.2;
export const promoChoicesSize = {
    desktop: availHeight() * 0.2,
    mobile: availHeight() * 0.16,
}

export const promoChoicesWidth = {
    desktop: promoChoicesSize.desktop * 4 + promoChoicesSize.desktop * 0.2,
    mobile: promoChoicesSize.mobile * 2 + promoChoicesSize.mobile * 0.16,
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
        '@media screen and (min-width: 1040px)': {
            height: promoChoicesSize.desktop * 1.085,
        },
        '@media screen and (max-width: 1040px)': {
            height: promoChoicesSize.mobile,
        },
        backgroundColor: themes[props.theme].odd_row,
        borderRadius: '0.1em'
    }),
    img_group: (props) => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 1040px)': {
            height: promoChoicesSize.desktop,
            width: promoChoicesWidth.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            height: promoChoicesSize.mobile,
            width: promoChoicesWidth.mobile,
        },
    }),
    item_active: props => ({
        outline: 'none',
    }),
}, {index: 1});
