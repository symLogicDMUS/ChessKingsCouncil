import makeStyles from "@material-ui/core/styles/makeStyles";
import {expandedSize as size, rangeDisplayLeft} from "../RangeDisplayTool/RangeDisplayTool.jss";
import {gameBoardTop} from "../../Reuseables/BoardMixins.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const saveResignToolHeightDesktop = () => availHeight() * 0.16

const icon = {
    position: 'absolute',
    zIndex: '1',
    top: '37.45%',
    height: '50%',
    cursor: 'pointer',
}

export const useStyles = makeStyles({
    save_resign_tool: {
        position: 'absolute',
        zIndex: '1',
        left: rangeDisplayLeft('desktop'),
        top: gameBoardTop('desktop'),
        width: size,
        height: saveResignToolHeightDesktop(),
        backgroundColor: 'green',
        borderRadius: '10px'
    },
    game_description: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    game_name: {
        position: 'absolute',
        width: '90%',
        height: '15%',
        left: '3%',
        color: '#b1faae',
        fontSize: '120%',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        top: '0%'
    },
    gen_info: {
        position: 'absolute',
        width: '90%',
        height: '15%',
        left: '3%',
        color: '#b1faae',
        fontSize: '120%',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        top: '16%'
    },
    save_game: {
        ...icon,
        left: '3%'
    },
    save_as: {
        ...icon,
        left: '35%'
    },
    resign: {
        ...icon,
        left: '70%'
    }
})