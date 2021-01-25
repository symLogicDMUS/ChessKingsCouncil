import {makeStyles} from "@material-ui/core/styles";
import {fontSizes, widths as avatarSize, widths, widths as boardSize} from "../PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";

export const heights = {
    desktop: 13.03,
    mobile: 9,
}

export const sqrSize = {
    desktop: '1.44375em',
    mobile: '0.9375em',
}

export const useStyles = makeStyles({
    profile_range: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            height: `${heights.desktop}`,
            width: avatarSize.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            height: `${heights.mobile}`,
            width: avatarSize.mobile,
            marginTop: '-0.5em'
        },
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    modal: {
        ...modal,
        zIndex: 5,
    },
    window: props => ({
        cursor: 'grab',
        fontSize: props.fontSize,
        width: '8.09em',
        height: '9.5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.04em solid ${themes[props.theme].outline}`
    }),
    top_bar: props => ({
        fontSize: props.fontSize,
        width: '8em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    title: props => ({
        fontSize: props.fontSize * 0.5,
        color: themes[props.theme].text,
        lineHeight: '1.5em',
        paddingLeft: '0.25em',
    }),
    close: props => ({
        width: '1em',
        height: '1em',
        color: themes[props.theme].text,
    }),
});