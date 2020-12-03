import makeStyles from "@material-ui/core/styles/makeStyles";
import {boardSize, gameBoardLeft} from "../../Reuseables/BoardMixins.jss";

const expandedSize = window.screen.availWidth * 0.13

const rangeDisplayTool = (screenCase) => ({
    position: 'absolute',
    zIndex: '5',
    backgroundColor: 'green',
    borderRadius: '1em',
    width: expandedSize,
    left: gameBoardLeft(screenCase) + boardSize(screenCase, 'large') + boardSize(screenCase, 'large') * 0.05,
    top: window.screen.availHeight * 0.315,
})

const label = {
    position: 'absolute',
    width: '70%',
    height: '10%',
    left: '10%',
    textAlign: 'left',
    fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
    color: '#b1faae',
    fontSize: '120%'
}

export const useStyles = makeStyles({
    expanded: {
        ...rangeDisplayTool('desktop'),
        height: expandedSize,
    },
    collapsed: {
        ...rangeDisplayTool('desktop'),
        height: window.screen.height * 0.04,
    },
    label: {
        ...label,
        top: '2%',
    },
})