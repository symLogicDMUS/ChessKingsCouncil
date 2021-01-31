import {makeStyles} from "@material-ui/core/styles"
import {sideBarWidth} from "../PermanentDrawer.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {navBarButtonWidth} from "./NavBarButton.jss";

export const navBarWidth = sideBarWidth * 0.98;

export const navBarButtonStyleDesktop = () => ({
    fontSize: fontSize002 * 1.5,
    justifyContent: "flex-start",
    width: navBarButtonWidth,
    height: "2.5em",
});
export const navBarButtonStyleMobile = () => ({
    fontSize: fontSize002 * 1.2,
    justifyContent: "flex-start",
    width: "99%",
    height: "2.5em",
});

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        ...props.style,
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: props.flexDirection,
        flexWrap: 'nowrap',
    }),
}));


