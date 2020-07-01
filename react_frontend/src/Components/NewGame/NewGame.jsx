import React from "react";
import {PickType} from "./PickType/PickType";
import {PickName} from "./PickName/PickName";
import {GameRoot} from "../GameRoot/GameRoot";
import {Customize} from "./Customize/Customize"
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
        this.dataDict = this.props.dataDict;
        this.state = {step: 0};
        this.gameName = "none";
        this.gameType = "none";
        this.rangeDefs = {};
        this.comp = null;
        this.council = false;
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
        this.dataDict[this.gameName] = this.dataDict["New"];
        this.setState({step: this.state.step + 1});
    }

    loadNewCouncil() {
        this.dataDict[this.gameName] = this.dataDict["NewCouncil"];
        this.setState({step: this.state.step + 1});        
    }

    loadNewCustom(idDict) {
        /**
         * load the data for new-game but then change the idDict to
         * one chosen by customise. note: unlike loadNewCouncil and 
         * loadNewStandard,loadNewCustom is called from child.
         */
        this.dataDict[this.gameName] = this.dataDict["New"];
        this.dataDict[this.gameName]['id_dict'] = idDict;
        this.setState({step: this.state.step + 1});
    }

    createGame() {
        switch(this.gameType) {
            case "standard":
                this.loadNewStandard();
                this.comp = <div>If reading this then the program paused or setState didn't trigger render</div>
                break;
            case "custom":
                this.comp = <Customize defs={this.props.defs} loadNewCustom={this.loadNewCustom} />
                break;
            case "council":
                this.loadNewCouncil();
                this.comp = <div>If reading this then the program paused setState didn't trigger render</div>
                break;
            default:
                this.comp = <div>Invalid Game Type</div>
                break;
        }
    }

    setRangeDefs() {
        Object.keys(this.props.defs).forEach(name => {
            this.rangeDefs[name] = this.props.defs[name]
        })
        this.setState({step: this.state.step + 1});
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
                this.setRangeDefs();
                break;
            case 4:
                this.comp = <GameRoot dataEntry={this.dataDict[this.gameName]} rangeDefs={this.rangeDefs} isCouncil={this.council} />
                break;
            default:
                this.comp = <div>Error in NewGame</div>
                break
        }

        return this.comp;
    }
}

export default NewGame;
