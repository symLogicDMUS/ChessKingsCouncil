import {getStepFuncNames} from "../helpers/getStepFuncNames";
import {getRotations} from "../helpers/getRotations";
import {flipOffsets} from "../helpers/flipOffsets";

export const save = (state) => {
    const newPiece = {
        W: {spans: null, offsets: null, img: null, imgFileObj: null},
        B: {spans: null, offsets: null, img: null, imgFileObj: null},
    };
    const angles = [];
    for (const s of Object.keys(state.spans)) {
        if (state.spans[s]) angles.push(s);
    }
    newPiece.W.offsets = state.offsets;
    newPiece.W.spans = getStepFuncNames(angles);
    newPiece.B.spans = getStepFuncNames(getRotations(angles, 180));
    newPiece.B.offsets = flipOffsets(state.offsets);
    newPiece.W.img = state.whiteAndBlackImgs.white;
    newPiece.B.img = state.whiteAndBlackImgs.black;
    newPiece.W.imgFileObj = state.imgFileObjs.white;
    newPiece.B.imgFileObj = state.imgFileObjs.black;
    return {
        ...state,
        newPiece: newPiece,
        saveInstance: state.state.saveInstance + 1,
    }
};