import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {
    marginLg,
    marginMd,
    headerWidthLg,
    sqrItemSizeLg,
    sqrItemSizeMd,
    sqrItemSizeSm,
    sqrItemHeaderHeightLg,
} from "./constants.jss";

export const box = {
    minHeight: 'unset',
    maxHeight: 'unset',
    transform: 'none',
}

export const useStyles = makeStyles({
    profile_wb: props => ({
        zIndex: 'inherit',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 960px)': {
            flexDirection: 'column',
        },
        '@media screen and (min-width: 960px)': {
            flexDirection: 'row',
        },
        "& .MuiSkeleton-text": {
            ...box,
            '@media screen and (min-width: 960px)': {
                width: headerWidthLg,
                marginTop: marginLg,
                marginBottom: marginLg,
            },
        },
    }),
    profile_w: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            '@media screen and (max-width: 960px)': {
                marginLeft: '5vw',
                marginRight: '2.5vw',
            },
        },
    }),
    profile_b: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            '@media screen and (max-width: 960px)': {
                marginLeft: '2.5vw',
                marginRight: 'auto'
            },
        },
    }),
    sqr_item_area: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            display: 'flex',
            flexDirection: 'column',
        },
        '@media screen and (max-width: 960px)': {
            marginBottom: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            marginBottom: marginLg,
        },
    }),
    sqr_item: props => ({
        "& .MuiSkeleton-text": {
            '@media screen and (max-width: 600px)': {
                width: sqrItemSizeSm,
                height: sqrItemSizeSm,
            },
            '@media screen and (min-width: 600px) and (max-width: 960px)': {
                width: sqrItemSizeMd,
                height: sqrItemSizeMd,
            },
            '@media screen and (min-width: 960px)': {
                width: sqrItemSizeLg,
                height: sqrItemSizeLg,
            },
        },
    }),
    sqr_item_header: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
            '@media screen and (max-width: 600px)': {
                width: sqrItemSizeSm,
                height: '6.5vw',
            },
            '@media screen and (min-width: 600px) and (max-width: 960px)': {
                width: sqrItemSizeMd,
                height: '7.5vw',
            },
            '@media screen and (min-width: 960px)': {
                width: sqrItemSizeLg,
                height: sqrItemHeaderHeightLg,
            },
        },
    }),
    sqr_item_title: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            '@media screen and (max-width: 600px)': {
                fontSize: '0.75rem',
            },
            '@media screen and (min-width: 600px) and (max-width: 960px)': {
                fontSize: '2.5vw',
            },
            '@media screen and (min-width: 960px)': {
                fontSize: '1.2vw',
            },
        },
    }),
    item1: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            '@media screen and (max-width: 600px)': {
                marginTop: '1.5vw',
                marginBottom: '1.5vw',
            },
            '@media screen and (min-width: 600px) and (max-width: 960px)': {
                marginTop: marginMd,
                marginBottom: marginMd,
            },
            '@media screen and (min-width: 960px)': {
                marginRight: marginLg,
            },
        },
    }),
    item2: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            '@media screen and (max-width: 600px)': {
                marginTop: '1.5vw',
                marginBottom: '1.5vw',
            },
            '@media screen and (min-width: 600px) and (max-width: 960px)': {
                marginTop: marginMd,
                marginBottom: marginMd,
            },
            '@media screen and (min-width: 960px)': {
                marginLeft: marginLg,
                marginRight: marginLg,
            },
        },
    }),
    item3: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            '@media screen and (max-width: 600px)': {
                marginTop: '1.5vw',
                marginBottom: '1.5vw',
            },
            '@media screen and (min-width: 600px) and (max-width: 960px)': {
                marginTop: marginMd,
                marginBottom: marginMd,
            },
            '@media screen and (min-width: 960px)': {
                marginLeft: marginLg,
            },
        },
    }),
    boxColor: props => ({
        backgroundColor: themes[props.theme].odd_row,
    }),
}, {index: 1});