import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../../styles/themes/themes.jss";

export const originTransform = {vertical: 'top', horizontal: 'right'};
export const originTransform2 = {vertical: 'bottom', horizontal: 'left'};

export const useStyles = makeStyles({
    content: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        "& .MuiSvgIcon-root": {
            color: themes[props.theme].text,
        },
    }),
}, {index: 1});
