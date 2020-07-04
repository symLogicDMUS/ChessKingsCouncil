import React from "react";
import {PickType} from "./PickType/PickType";
import {PickName} from "./PickName/PickName";
import GameRoot from "../GameRoot/GameRoot";
import {Customize} from "./Customize/Customize";
import {newData, ranges, moves, id_dict, range_defs} from "./NewData";
import { Redirect, Link } from "react-router-dom";
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
        this.rangeDefs = {};
        this.comp = null;
        this.council = false;
        this.turn = null;
        this.setType = this.setType.bind(this);
        this.setName = this.setName.bind(this);
        this.loadNewCustom = this.loadNewCustom.bind(this);
    }

    componentDidMount() {
        document.body.className = "new-game-body";
    }

    setType(type) {
        this.gameType = type
        this.setState({step: this.state.step + 1})
    }

    setName(name) {
        this.gameName = name
        this.setState({step: this.state.step + 1})
    }

    loadNewStandard() {
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData));
        this.dataDict[this.gameName]['moves'] = JSON.parse(JSON.stringify(moves));
        this.dataDict[this.gameName]['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.dataDict[this.gameName]['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.dataDict[this.gameName]['defs'] = JSON.parse(JSON.stringify(range_defs));
        this.setState({step: this.state.step + 1});
    }

    loadNewCouncil() {
        /**Not yet implemented to be different */
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData));
        this.dataDict[this.gameName]['moves'] = JSON.parse(JSON.stringify(moves));
        this.dataDict[this.gameName]['ranges'] = JSON.parse(JSON.stringify(ranges));
        this.dataDict[this.gameName]['id_dict'] = JSON.parse(JSON.stringify(id_dict));
        this.dataDict[this.gameName]['defs'] = JSON.parse(JSON.stringify(range_defs));
        this.setState({step: this.state.step + 1});
    }

    loadNewCustom(idDict, promos) {
        /**
         * load the data for new-game but then change the idDict to
         * one chosen by customise. note: unlike loadNewCouncil and 
         * loadNewStandard,loadNewCustom is called from child.
         */
        
        //set data that is same for any new game: 
        this.dataDict[this.gameName] = JSON.parse(JSON.stringify(newData));

        //set data that is unique to this new game:
        this.dataDict[this.gameName]['id_dict'] = idDict;
        this.dataDict[this.gameName]['promo_choices'] = promos;
        this.dataDict[this.gameName]['defs'] = {};
        for (var name of Object.values(idDict)) {
            this.dataDict[this.gameName]['defs'][name] = this.props.defs[name];
        }

        //get the starting ranges for our custom new game from the backend, then update state:
        let payload = this.getPayload();
        fetch('/update', {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(response => response.json())
        .then(dataEntry => {
            this.dataDict[this.gameName]['ranges'] = dataEntry['ranges'];
            this.dataDict[this.gameName]['moves'] = dataEntry['moves'];  
            this.props.updateDataDict(this.dataDict, this.gameName);
            this.setState({step: this.state.step + 1});
        });
    }

    getPayload() {
        return { "color":"W",
                 "board":this.dataDict[this.gameName]['board'], 
                 "records":this.dataDict[this.gameName]['records'],
                 "defs":{"range_defs":this.dataDict[this.gameName]['defs'], 
                         "id_dict":this.dataDict[this.gameName]['id_dict'] } }
    }

    createGame() {
        switch(this.gameType) {
            case "standard":
                this.loadNewStandard();
                this.comp = <div>If reading this than the program is paused or setState didn't trigger render</div>
                break;
            case "custom":
                this.comp = <Customize defs={this.props.defs} loadNewCustom={this.loadNewCustom} />
                break;
            case "council":
                this.loadNewCouncil();
                this.comp = <div>If reading this than the program is paused or setState didn't trigger render</div>
                break;
            default:
                this.comp = <div>Invalid Game Type</div>
                break;
        }
    }

    render() {
        switch(this.state.step) {
            case 0:
                this.comp = <PickType setType={this.setType} />
                break;
            case 1:
                this.comp = <PickName setName={this.setName} />
                break;
            case 2:
                this.createGame();
                break;
            case 3:
                //this.comp = <GameRoot gameName={this.gameName} dataEntry={this.dataDict[this.gameName]} isCouncil={this.council} />
                this.comp = <Redirect to={{
                             pathname:"/NewGame/Play",
                             state: {gameName: this.gameName, 
                                     dataEntry:this.dataDict[this.gameName], 
                                     isCouncil:this.council}
                            }} />
                break;
            default:
                this.comp = <div>Error in NewGame</div>
                break
        }

        return this.comp;
    }
}

export default NewGame;
