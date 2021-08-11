import {themes} from "../../styles/themes/themes.jss";

export const styles = {
    root: props => ({
        backgroundColor: themes[props.theme].menu_container,
        "& .MuiStepIcon-root": {
            color: themes[props.theme].text,
        },
        "& .MuiStepLabel-label": {
            color: themes[props.theme].text,
        },
        "& .MuiStepIcon-text": {
            color: themes[props.theme].menu_container,
        },
    }),
    circle: props => ({
       backgroundColor: 'red',
    }),

}