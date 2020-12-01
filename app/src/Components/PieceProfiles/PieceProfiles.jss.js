import makeStyles from "@material-ui/core/styles/makeStyles";
import {customize} from "../NewGame/Customize/sizeAndPosVariables.jss";
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

export const styles = {
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
};
