import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import {ChessRules   }  from "./LinkComponents/ChessRules";
import {CouncilRules }  from "./LinkComponents/CouncilRules";
import {CreatePiece  }  from "./LinkComponents/CreatePiece";
import {NewGame      }  from "./LinkComponents/NewGame";
import {LoadGame     }  from "./LinkComponents/LoadGame";
import {MyPictures   }  from "./LinkComponents/MyPieces";
import {AuthorsGithub}  from "./LinkComponents/AuthorGithub";
import {Title        }  from "./LinkComponents/Title";


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