import {divideList} from "./divideList";
import {renderList} from "./renderList";
import {copy} from "../../helpers/copy";

export function reducer(state, action) {
    let lists, a, b;
    switch (action.type) {
        case "update":
            lists = divideList(action.listItems, action.numRows)
            return {dataLists: lists, componentList: renderList(lists.inView, action.numRows, action.classes)};
        case 'scroll-up':
            if (state.dataLists.aboveView.length > 0) {
                lists = copy(state.dataLists)
                //1. remove the last item in view
                a = lists.inView.pop()
                //2. last item in view is first item below view.
                lists.belowView.unshift(a)
                //3. remove the last item above view.
                b = lists.aboveView.pop()
                //4. last item above view now first item in view
                lists.inView.unshift(b)
                //5. this is the new state
                return {dataLists: lists, componentList: renderList(lists.inView, action.numRows, action.classes)};
            } else {
                return state;
            }
        case 'scroll-down':
            if (state.dataLists.belowView.length > 0) {
                lists = copy(state.dataLists)
                //1. remove the first item in view.
                a = lists.inView.shift()
                //2. first item in view now last item above view
                lists.aboveView.push(a)
                //3. remove the first item below view.
                b = lists.belowView.shift()
                //4. first item below view now the last item in view
                lists.inView.push(b)
                //5. return the new state.
                return {dataLists: lists, componentList: renderList(lists.inView, action.numRows, action.classes)};
            } else {
                return state;
            }
        default:
            throw new Error();
    }
}