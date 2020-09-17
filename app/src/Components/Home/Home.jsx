import React from "react";
import {ChessRulesIcon   }  from "./LinkComponents/ChessRulesMainMenuLink";
import {CouncilRulesIcon }  from "./LinkComponents/CouncilRulesMainMenuLink";
import {CreatePieceIcon  }  from "./LinkComponents/CreatePieceMainMenuLink";
import {NewGameIcon      }  from "./LinkComponents/NewGameMainMenuLink";
import {LoadGameIcon     }  from "./LinkComponents/LoadGameMainMenuLink";
import {MyPiecesIcon     }  from "./LinkComponents/MyPiecesMainMenuLink";
import {AuthorsGithubIcon}  from "./LinkComponents/AuthorGithubMainMenuLink";
import {Title}  from "./LinkComponents/MainMenuTitle";
import "./Home.css";


export class Home extends React.Component {

    componentDidMount() {
        document.body.className = "main-menu-background";
        fetch("get_game_names").then(response => response.json()).then(game_names => {
            console.log(game_names);
        })
    }

    render() {

        return (
            <svg viewBox="0 0 1920 1080">
                <defs>
                    <clipPath id="b">
                        <rect width={1920} height={1080} />
                    </clipPath>
                </defs>
                <g id="a" className="a">
                    <Title />
                    <ChessRulesIcon />
                    <CouncilRulesIcon />
                    <CreatePieceIcon />
                    <NewGameIcon /> 
                    <LoadGameIcon />
                    <MyPiecesIcon />
                    <a href="https://github.com/symLogicDMUS"><AuthorsGithubIcon /></a>
                </g>
            </svg>
        );
    }
};

export default Home;