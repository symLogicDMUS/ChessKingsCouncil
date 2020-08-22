import React from "react";
import {PickType} from "./PickType/PickType";
import {PickName} from "./PickName/PickName";
import {Customize} from "./Customize/Customize";
import { Redirect } from "react-router-dom";
import { PlayAs } from "./PlayAs/PlayAs";
import {newData, ranges, enemyRanges, moves, status, id_dict, piece_defs, standard_promo_ids} from "./NewData";
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
        this.dataDict = JSON.parse(JSON.stringify(this.props.dataDict));
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
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData));
        this.dataDict[this.gameName]['pt'] = JSON.parse(JSON.stringify(this.playerType));
        this.dataDict[this.gameName]['type'] = JSON.parse(JSON.stringify(this.gameType));
        this.dataDict[this.gameName]['promos'] = JSON.parse(JSON.stringify(standard_promo_ids));
        this.dataDict[this.gameName]['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.dataDict[this.gameName]['piece_defs'] = JSON.parse(JSON.stringify(piece_defs));

        this.dataDict[this.gameName]['moves'] = JSON.parse(JSON.stringify(moves));
        this.dataDict[this.gameName]['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.dataDict[this.gameName]['enemy_ranges'] = JSON.parse(JSON.stringify(enemyRanges));
        this.dataDict[this.gameName]['status'] = JSON.parse(JSON.stringify(status));
    }

    loadNewCouncil() {
        /**Not yet implemented to be different */
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData));
        this.dataDict[this.gameName]['pt'] = JSON.parse(JSON.stringify(this.playerType));
        this.dataDict[this.gameName]['type'] = JSON.parse(JSON.stringify(this.gameType));
        this.dataDict[this.gameName]['promos'] = JSON.parse(JSON.stringify(standard_promo_ids));
        this.dataDict[this.gameName]['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.dataDict[this.gameName]['piece_defs'] = JSON.parse(JSON.stringify(piece_defs));

        this.dataDict[this.gameName]['moves'] = JSON.parse(JSON.stringify(moves));
        this.dataDict[this.gameName]['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.dataDict[this.gameName]['enemy_ranges'] = JSON.parse(JSON.stringify(enemyRanges));
        this.dataDict[this.gameName]['status'] = JSON.parse(JSON.stringify(status));

    }

    loadNewCustom(idDict, promos) {
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
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData)); //1.
        this.dataDict[this.gameName]['pt'] = JSON.parse(JSON.stringify(this.playerType)); //2.
        this.dataDict[this.gameName]['type'] = JSON.parse(JSON.stringify(this.gameType));
        this.dataDict[this.gameName]['promos'] = promos; //4.
        this.dataDict[this.gameName]['id_dict'] = idDict; //4.
        this.dataDict[this.gameName]['piece_defs'] = {}; //4.
        for (var name of Object.values(idDict)) {
            this.dataDict[this.gameName]['piece_defs'][name] = this.props.defs[name]; //4.
        }
        let payload = this.formatPayloadAsObject(); //5.
        fetch('/update', { //6.
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(response => response.json())
        .then(dataEntry => {
            this.dataDict[this.gameName]['moves'] = dataEntry['moves'];
            this.dataDict[this.gameName]['ranges'] = dataEntry['ranges'];
            this.dataDict[this.gameName]['enemy_ranges'] = dataEntry['enemy_ranges'];
            this.dataDict[this.gameName]['status'] = dataEntry['status'];
            this.nextStep();
        });
    }

    formatPayloadAsObject() {
        /**return data that the backend needs to get more information on this game, together as an object*/
        return { "user":this.props.username,
                 "color":"W",
                 "board":this.dataDict[this.gameName]['board'], 
                 "records":this.dataDict[this.gameName]['records'],
                 "pt":this.dataDict[this.gameName]['pt'],
                 "id_dict":this.dataDict[this.gameName]['id_dict'],
                 "piece_defs":this.dataDict[this.gameName]['piece_defs']
                } 
    }


    getGameSetup() {

        if (this.gameType === "standard")
            return <PlayAs setPlayer={this.setPlayerType} nextStep={this.nextStep} loadNew={this.loadNewStandard}/>

        if (this.gameType === "custom")
            return <Customize defs={this.props.defs} loadNewCustom={this.loadNewCustom} setPlayer={this.setPlayerType} nextStep={this.nextStep} />

        if (this.gameType === "council")
            return <PlayAs setPlayer={this.setPlayerType} nextStep={this.nextStep} loadNew={this.loadNewCouncil}/>

    }

    play() {
        return <Redirect to={{ pathname:"/NewGame/Play",
                               state: {currentPage:"/NewGame/Play",
                                       username:JSON.parse(JSON.stringify(this.props.username)),
                                       gameName:JSON.parse(JSON.stringify(this.gameName)),
                                       gameType:JSON.parse(JSON.stringify(this.gameType)),
                                       playerType:JSON.parse(JSON.stringify(this.playerType)),
                                       dataEntry:JSON.parse(JSON.stringify(this.dataDict[this.gameName])),
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
