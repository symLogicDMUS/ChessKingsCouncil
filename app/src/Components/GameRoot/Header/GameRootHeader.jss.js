import makeStyles from "@material-ui/core/styles/makeStyles";

const header = {
    zIndex: 4,
    position: 'absolute',
    width: window.screen.availHeight * 0.8,
    height: window.screen.availHeight * 0.8 * 0.0667,
    fontSize: window.screen.availHeight * 0.8 * 0.0667 - window.screen.availHeight * 0.8 * 0.0667 * 0.15,
    left: window.screen.availHeight * 0.37,
    top: window.screen.availHeight * 0.061,

}

const gridItem = {
    zIndex: 'inherit',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}

export const useStyles = makeStyles({

    /** either label label or grid is displayed, conditionally.*/

    label: {
        ...header,
        color: 'black',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },

    grid: {
        ...header,
        display: 'grid',
        MsGridColumns: '48.67% 48.67%',
        gridTemplateColumns: '48.67% 48.67%',
        WebkitColumnGap: '2.66%',
        columnGap: '2.66%',
        '&$turn': {
            MsGridColumn: '1',
            gridColumn: '1',
            color: 'black',
            ...gridItem,
        },
        '&$condition':{
            MsGridColumn: '2',
            gridColumn: '2',
            color: 'red',
            ...gridItem,
        },
    },
    turn: {},
    condition: {}
})