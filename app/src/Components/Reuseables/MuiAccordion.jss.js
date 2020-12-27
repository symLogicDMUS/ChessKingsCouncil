import {availHeight} from "../helpers/windowMeasurments";

const {makeStyles} = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    mui_accordion: {
        width: '95%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordion_body: {
        height: availHeight()*0.48,
    },
}));
