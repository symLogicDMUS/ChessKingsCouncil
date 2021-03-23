import { makeStyles } from "@material-ui/core/styles";

export const sqrSize = {
    desktop: '1.791625vw',
    mobile: '1.791625vw',
}

export const useStyles = makeStyles({
    square: props => ({
        pointerEvents: 'none',
    }),
}, {index: 1});