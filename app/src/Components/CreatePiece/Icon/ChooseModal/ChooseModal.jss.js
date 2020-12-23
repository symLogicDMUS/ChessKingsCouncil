import {modal} from "../../../helpers/modal.jss";
import {availWidth, availHeight, height} from "../../../helpers/windowMeasurments";
import {themes} from "../../../styles/themes.jss";

const modalWidth = availWidth()*0.9;
const imgChoicesWidth = modalWidth*0.95;
const modalHeight = availHeight() * 0.9;
const imgChoicesHeight = modalHeight*0.8;

export const close_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '1.5em',
    height: '1.5em',
});

export const styles = {
    modal: props => ({
        ...modal,
    }),
    window: props => ({
        zIndex: 100,
        fontSize: props.fontSize,
        width: modalWidth,
        height: modalHeight,
        backgroundColor: themes[props.theme].fill,
    }),
    top_flexbox: props => ({
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        border: '1px dashed #b1faae',
    }),
    title_flexbox: props => ({
        fontSize: props.fontSize,
        width: '100%',
        height: '3em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed #b1faae',
    }),
    title: props => ({
        fontSize: props.fontSize,
    }),
    img_choices_border: props => ({
        fontSize: props.fontSize,
        width: imgChoicesWidth,
        height: imgChoicesHeight,
        marginLeft: modalWidth * 0.025,
        marginRight: modalWidth * 0.025,
        marginTop: modalHeight * 0.025,
        marginBottom: modalHeight * 0.025,
        border: `0.08em solid ${themes[props.theme].outline}`,
        backgroundColor: themes[props.theme].fill,
        borderRadius: '0.25em',
    }),

    image_choices: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'fle-start',
        fontSize: props.fontSize,
        width: '77.5em',
        height: '33.75em',
        marginLeft: '1em',
        marginRight: '1em',
        marginTop: '1em',
        marginBottom: '1em',
    }),
};