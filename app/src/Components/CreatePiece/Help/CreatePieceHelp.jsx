import React from "react";
import { NamingAPieceExplained } from "./NamingAPieceExplained";
import { ImageUploadExplanation } from "./ImageUploadExplanation";
import { OffsetsAndSpansExplanation } from "./OffsetsAndSpansExplanation";
import { LocationToolExplanation } from "./LocationToolExplanation";
import { OptionsToolExplanation } from "./OptionsToolExplanation";
import { HelpButtonReminder } from "../../Reuseables/NavBar/Help/HelpButtonReminder";

export const CreatePieceHelp = (theme) => [
    <NamingAPieceExplained key="invalid-name-explanation" theme={theme} />,
    <ImageUploadExplanation key="invalid-upload-explanation" theme={theme} />,
    <OffsetsAndSpansExplanation
        key="offsets-and-spans-explanation"
        theme={theme}
    />,
    <LocationToolExplanation key="location-tool-explanation" theme={theme} />,
    <OptionsToolExplanation key="options-tool-explanation" theme={theme} />,
    <HelpButtonReminder theme={theme} />,
];
