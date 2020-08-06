import React from "react";
import {SelectGame} from "./SelectGame";
import { Redirect } from "react-router-dom";
import "./LoadGame.css";


export class LoadGame extends React.Component {

    constructor(props) {
        super(props)
        this.state = {gameName: "none", loaded:false, reload: 0}
        this.council = false;
        this.selected = false;
        this.dataEntry = null; 
        this.pieceDefs = null;
        this.changeName = this.changeName.bind(this);
        this.load = this.load.bind(this);
        this.setGames();
    }

  componentDidMount() {
    document.body.className = "load-game-body";

  }

    setGames() {
        this.games = [<option value="choose">Choose...</option>];
        this.props.getDataDict().then( ([dataDict]) => {
            this.props.updateDataDict(dataDict);
            Object.keys(dataDict).forEach(name => {
                this.games.push(<option value={name}>{name}</option>)
            });
            this.setState({gameName: "none", loaded: false, reload: ! this.state.reload});
        })
    }

  changeName(name) {
        if (name === "choose") {
            this.selected = false; //refrenced by child
            this.setState({gameName: "none"})
        }
        else {
            this.selected = true; //referenced by child
            this.setState({gameName: name});
        }
  }

    load() {
        this.dataEntry = this.props.getGame(this.state.gameName);
        this.setState({loaded: true});
    }

  render() {
    if (this.state.loaded === false) {
      return <SelectGame handleChange={this.changeName} 
                         games={this.games} 
                         selected={this.selected} 
                         load={this.load} />
    }

    else {
      return (<Redirect to={{
                pathname:"/LoadGame/Play",
                state: {currentPage:"/LoadGame/Play",
                        gameName:JSON.parse(JSON.stringify(this.state.gameName)),
                        gameType:JSON.parse(JSON.stringify(this.dataEntry['game_type'])),
                        playerType:JSON.parse(JSON.stringify(this.dataEntry['player_type'])),
                        dataEntry:JSON.parse(JSON.stringify(this.dataEntry))
                      }     
              }}/>);
    }
    /** 
     * note: the rangeDefs attribute passed as seperate prop because NewGame passes it is a seperate prop
     * because rangeDefs is not the same for every new game data, it is defined by the user.   
     */
  }
  
}

export default LoadGame;
