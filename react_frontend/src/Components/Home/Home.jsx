import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import {ChessRules   }  from "./LinkComponents/ChessRulesMainMenuLink";
import {CouncilRules }  from "./LinkComponents/CouncilRulesMainMenuLink";
import {CreatePiece  }  from "./LinkComponents/CreatePieceMainMenuLink";
import {NewGame      }  from "./LinkComponents/NewGameMainMenuLink";
import {LoadGame     }  from "./LinkComponents/LoadGameMainMenuLink";
import {MyPictures   }  from "./LinkComponents/MyPiecesMainMenuLink";
import {AuthorsGithub}  from "./LinkComponents/AuthorGithubMainMenuLink";
import {Title        }  from "./LinkComponents/MainMenuTitle";


export class MainMenuComponent extends React.Component {

    componentDidMount() {
        document.body.className = "main-menu-background";
    }

    render()
    {
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
    }
};

export default MainMenuComponent;