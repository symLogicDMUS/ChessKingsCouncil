import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize0025, fontSize0040, fontSize008} from "../styles/fontSizes.jss";
import {availHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "./PersistentDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        width: '100%',
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.025em solid ${themes[props.theme].outline}`,
        ...props.rootStyle,
    }),
    accordion_tab: props => ({
        width: '100%',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        border: themes[props.theme].outline,
    }),
    accordion_title: props => ({
        "@media (max-aspect-ratio: 1/1) and (min-aspect-ratio: 1/2)": {
            fontSize: ((availHeight() - appBarHeight) * 0.4 * 0.3) / props.numTabs,
        },
    }),
    accordion_body: props => ({
        // marginTop: '-2vh',
        flexGrow: 10,
        backgroundColor: themes[props.theme].fill,
        ...props.style,
    }),
    accordion_summary: props => ({
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize008,
            height: '1em'
        },
    }),
    accordion_summary_content: props => ({
       color: themes[props.theme].text,
    }),
    expand_icon: props => ({
        color: themes[props.theme].text,
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0040,
            width: '1em',
            height: '1em',
        },
    }),
}));
