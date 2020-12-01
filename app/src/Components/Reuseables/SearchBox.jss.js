import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    search_tool: {
        position: 'absolute',
        border: '2px solid #707070',
        borderRadius: '12px'
    },
    text_box: {
        position: 'absolute',
        fontSize: '180%',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: '#c4c4c4',
        height: '90%',
        width: '89%',
        left: '9%',
        border: 'none',
        outline: 'none'
    },
    magnifying_glass: {
        position: 'absolute',
        width: '8%',
        height: '80%',
        margin: '1%'
    }
});