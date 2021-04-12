import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    tool_window: props => ({
        position: 'absolute',
        top: `calc(50vh - (18.5vw + 24px))`,
        left: '14.75vw',
    }),
    img_windows: props => ({
       display: 'flex',
       flexDirection: 'row',
    }),
}, {index: 1});