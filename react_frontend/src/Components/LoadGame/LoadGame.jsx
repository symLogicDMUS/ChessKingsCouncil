import React from "react";
import "../../../Images/Misc/parchment button.svg";
import "./LoadGame.css";
import {SelectGame} from "./SelectGame";
import {GameRoot} from "../GameRoot/GameRoot";


export class LoadGame extends React.Component {

  constructor(props) {
    super(props)
    this.changeName = this.changeName.bind(this)
    this.setReady = this.setReady.bind(this)
    this.state = {gameName: "none", ready:false, loaded:false}
    this.selected = false; //refrenced by child
    this.dataEntry = "-"; //Entry in game data dict
    this.pieceDefs = "-"; 
    this.setGames();
  }

  componentDidMount() {
    document.body.className = "load-game-body";
  }

  changeName(name) {
    if (name == "choose") {
      this.selected = false; //refrenced by child
      this.setState({gameName: "none"})
    }
    else {
      this.selected = true; //referenced by child
      this.setState({gameName: name})
    }
  }

  setGames() {
    this.games = [<option value="choose">Choose...</option>]
    for (var gameName of Object.keys(this.props.dataDict)) {
      this.games.push(<option value={gameName}>{gameName}</option>)
    }    
  }

  /**
   * use names of pieces to get objects
   * @param {*} dataEntry: Json from backend
   */
  getPieceDefs(dataEntry) {
    let pieceNames = dataEntry['def_names']
    let pieceDefs = [];
    for (var name of pieceNames) {
      pieceDefs.push(this.props.defs[name])
    }
    return pieceDefs;
  }

  setReady() {
    this.setState({ready: true})
  }

  load() {
    //dataEntry is json from backend
    this.dataEntry = this.props.dataDict[this.state.gameName];
    //piece defs are ojects defining id and range
    this.pieceDefs = this.getPieceDefs(this.dataEntry)
    this.setState({loaded: true})
  }

  render() {

    if (this.state.ready === false) {
      return <SelectGame onChange={this.changeName} 
                         games={this.games} 
                         selected={this.selected} 
                         setReady={this.setReady} />
    }

    else if (this.state.loaded === false) {
      this.load()
      return <div>Loading...</div>
    }

    else {
      return <GameRoot dataEntry={this.dataEntry} pieceDefs={this.pieceDefs}  />
    }

  }
  
}



export default LoadGame;
