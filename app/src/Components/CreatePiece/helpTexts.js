import React from 'react'
import {helpTitle as nameTitle, HelpText as nameText} from "./Name/HelpText";
import {helpTitle  as rangeTitle, HelpText as rangeText} from "./Range/HelpText";
import {helpTitle as iconTitle, HelpText as iconText} from "./Icon/HelpText";
import {helpTitle as locationTitle, HelpText as locationText} from "./Location/HelpText";
import {helpTitle as optionsTitle, HelpText as optionsText} from "./Options/HelpText";
import {RangeHelpTextExtraModal} from "../CreatePiece/Range/HelpTextExtraModal";


export var titles = {
    0: nameTitle,
    1: rangeTitle,
    2: iconTitle,
    3: locationTitle,
    4: optionsTitle,
}

export var paragraphs = {
    0: nameText,
    1: rangeText,
    2: iconText,
    3: locationText,
    4: optionsText
}

export var children = {
    0: null,
    1: <RangeHelpTextExtraModal />,
    2: null,
    3: null,
    4: null
}

export var numSlides = 5;