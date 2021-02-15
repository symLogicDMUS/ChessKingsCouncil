import {saveDefs} from "./saveDefs";
import {sampleDefs} from "./apiHelpers/sampleDefs";
import {dbSampleDefs} from "./apiHelpers/dbSampleDefs";
import {copy} from "../Components/helpers/copy";

export async function getSetSampleDefs() {
    const result = await saveDefs(dbSampleDefs);
    return sampleDefs;
}