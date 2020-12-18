import {availHeight, availWidth} from "../../helpers/windowMeasurments";

export const styles = {
    customize: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: availHeight()*0.95,
        width: availWidth(),
    },
    header: props => ({
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'left',
    }),
    title: props => ({
        fontSize: props.fontSize,
    }),
    bottom_bar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'right',
    }),
    promos_title: props => ({
        fontSize: props.fontSize,
        height: '2.7em',
        width: '100%',
    }),
};