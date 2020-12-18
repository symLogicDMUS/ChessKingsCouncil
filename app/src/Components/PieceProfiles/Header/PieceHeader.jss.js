import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

/**Shared by Customize and LoadDelete headers*/
export const useStyles = makeStyles({
    header: props => ({
        ...props.style,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        width: '100%',
        backgroundColor: themes[props.theme].fill,
        border: `0.1em solid ${themes[props.theme].outline}`
    }),
});