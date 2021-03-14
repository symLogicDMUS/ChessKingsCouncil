import React from "react";
import {v4 as uuidv4} from "uuid";
import {InvalidNameExplanation} from "./InvalidNameExplanation";
import {ImageUploadExplanation} from "./ImageUploadExplanation";
import {OffsetsAndSpansExplanation} from "./OffsetsAndSpansExplanation";
import {LocationToolExplanation} from "./LocationToolExplanation";
import {OptionsToolExplanation} from "./OptionsToolExplanation";
import {HelpButtonReminder} from "../../Reuseables/NavBar/Help/HelpButtonReminder";

export const HelpText = (fontSize, theme) => [
    <InvalidNameExplanation key='invalid-name-explanation' fontSize={fontSize} theme={theme}/>,
    <ImageUploadExplanation key='invalid-upload-explanation' fontSize={fontSize} theme={theme}/>,
    <OffsetsAndSpansExplanation key='offsets-and-spans-explanation' fontSize={fontSize} theme={theme}/>,
    <LocationToolExplanation key='location-tool-explanation' fontSize={fontSize} theme={theme}/>,
    <OptionsToolExplanation key='options-tool-explanation' fontSize={fontSize} theme={theme}/>,
    <HelpButtonReminder key={uuidv4()} fontSize={fontSize} theme={theme}/>,
];
