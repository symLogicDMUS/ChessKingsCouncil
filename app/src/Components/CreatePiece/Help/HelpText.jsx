import React from "react";
import {v4 as uuidv4} from "uuid";
import {fontSize002} from "../../styles/fontSizes.jss";
import {InvalidNameExplanation} from "./InvalidNameExplanation";
import {ImageUploadExplanation} from "./ImageUploadExplanation";
import {OffsetsAndSpansExplanation} from "./OffsetsAndSpansExplanation";
import {LocationToolExplanation} from "./LocationToolExplanation";
import {OptionsToolExplanation} from "./OptionsToolExplanation";
import {HelpButtonReminder} from "../../Reuseables/NavBar/HelpButtonReminder";

export const HelpText = (fontSize, theme) => [
    <InvalidNameExplanation key={uuidv4()} fontSize={fontSize} theme={theme}/>,
    <ImageUploadExplanation key={uuidv4()} fontSize={fontSize} theme={theme}/>,
    <OffsetsAndSpansExplanation key={uuidv4()} fontSize={fontSize} theme={theme}/>,
    <LocationToolExplanation key={uuidv4()} fontSize={fontSize} theme={theme}/>,
    <OptionsToolExplanation key={uuidv4()} fontSize={fontSize} theme={theme}/>,
    <HelpButtonReminder key={uuidv4()} fontSize={fontSize} theme={theme}/>,
];
