import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../../styles/themes.jss";
import {imgFillDiv} from "../../../Reuseables/imgFillDiv.jss";

export const img_container = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '10em',
    height: '10em',
    margin: '1em',
    cursor: 'pointer',
    borderRadius: '0.25em',
    border: `0.08em solid ${themes[theme].outline}`,
    backgroundColor: themes[theme].fill,
});

export const useStyles = makeStyles({
    normal: props => ({
        ...img_container(props.fontSize, props.theme),
    }),
    selected: props => ({
        ...img_container(props.fontSize, props.theme),
        boxShadow: "0 0 0.5em white",
    }),
    img_choice: props => ({
        ...imgFillDiv,
    }),
});
