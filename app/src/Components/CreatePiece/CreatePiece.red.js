import {load} from "./reducers/load";
import {save} from "./reducers/save";
import {erase} from "./reducers/erase";
import {reset} from "./reducers/reset";
import {copy} from "../helpers/copy";
import {setLoc} from "./reducers/setLoc";
import {resetImg} from "./reducers/resetImg";
import {toggleSpan} from "./reducers/toggleSpan";
import {updateName} from "./reducers/updateName";
import {setPieceImg} from "./reducers/setPieceImg";
import {setJustSaved} from "./reducers/setJustSaved";
import {toggleOffset} from "./reducers/toggleOffset";
import {removeOffset} from "./reducers/removeOffset";
import {saveCallback} from "./reducers/saveCallback";
import {setImgFileObj} from "./reducers/setImgFileObj";
import {toggleSpanText} from "./reducers/toggleSpanText";
import {setDisplaySpan} from "./reducers/setSpanDisplay";
import {setSpanDisplays} from "./reducers/setSpanDisplays";
import {updateFirstVisit} from "./reducers/updateFirstVisit";
import {toggleOffsetText} from "./reducers/toggleOffsetText";
import {setOffsetDisplays} from "./reducers/setOffsetDisplays";
import {resetSpanDisplays} from "./reducers/resetSpanDisplays";
import {resetOffsetDisplays} from "./reducers/resetOffsetDisplays";
import {resetOffsetAndRange} from "./reducers/resetOffsetAndRange";
import {toggleMiniVariantTool} from "./reducers/toggleMiniVariantTool";

export function reducer(state, action) {
    let newState;
    switch (action.type) {
        case 'load':
            return load(
                state,
                action.name,
                action.offsets,
                action.spans,
                action.whiteImg,
                action.blackImg
            )
        case 'save':
            return save(state)
        case 'reset':
            return reset(state)
        case 'erase':
            return erase(state)
        case 'toggle-mini-variant-tool':
            return toggleMiniVariantTool(state, action.toolName, state.activeTool);
        case 'update-first-visit':
            return updateFirstVisit(state, action.isFirstVisit);
        case 'save-callback':
            return saveCallback(state)
        case 'update-name':
            return updateName(state, action.name)
        case 'set-piece-img':
            return setPieceImg(state, action.color, action.imgStr)
        case 'set-img-file-obj':
            return setImgFileObj(state, action.color, action.fileObj)
        case 'toggle-span':
            newState = copy(state)
            toggleSpan(newState, action.angle);
            newState.unsavedChanges = true;
            return newState;
        case 'set-display-span':
            newState = copy(state);
            setDisplaySpan(newState, action.angle)
            return newState;
        case 'set-span-displays':
            newState = copy(state);
            setSpanDisplays(newState)
            return newState;
        case 'reset-span-displays':
            return resetSpanDisplays(state)
        case 'toggle-offset':
            newState = copy(state);
            toggleOffset(newState, action.rf, action.offset)
            newState.unsavedChanges = true;
            return newState;
        case 'remove-offset':
            newState = copy(state);
            removeOffset(newState, action.rf);
            return newState;
        case 'set-offset-displays':
            newState = copy(state);
            setOffsetDisplays(newState)
            return newState;
        case 'reset-offset-displays':
            return resetOffsetDisplays(state)
        case 'reset-offset-and-range':
            return resetOffsetAndRange(state)
        case 'set-loc':
            newState = copy(state);
            setLoc(newState, action.rf);
            return newState;
        case 'reset-img':
            return resetImg(state)
        case 'toggle-offset-text':
            return toggleOffsetText(state)
        case 'toggle-span-text':
            return toggleSpanText(state);
        case 'set-just-saved':
            return setJustSaved(state, action.justSaved);
        default:
            throw new Error();
    }
}