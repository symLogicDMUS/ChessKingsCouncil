
import React from "react";
import {PickType} from "./PickType/PickType";
import {PickName} from "./PickName/PickName";
import {GameRoot} from "../GameRoot/GameRoot";
import {Customize} from "./Customize/Customize"
// import "./NewGame.css";

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
        this.state = {gameType: "none", gameName: "none", gameData:"none"};
        this.setType = this.setType.bind(this);
        this.setName = this.setName.bind(this);
        this.setData = this.setData.bind(this);
        this.loadIdDict = this.loadIdDict.bind(this);
    }

    setType(type) {
        this.setState({gameType: type})
    }

    setName(name) {
        this.setState({gameName: name})
    }

    setData() {
        this.setState({gameData: this.dataDict[this.state.gameName]})
    }

    loadNewStandard() {
        //"New" is static entry
        this.dataDict[this.state.gameName] = this.dataDict["New"]
        this.setData();
    }

    loadIdDict(idDict) {
        this.dataDict[this.state.gameName]['id_dict'] = idDict;
        this.setData();
    }

    getRangeDefs() {
        let rangeDefs = {};
        Object.values(this.dataDict[this.state.gameName]['id_dict']).forEach(pieceName => {
            rangeDefs[pieceName] = this.props.defs[pieceName];
        })
        return rangeDefs;
    }

    render() {

        if (this.state.gameName === "none") {
            return <PickName setName={this.setName} />
        }

        else if (this.state.gameType === "none") {
            return <PickType setType={this.setType} />
        }

        else if (this.state.gameData === "none") {
            switch(this.state.gameType) {
                case "standard":
                    this.loadNewStandard();
                    break;
                case "custom":
                    this.dataDict[this.state.gameName] = this.dataDict["New"];
                    return <Customize defs={this.props.defs} loadIdDict={this.loadIdDict} />
                case "council":
                    //TODO: include warning that only playing regular chess until standard is implemented
                    this.loadNewStandard() 
                    break;
                default:
                    console.log("invalid game type");
                    break;
            }
        }

        else {
            return <GameRoot dataEntry={this.dataDict[this.state.gameName]} rangeDefs={this.getRangeDefs()} />
        }
    }
}

export default NewGame;

