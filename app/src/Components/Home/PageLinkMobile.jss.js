import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize002, fontSize00301} from "../styles/fontSizes.jss";

export const page_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '0.9em',
    height: '0.9em',
    paddingLeft: '0.25em',
    marginRight: '0.25em',
});

export const page_name = (fontSize) => ({
    fontSize: fontSize,
    fontFamily: 'Garamond',
    marginLeft: '0.25em',
    flexGrow: 100,
});

export const useStyles = makeStyles({
    page_link: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: fontSize002,
        marginBottom: '0.25em',
        marginLeft: '0.5em',
    }),
    page_icon_normal: props => ({
        ...page_icon(fontSize00301),
        color: themes[props.theme].page_link,
    }),
    page_name_normal: props => ({
        ...page_name(fontSize00301),
        color: themes[props.theme].page_link,
    }),
    page_icon_hover: props => ({
         ...page_icon(fontSize00301),
        color: themes[props.theme].page_link_hover,
    }),
    page_name_hover: props => ({
        ...page_name(fontSize00301),
        color: themes[props.theme].page_link_hover,
    }),

});