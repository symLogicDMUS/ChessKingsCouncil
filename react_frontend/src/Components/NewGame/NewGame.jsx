import React from "react";
import {PickType} from "./PickType/PickType";
import {PickName} from "./PickName/PickName";
import {Customize} from "./Customize/Customize";
import { Redirect } from "react-router-dom";
import { PlayAs } from "./PlayAs/PlayAs";
import {newData, ranges, enemyRanges, moves, status, id_dict, range_defs} from "./NewData";
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
        this.rangeDefs = {};
        this.comp = null;
        this.council = false;
        this.turn = null;
        this.nextStep = this.nextStep.bind(this);
        this.setType = this.setType.bind(this);
        this.setName = this.setName.bind(this);
        this.setPlayer = this.setPlayer.bind(this);
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

    setType(type) {
        this.gameType = type;
    }

    setName(name) {
        this.gameName = name;
    }

    setPlayer(playerType) {
        this.playerType = playerType;
    }

    loadNewStandard() {
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData));
        this.dataDict[this.gameName]['moves'] = JSON.parse(JSON.stringify(moves));
        this.dataDict[this.gameName]['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.dataDict[this.gameName]['enemy_ranges'] = JSON.parse(JSON.stringify(enemyRanges));
        this.dataDict[this.gameName]['status'] = JSON.parse(JSON.stringify(status));
        this.dataDict[this.gameName]['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.dataDict[this.gameName]['defs'] = JSON.parse(JSON.stringify(range_defs));
        this.dataDict[this.gameName]['player_type'] = JSON.parse(JSON.stringify(this.playerType));
    }

    loadNewCouncil() {
        /**Not yet implemented to be different */
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData));
        this.dataDict[this.gameName]['moves'] = JSON.parse(JSON.stringify(moves));
        this.dataDict[this.gameName]['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.dataDict[this.gameName]['enemy_ranges'] = JSON.parse(JSON.stringify(enemyRanges));
        this.dataDict[this.gameName]['status'] = JSON.parse(JSON.stringify(status));
        this.dataDict[this.gameName]['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.dataDict[this.gameName]['defs'] = JSON.parse(JSON.stringify(range_defs));
        this.dataDict[this.gameName]['player_type'] = JSON.parse(JSON.stringify(this.playerType));
    }

    

    loadNewCustom(idDict, promos) {
        /**
         * load the data for new-game but then change the idDict to
         * one chosen by customise. note: unlike loadNewCouncil and 
         * loadNewStandard,loadNewCustom is called from child.
         * 
         * 1. set data that is same for any new game
         * 2. set what the player will play as: W, B, or test
         * 3. set data that is unique to this game.
         * 4. get the starting ranges for our custom new game from the backend, then update state
         */
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData)); //1.
        this.dataDict[this.gameName]['player_type'] = JSON.parse(JSON.stringify(this.playerType)); //2.
        this.dataDict[this.gameName]['id_dict'] = idDict; //3.
        this.dataDict[this.gameName]['promo_choices'] = promos; //3.
        this.dataDict[this.gameName]['defs'] = {}; //3.
        for (var name of Object.values(idDict)) {
            this.dataDict[this.gameName]['defs'][name] = this.props.defs[name]; //3.
        }
        let payload = this.getPayload(); //4.
        fetch('/update', { //4.
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(response => response.json())
        .then(dataEntry => {
            this.dataDict[this.gameName]['ranges'] = dataEntry['ranges'];
            this.dataDict[this.gameName]['enemy_ranges'] = dataEntry['enemy_ranges'];
            this.dataDict[this.gameName]['moves'] = dataEntry['moves'];
            this.dataDict[this.gameName]['status'] = dataEntry['status'];
            this.props.updateDataDict(this.dataDict, this.gameName);
            this.nextStep();
        });
    }

    getPayload() {
        return { "board":this.dataDict[this.gameName]['board'], 
                 "records":this.dataDict[this.gameName]['records'],
                 "color":"W",
                 "player_type":this.dataDict[this.gameName]['player_type'],
                 "defs":{"range_defs":this.dataDict[this.gameName]['defs'], 
                         "id_dict":this.dataDict[this.gameName]['id_dict'] } }
    }

    getComponent() {

        let comp = null;

        switch(this.state.step) {
            case 0:
                comp = <PickType setType={this.setType} 
                                 nextStep={this.nextStep} />
                break;
            case 1:
                comp = <PickName setName={this.setName} 
                                 nextStep={this.nextStep} />
                break;
            case 2:
                switch(this.gameType) {
                    case "standard":
                        comp = <PlayAs setPlayer={this.setPlayer} 
                                       nextStep={this.nextStep}
                                       loadNew={this.loadNewStandard}
                                />
                        break;
                    case "custom":
                        comp = <Customize defs={this.props.defs} 
                                          loadNewCustom={this.loadNewCustom} 
                                          setPlayer={this.setPlayer} 
                                          nextStep={this.nextStep}  
                                />
                        break;
                    case "council":
                        comp = <PlayAs setPlayer={this.setPlayer} 
                                       nextStep={this.nextStep}
                                       loadNew={this.loadNewCouncil}
                                />
                        break;
                    default:
                        comp = <div>Invalid Game Type</div>
                        break;
                }
                break;
            case 3:
                comp = <Redirect to={{
                             pathname:"/NewGame/Play",
                             state: {gameName:JSON.parse(JSON.stringify(this.gameName)), 
                                     dataEntry:JSON.parse(JSON.stringify(this.dataDict[this.gameName])),
                                     playerType:JSON.parse(JSON.stringify(this.playerType)),
                                     isCouncil:JSON.parse(JSON.stringify(this.council))}
                            }} />
                break;
            default:
                comp = <div>Error in NewGame</div>
                break;
        }

        return comp;

    }

    render() {

        this.comp = this.getComponent();

        return this.comp;
    }
}

export default NewGame;
