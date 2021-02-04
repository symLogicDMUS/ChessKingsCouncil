import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./PieceHeader.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes, widths} from "../PieceProfiles.jss";

export const getButtonMargin = (screenCase) => {
    switch (screenCase) {
        case "desktop":
            return "0.5em";
        case "mobile":
            return "0.9em";
    }
};

export const button = (fontSize, theme) => ({
    fontSize: fontSize,
    '@media screen and (min-width: 768px)': {
        width: '6.1em',
        height: '2em',
    },
    '@media screen and (max-width: 767px)': {
        width: '6.9em',
        height: '1.9em',
        maxWidth: '100em',
    },
    border: `0.05em solid ${themes[theme].outline}`
});

export const ld_header_style = (fontSize, screenCase) => ({
    justifyContent: "right",
    marginLeft: '3.25%',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    width: screenCase === 'desktop' ? '93.25%' : '94%'
});

export const useStyles = makeStyles({
    header: props => ({
        ...header(props.style, props.theme),
    }),
    piece_name: props => ({
        ...text(props.theme),
    }),
    buttons_outer_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 3,
    }),
    buttons_inner_flexbox: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
            marginRight: '0.5em'
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
});