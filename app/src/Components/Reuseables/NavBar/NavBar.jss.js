import {makeStyles} from "@material-ui/core/styles"
import {sideBarWidth} from "../PermanentDrawer.jss";
import {fontSize002, fontSize00301} from "../../styles/fontSizes.jss";

export const navBarWidth = sideBarWidth * 0.98;

export const desktopStyleByPage = (currentPage) => {
    switch (currentPage) {
        case 'CreatePiece':
            return {
                width: navBarWidth,
                display: 'flex',
                flexDirection: 'column',
            }
        case 'GameRoot':
            return {
                width: navBarWidth,
                fontSize: fontSize00301,
                display: 'flex',
                flexDirection: 'column',
            }
        case 'LoadGame':
            return {
                fontSize: fontSize002,
                height: "2.25em",
                width: "100%",
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
            }
        case 'NewGame':
            return {
                fontSize: fontSize002,
                width: "100%",
                height: "2.25em",
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
            }
        case 'MyPieces':
            return {
                width: "100%",
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
            }
        case 'Customize':
            return {
                width: navBarWidth,
                display: 'flex',
                flexDirection: 'column',
            }
        case 'CouncilRules':
            return {
                width: "100%",
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
            }
    }
};

const getStyle = (screenCase, currentPage) => {
    switch (screenCase) {
        case 'desktop':
            return desktopStyleByPage(currentPage)
        case 'mobile':
            return {
                display: 'flex',
                flexDirection: 'column',
                width: "100%",
            }
        case 'ipx':
            return {
                display: 'flex',
                flexDirection: 'column',
                width: "100%",
            }
        case 'ipad':
            return {
                display: 'flex',
                flexDirection: 'column',
                width: "100%",
            }
        case 'short':
            return {
                display: 'flex',
                flexDirection: 'column',
                width: "100%",
            }
        default:
            throw new Error("no screen type given")
    }
};

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        ...getStyle(props.screenCase, props.currentPage),
    }),
}), {index: 1});