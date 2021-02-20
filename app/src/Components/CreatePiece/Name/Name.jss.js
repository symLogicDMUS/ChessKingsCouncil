import {tool, tool_flexbox} from "../CreatePiece.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize002, fontSize0024} from "../../styles/fontSizes.jss";
import {boardSizes} from "../../Reuseables/Board.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize002,
    ipx: fontSize002,
    ipad: fontSize0024,
}

export const textFieldStyle = (screenCase) => ({
    text: {
        normal: {fontSize: fontSizes[screenCase]},
        hover: {fontSize: fontSizes[screenCase]},
        focused: {fontSize: fontSizes[screenCase]}
    },
    root: {
        normal: {fontSize: fontSizes[screenCase]},
        hover: {fontSize: fontSizes[screenCase]},
        focused: {fontSize: fontSizes[screenCase]}
    }
})

export const genStyle = () => ({
    width: '100%'
});

export const getLabel = (screenCase) => {
    switch (screenCase) {
        case 'short':
            return 'Name';
        default:
            return "Piece Name";
    }
};

export const getPlaceholder = (screenCase) => {
    switch (screenCase) {
        case 'short':
            return '';
        default:
            return 'Enter name of piece...';
    }
};

export const getStyleOverride = (screenCase) => {
    switch (screenCase) {
        case 'short':
            return {
                "& .MuiOutlinedInput-root":{
                    width: '22.5vw'
                }
            };
        default:
            return null;
    }
};

export const useStyles = makeStyles({
    name: props => ({
        ...tool(props.theme),
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            position: 'relative',
            left: '-20%',
            height: boardSizes.short*0.68,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...tool_flexbox,
            marginBottom: '3vh',
        },
    }),
});