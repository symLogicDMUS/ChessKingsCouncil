import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../../helpers/windowMeasurments";
import {fontSize002} from "../../styles/fontSizes.jss";
import "../../styles/texture/metal armor texture 1.PNG";
import {themes} from "../../styles/themes.jss";

export const drawerWidth = availWidth() * 0.23;
export const drawerItemWidth = drawerWidth * 0.95;
export const sideBarWidth = drawerWidth * 0.55;
const z = 5;

/*TODO: figure out how to make background fill a texture image*/
export const getTexture = (theme) => {
    switch (theme) {
        case 'mechwarrior_a_team':
            return {backgroundImage: "url(../styles/texture/metal armor texture 1.PNG)", backgroundRepeat: 'repeat'};
        case 'mechwarrior_b_team':
            return {backgroundImage: "url(../styles/texture/metal armor texture 1.PNG)", backgroundRepeat: 'repeat'};
        default:
            return {backgroundImage: "url(../styles/texture/metal armor texture 1.PNG)", backgroundRepeat: 'repeat'};
    }
};

export const useStyles = makeStyles({
    root: {
        zIndex: z,
        display: 'flex',
    },
    appBar: props => ({
        zIndex: z,
        width: `calc(100% - ${sideBarWidth}px)`,
        fontSize: fontSize002,
        height: '3em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: themes[props.theme].fill,
        // ...getTexture(props.theme),
    }),
    drawerPaper: props => ({
        zIndex: z,
        width: drawerWidth,
        backgroundColor: themes[props.theme].fill2,
        // ...getTexture(props.theme),
    }),
    // necessary for content to be below app bar
    toolbar: {
        fontSize: fontSize002,
        height: '3em',
    },
    drawerContent: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        height: '90vh',
    }),
    appbarContent: props => ({
        zIndex: z,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        width: `calc(100% - ${drawerWidth}px)`,
    }),
}, {index: 1});