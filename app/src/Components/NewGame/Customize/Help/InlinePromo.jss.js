import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        checkbox: (props) => ({
            display: "inline-block",
            marginLeft: "0.25rem",
            marginRight: "0.25rem",
            "& .MuiCheckbox-root": {
                verticalAlign: "baseline",
                padding: 0,
                borderRadius: 0,
                transform: "translate(0, 0.2rem)",
                display: "inline-block",
            },
            "& .MuiIconButton-root": {
                color: themes[props.theme].text,
                display: "inline-block",
                marginLeft: "0.25rem",
            },
            "& .MuiTypography-root": {
                display: "inline-block",
                fontWeight: 550,
            },
            "& .MuiSvgIcon-root": {
                width: "1.2rem",
                height: "1.2rem",
            },
        }),
    },
    { index: 1 }
);
