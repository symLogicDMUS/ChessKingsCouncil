import React from "react";
import "../../index.css";
import {ChessRules   }  from "../IconComponents/ChessRules";
import {CouncilRules }  from "../IconComponents/CouncilRules";
import {CreatePiece  }  from "../IconComponents/CreatePiece";
import {NewGame      }  from "../IconComponents/NewGame";
import {LoadGame     }  from "../IconComponents/LoadGame";
import {MyPictures   }  from "../IconComponents/MyImages";
import {AuthorsGithub}  from "../IconComponents/AuthorGithub";
import {Title        }  from "../IconComponents/Title";


export const MainMenuComponent = () => {
    return (
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
                <a href="https://github.com/symLogicDMUS"><AuthorsGithub /></a>
                <Title />
            </g>
        </svg>
    );
};

export default MainMenuComponent;