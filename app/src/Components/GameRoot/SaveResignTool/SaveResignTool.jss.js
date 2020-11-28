import makeStyles from "@material-ui/core/styles/makeStyles";

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
        left: window.screen.availWidth * 0.638,
        top: window.screen.availHeight * 0.1459,
        width: window.screen.availWidth * 0.16,
        height: window.screen.availHeight * 0.16,
        backgroundColor: 'green',
        borderRadius: '10px'
    },
    game_description: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        '$&game_name': {
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
        '$&gen_info': {
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
        }
    },
    game_name: {},
    gen_info: {},
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