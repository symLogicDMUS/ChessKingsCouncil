import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    sub_dropdown: props => ({
        "& .MuiPaper-root":{
            backgroundColor: themes[props.theme].fill,
        },
        "& .MuiSelect-root": {
            backgroundColor: themes[props.theme].fill,
        },
        "& .MuiList-root": {
            backgroundColor: themes[props.theme].fill,
        },
    }),
}, {index: 1});