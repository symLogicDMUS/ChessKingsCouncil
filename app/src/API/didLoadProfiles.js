import {findDidUserVisitPage} from "./findRecordDidUserVisitPage";

export function didLoadProfiles() {
    return Promise.all([
        findDidUserVisitPage('Customize'),
        findDidUserVisitPage('MyPieces'),
    ])
}