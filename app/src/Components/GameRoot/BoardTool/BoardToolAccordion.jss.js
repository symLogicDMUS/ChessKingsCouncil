import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    board_tool_accordion: props => ({
       "& .MuiAccordion-root": {
           position: 'absolute',
           '@media screen and (max-width: 960px)': {
               width: props.measurements.thin.width,
               left: props.measurements.thin.left,
               top: props.measurements.thin.top,
           },
           '@media screen and (min-width: 960px)': {
               width: props.measurements.wide.width,
               left: props.measurements.wide.left,
               top: props.measurements.wide.top,
           },
       },
        "& .MuiAccordionDetails-root": {
            backgroundColor: themes[props.theme].fill,
            border: `0.05rem solid ${themes[props.theme].odd_row}`,
            overflow: 'scroll',
        },
        "& .MuiAccordionSummary-root": {
            backgroundColor: themes[props.theme].fill,
            border: `0.05rem solid ${themes[props.theme].odd_row}`,
        },
        "& .MuiTypography-root": {
            color: themes[props.theme].text,
            width: '100%',
            textAlign: 'center',
            transform: 'translate(1em, 0)'
        },
        "& .MuiIconButton-root": {
            color: themes[props.theme].text,
        },
    }),
}, {index: 1});