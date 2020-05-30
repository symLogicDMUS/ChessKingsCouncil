/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import "./MenuComponents.css";
import {ChessRules   }  from "./Items/Options/ChessRules";
import {CouncilRules }  from "./Items/Options/CouncilRules";
import {CreatePiece  }  from "./Items/Options/CreatePiece";
import {NewGame      }  from "./Items/Options/NewGame";
import {LoadGame     }  from "./Items/Options/LoadGame";
import {MyPictures   }  from "./Items/Options/MyPictures";
import {AuthorsGitHub}  from "./Items/Options/AuthorsGitHub";
import {Title        } from  "./Items/Title";

export const MainMenuComponent = () => (
    <svg viewBox="0 0 1920 1080">
        <defs>
            <clipPath id="b">
                <rect width={1920} height={1080} />
            </clipPath>
        </defs>
        <g id="a" className="a">
            <ChessRules />
            <CouncilRules />
            <CreatePiece />
            <NewGame />
            <LoadGame />
            <MyPictures />
            <AuthorsGitHub />
            <Title />
        </g>
    </svg>);

export default MainMenuComponent;