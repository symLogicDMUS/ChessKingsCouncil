import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";

// em units:
const profileWidth = 40;
const profileHeight = 16.6;

export const profile_flexbox = (fontSize, theme) => ({
    zIndex: 5,
    fontSize: fontSize,
    width: `${profileWidth}em`,
    height: `${profileHeight}em`,
    marginTop: `${-profileHeight * 0.5}em`,
    marginLeft: `${-profileWidth * 0.5}em`,
    position: 'fixed',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: themes[theme].fill,
    border: `0.05em solid ${themes[theme].outline}`,
    borderRadius: '0.5em',
})

export const profile_top = (fontSize, theme) => ({
    fontSize: fontSize,
    width: `${profileWidth*0.97}em`,
    marginLeft: `${profileWidth*0.03}em`,
    height: '1.5em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: themes[theme].text,
});


export const useStyles = makeStyles({
        range_display_tool: props => ({
            fontSize: props.fontSize,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '@media screen and (min-width: 768px)': {
                width: {drawerItemWidth},
                height: '8em',
            },
            '@media screen and (max-width: 767px)': {
                width: '100%',
                height: '100%',
                alignItems: 'center'
            },
        }),
        flex_header: props => ({
            fontSize: props.fontSize,
            width: '8.05em',
            height: '0.7em',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            border: `0.04em solid ${themes[props.theme].outline}`,
        }),
        title: props => ({
            fontSize: props.fontSize * 0.48,
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].text,
            height: '1em',
            lineHeight: '0.96em',
        }),
    }
);
