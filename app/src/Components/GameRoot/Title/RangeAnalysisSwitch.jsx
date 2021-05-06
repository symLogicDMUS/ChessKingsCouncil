import {lighten, withStyles} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import {styles} from "./RangeAnalysisSwitch.jss";

export const RangeAnalysisSwitch = withStyles(styles)((props) => (
    <Switch {...props}>{props.children}</Switch>
));
