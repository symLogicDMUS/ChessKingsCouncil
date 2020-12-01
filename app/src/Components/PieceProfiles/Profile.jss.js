import makeStyles from "@material-ui/core/styles/makeStyles";
import {customize} from "../NewGame/Customize/sizeAndPosVariables.jss";
import {loadDelete} from "../MyPieces/sizeAndPosVariables.jss";

function profile(context) {
    if (context === 'custom-game') {
        return {
            marginLeft: customize.columnGap,
            marginBottom: customize.columnGap,
            width: customize.col1 + customize.columnGap + customize.col2 + customize.columnGap + customize.col3 + 2,
            height:
                customize.profileHeaderHeight +
                customize.col3 +
                customize.row1 +
                customize.row2 +
                customize.columnGap +
                customize.row1 +
                customize.row2 +
                customize.columnGap,
            borderTop: '0.8px solid #707070',
            zIndex: 'inherit',
        }
    } else if (context === 'load-delete') {
        //TODO: will be different
        return {
            marginLeft: loadDelete.columnGap,
            marginBottom: loadDelete.columnGap,
            width: loadDelete.col1 + loadDelete.columnGap + loadDelete.col2 + loadDelete.columnGap + loadDelete.col3 + 2,
            height:
                loadDelete.profileHeaderHeight +
                loadDelete.col3 +
                loadDelete.row1 +
                loadDelete.row2 +
                loadDelete.columnGap +
                loadDelete.row1 +
                loadDelete.row2 +
                loadDelete.columnGap,
            borderTop: '0.8px solid #707070',
            zIndex: 'inherit',
        }
    }
}


export const useStyles = makeStyles({
    profile: props => ({
        ...profile(props.context),
        borderTop: '0.8px solid #707070',
        zIndex: 'inherit',
    }),
});
