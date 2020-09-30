import React from "react";
import {PickType} from "./PickType/PickType";
import {PickName} from "./PickName/PickName";
import {Customize} from "./Customize/Customize";
import { Redirect } from "react-router-dom";
import { PlayAs } from "./PlayAs/PlayAs";
import {newData, ranges, enemyRanges, moves, status, id_dict, piece_defs, standard_promo_names} from "./NewData";
import {firstUpdate} from "../../apiHelpers/firstUpdate";
import "./NewGame.css";


/**
 * NewGame selects what CreatPiece created, then sends it to the backend which
 * assigns ids to piece-names for pieces the player chose for that game. the
 * id:piece-name arangement is unique to that game, and is stored in game-name.defs
 * in the game's folder.
 */
export class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {step: 0};
        this.gameName = "none";
        this.gameType = "none";
        this.playerType = "test"; //either the color W or B, or 'test' 
        this.pieceDefs = {};
        this.comp = null;
        this.council = false;
        this.turn = null;
        this.nextStep = this.nextStep.bind(this);
        this.setGameType = this.setGameType.bind(this);
        this.setGameName = this.setGameName.bind(this);
        this.setPlayerType = this.setPlayerType.bind(this);
        this.loadNewStandard = this.loadNewStandard.bind(this);
        this.loadNewCustom = this.loadNewCustom.bind(this);
        this.loadNewCouncil = this.loadNewCouncil.bind(this);
    }

    nextStep() {
        this.setState({step: this.state.step + 1});
    } 

    componentDidMount() {
        document.body.className = "new-game-body"; 
    }

    setGameType(type) {
        this.gameType = type;
    }

    setPlayerType(playerType) {
        this.playerType = playerType;
    }

    setGameName(name) {
        this.gameName = name;
    }
    
    loadNewStandard() {
        this.gameData = JSON.parse(JSON.stringify(newData));
        this.gameData['game_name'] = this.gameName;
        this.gameData['pt'] = JSON.parse(JSON.stringify(this.playerType));
        this.gameData['type'] = JSON.parse(JSON.stringify(this.gameType));
        this.gameData['promos'] = JSON.parse(JSON.stringify(standard_promo_names));
        this.gameData['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.gameData['piece_defs'] = JSON.parse(JSON.stringify(piece_defs));
        this.gameData['moves'] = JSON.parse(JSON.stringify(moves));
        this.gameData['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.gameData['enemy_ranges'] = JSON.parse(JSON.stringify(enemyRanges));
        this.gameData['status'] = JSON.parse(JSON.stringify(status));
    }

    loadNewCouncil() {
        /**Not yet implemented to be different */
        this.gameData = JSON.parse(JSON.stringify(newData));
        this.gameData['game_name'] = this.gameName;
        this.gameData['pt'] = JSON.parse(JSON.stringify(this.playerType));
        this.gameData['type'] = JSON.parse(JSON.stringify(this.gameType));
        this.gameData['promos'] = JSON.parse(JSON.stringify(standard_promo_names));
        this.gameData['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.gameData['piece_defs'] = JSON.parse(JSON.stringify(piece_defs));
        this.gameData['moves'] = JSON.parse(JSON.stringify(moves));
        this.gameData['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.gameData['enemy_ranges'] = JSON.parse(JSON.stringify(enemyRanges));
        this.gameData['status'] = JSON.parse(JSON.stringify(status));
    }

    loadNewCustom(idDict, defs, promos) {
        /**
         * first declare the data we don't need then backend for, then get rest of data from backend.
         * 
         * load the data for new-game but then change the idDict to
         * one chosen by customise. note: unlike loadNewCouncil and 
         * loadNewStandard, loadNewCustom is called from child.
         * 
         * 1. set data that is same for any new game
         * 2. set what the player will play as: W, B, or test
         * 4. set data that is unique to this game.
         * 5. format the data that backend needs together into an object.
         * 6. get the starting ranges for our custom new game from the backend, then update state
         */
        
        this.gameData = JSON.parse(JSON.stringify(newData)); //1.
        this.gameData['game_name'] = this.gameName;
        this.gameData['pt'] = JSON.parse(JSON.stringify(this.playerType)); //2.
        this.gameData['type'] = JSON.parse(JSON.stringify(this.gameType));
        this.gameData['promos'] = promos; //4.
        this.gameData['id_dict'] = idDict; //4.
        this.gameData['piece_defs'] = {}; //4.

        var name;
        for (var id of Object.keys(idDict)) {
            if (id !== 'k' && id !== 'p') {
                name = idDict[id]
                this.gameData['piece_defs'][name] = defs[name] //4.
            }
        }
        
        var dataEntry = firstUpdate(
          this.gameData["board"],
          this.gameData["json_records"],
          "W",
          this.gameData["pt"],
          this.gameData["piece_defs"],
          this.gameData["id_dict"]
        );

        this.gameData['moves'] = dataEntry['moves'];
        this.gameData['ranges'] = dataEntry['ranges'];
        this.gameData['enemy_ranges'] = dataEntry['enemy_ranges'];
        this.gameData['status'] = JSON.parse(JSON.stringify(status));
        
        this.nextStep();

    }

    getGameSetup() {

        if (this.gameType === "standard")
            return <PlayAs setPlayer={this.setPlayerType} nextStep={this.nextStep} loadNew={this.loadNewStandard}/>

        if (this.gameType === "custom")
            return <Customize loadNewCustom={this.loadNewCustom} setPlayer={this.setPlayerType} nextStep={this.nextStep} />

        if (this.gameType === "council")
            return <PlayAs setPlayer={this.setPlayerType} nextStep={this.nextStep} loadNew={this.loadNewCouncil}/>
    }

    play() {

        return <Redirect to={{ pathname:"/NewGame/Play",
                               state: {currentPage:"/NewGame/Play",
                                       gameName:JSON.parse(JSON.stringify(this.gameName)),
                                       gameType:JSON.parse(JSON.stringify(this.gameType)),
                                       playerType:JSON.parse(JSON.stringify(this.playerType)),
                                       gameData:JSON.parse(JSON.stringify(this.gameData)),
                                       }
                            }} />
    }

    render() {
        return (
        <>
            {this.state.step === 0 && (<PickType setType={this.setGameType} nextStep={this.nextStep} />)}
            {this.state.step === 1 && (<PickName setName={this.setGameName} nextStep={this.nextStep} />)}
            {this.state.step === 2 && (this.getGameSetup())}
            {this.state.step === 3 && (this.play())}    
        </>
        )

    }
}

export default NewGame;
