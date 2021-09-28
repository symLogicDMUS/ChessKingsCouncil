import { refactorDefOffsets } from "./refactorDefOffsets";
import { dbSampleDefs } from "./sampleDefs";

export function getSampleDefs() {
    return refactorDefOffsets(dbSampleDefs);
}
