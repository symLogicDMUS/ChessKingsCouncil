import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {headerWidthLg, headerWidthMd, sqrItemSizeLg} from "../../PieceProfiles/constants.jss";

export const originTransform = {vertical: 'top', horizontal: 'right'};

export const useStyles = makeStyles({
    appBar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
    appBarLg: props => ({
        marginLeft: 'auto',
        marginRight: 'auto',
        width: headerWidthLg,
        justifyContent: 'space-between',
        transform: 'translate(-2px, 0px)',
    }),
    appBarMd: props => ({
        justifyContent: 'flex-start',
        width: headerWidthMd,
    }),
    appBarSm: props => ({
        flexGrow: 10,
        justifyContent: 'flex-start',
    }),
    itemBox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
    justifyStart: props => ({
        justifyContent: 'flex-start',
    }),
    justifyBetweenAndGrow: props => ({
        flexGrow: 10,
        justifyContent: 'space-between',
    }),
    justifyEndAndGrow: props => ({
        flexGrow: 10,
        justifyContent: 'flex-end',
    }),
    widthSqrItemSizeLg: props => ({
        width: sqrItemSizeLg,
    }),
    marginRight: props => ({
        '@media screen and (max-width: 712px)': {
            marginRight: '4.25vw',
        },
        '@media screen and (min-width: 712px) and (max-width: 760px)': {
            marginRight: '4.9vw',
        },
        '@media screen and (min-width: 760px) and (max-width: 820px)': {
            marginRight: '5vw',
        },
       '@media screen and (min-width: 820px) and (max-width: 960px)': {
           marginRight: '5.5vw',
       },
    }),
}, {index: 1});
