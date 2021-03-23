import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";

export const box = {
    width: '14.333vw',
    minHeight: 'unset',
    maxHeight: 'unset',
    transform: 'none',
}
export const sqr = {
    height: '14.333vw'
}
export const header = {
    height: '2.5vw',
    marginBottom: '1.5vh',
}

export const useStyles = makeStyles({
    flash_box1: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            ...sqr,
            marginRight: '0.875vw',
            backgroundColor: themes[props.theme].odd_row,
        },
    }),
    flash_box_header1: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            ...header,
            marginRight: '0.875vw',
            backgroundColor: themes[props.theme].odd_row,
        },
    }),
    flash_box2: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            ...sqr,
            marginLeft: '0.875vw',
            marginRight: '0.875vw',
            backgroundColor: themes[props.theme].odd_row,
        },
    }),
    flash_box_header2: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            ...header,
            marginLeft: '0.875vw',
            marginRight: '0.875vw',
            backgroundColor: themes[props.theme].odd_row,
        },
    }),
    flash_box3: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            ...sqr,
            marginLeft: '0.875vw',
            backgroundColor: themes[props.theme].odd_row,
        },
    }),
    flash_box_header3: props => ({
        "& .MuiSkeleton-text": {
            ...box,
            ...header,
            marginLeft: '0.875vw',
            backgroundColor: themes[props.theme].odd_row,
        },
    }),
}, {index: 1});