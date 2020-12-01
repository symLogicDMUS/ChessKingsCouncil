import {customize} from "../NewGame/Customize/sizeAndPosVariables.jss";
import {loadDelete} from "../MyPieces/sizeAndPosVariables.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../Reuseables/imgFillDiv.jss";

function profileWB(context) {
    if (context === 'custom-game') {
        return {
            top: customize.columnGap * 2,
            gridTemplateColumns: `${customize.col1}px ${customize.col2}px ${customize.col3}px`,
            gridTemplateRows: `${customize.row1}px ${customize.row2}px`,
            columnGap: customize.columnGap,
            marginBottom: customize.columnGap,
        }
    } else if (context === 'load-delete') {
        return {
            top: loadDelete.top,
            gridTemplateColumns: `${loadDelete.col1}px ${loadDelete.col2}px ${loadDelete.col3}px`,
            gridTemplateRows: `${loadDelete.row1}px ${loadDelete.row2}px`,
            columnGap: loadDelete.columnGap,
            marginBottom: loadDelete.columnGap,
        }
    }
}

export const useStyles = makeStyles({
    profileWB: props => ({
        position: "relative",
        display: "grid",
        zIndex: 'inherit',
        backgroundColor: '#515151',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...profileWB(props.context)
    }),
    imgLabel: {
        gridColumn: 1,
        gridRow: 1,
        fontFamily: 'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontSize: '130%',
        textAlign: 'center',
        color: '#a9a9a9',
        border: '0.8px solid #707070',
    },
    imgWindow: {
        zIndex: "inherit",
        gridColumn: 1,
        gridRow: 2,
        objectFit: "cover",
        border: "0.8px solid #707070",
        borderTop: "none",
    },
    pieceProfileImg: {
        position: 'relative',
        width: '95%',
        height: '95%',
        margin: '2.5%',
    },
    rangeTable: {
        /*spans or offsets*/
        gridRow: 2,
        gridColumn: 3,
        width: "100%",
        gridTemplateRows: "7.5% 17% 17% 17% 17% 17% 7.5%",
        border: "1px solid #707070",
        borderTop: "none",
    },
    image: {
        ...imgFillDiv
    }
})