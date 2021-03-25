import { makeStyles } from "@material-ui/core/styles";

export const sqrSize = {
    wide: '1.791625vw',
    thin: '5.3125vw',
}

export const useStyles = makeStyles({
    square: props => ({
        pointerEvents: 'none',
    }),
}, {index: 1});