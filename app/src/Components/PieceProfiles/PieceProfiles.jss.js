import makeStyles from "@material-ui/core/styles/makeStyles";
import {customize as sizeAndPos, customize} from "../NewGame/Customize/sizeAndPosVariables.jss";
import {loadDelete} from "../MyPieces/sizeAndPosVariables.jss";

const profile = (context) => {
    if (context === 'custom-game') {
        return {
            marginLeft: customize.columnGap,
            marginBottom: customize.columnGap,
            width: customize.col1 + customize.col2 + customize.col3 + customize.columnGap + customize.col3 + 2,
            height:
                customize.profileHeaderHeight +
                customize.col3 +
                customize.row1 +
                customize.row2 +
                customize.columnGap +
                customize.row1 +
                customize.row2 +
                customize.columnGap,
        }
    } else if (context === 'load-delete') {
        return {
            marginLeft: loadDelete.columnGap,
            marginBottom: loadDelete.columnGap,
            width: loadDelete.col1 + loadDelete.col2 + loadDelete.col3 + loadDelete.columnGap + loadDelete.col3 + 2,
            height:
                loadDelete.profileHeaderHeight +
                loadDelete.col3 +
                loadDelete.row1 +
                loadDelete.row2 +
                loadDelete.columnGap +
                loadDelete.row1 +
                loadDelete.row2 +
                loadDelete.columnGap,
        }
    }
}

const profileButton = {
    position: 'absolute',
    zIndex: 'inherit',
    color: '#a9a9a9',
    backgroundColor: '#5d5d5d',
    '&:hover': {
        backgroundColor: '#a9a9a9'
    },
}

export const subDropdownStyle = {
    gridColumn: 3,
        width: sizeAndPos.subDropdownWidth,
}

export const useStyles = makeStyles({
    profile: props => ({
        ...profile(props.context),
        position: 'absolute',
        zIndex: 'inherit',
        display: 'grid',
        gridTemplateColumns: '1fr',
        backgroundColor: '#515151',
        borderTop: '1px solid #707070',
        overflowY: 'scroll',
        overflowX: 'hidden',
    }),
    ld_header : {
        zIndex: "inherit",
        backgroundColor: "#515151",
        width: sizeAndPos.profileHeaderWidth,
        height: sizeAndPos.profileHeaderHeight,
    },
    ld_piece_name : {
        gridColumn: 1,
        width: sizeAndPos.pieceNameWidth,
        fontSize: sizeAndPos.topBarHeight*0.7,
        zIndex: "inherit",
        color: "#a9a9a9",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        textAlign: "left",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    load_button: {
        ...profileButton,
        top: '22.5%',
        left: '86%',
    },
    delete_button: {
        ...profileButton,
        top: '22.5%',
        left: '93%',
    },

    /**
     * Customize page
     */
    cust_header: {
        position: "relative",
        zIndex: "inherit",
        display: "grid",
        width: "100%",
        backgroundColor: "#515151",
    },
    cust_header_grid : {
        position: "relative",
        display: "inline-grid",
        columnGap: sizeAndPos.columnGap,
        top: sizeAndPos.profileGridTop,
    },
    cust_piece_name: {
        gridRow: 1,
        gridColumn: 1,
        color: "#a9a9a9",
        fontSize: "160%",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left",
        paddingLeft: "1%",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    promo_checkbox : {
        gridColumn: 2,
    },
    sub_dropdown : {
        gridColumn: 3,
        width: sizeAndPos.subDropdownWidth,
    },
});