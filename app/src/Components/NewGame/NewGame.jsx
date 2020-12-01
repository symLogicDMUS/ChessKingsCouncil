import React from "react";
import { Redirect } from "react-router-dom";
import Customize from "./Customize/Customize";
import PickType from "./PickType/PickType";
import { PickName } from "./PickName/PickName";
import PlayAs from "./PlayAs/PlayAs";
import { firstUpdate } from "../../apiHelpers/firstUpdate";
import { newData, ranges, enemyRanges, moves, status, id_dict, piece_defs, standard_promo_names } from "./NewData";
import { styles } from "./NewGame.jss";

/**
 * NewGame selects what CreatPiece created, then sends it to the backend which
 * assigns ids to piece-names for pieces the player chose for that game. the
 * id:piece-Name arrangement is unique to that game, and is stored in game-Name.defs
 * in the game's folder.
 */
class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { step: "pick-type", gameName: "", gameType: "", playerType: "" };
        this.gameData = {};
        this.setGameType = this.setGameType.bind(this);
        this.setGameName = this.setGameName.bind(this);
        this.loadNewStandard = this.loadNewStandard.bind(this);
        this.loadNewCustom = this.loadNewCustom.bind(this);
    }

    componentDidMount() {
        document.body.className = "new-game-body";
    }

    setGameName(gameName) {
        this.setState({ gameName: gameName, step: "set-game-type" });
    }

    setGameType(type) {
        if (type === "customize") {
            this.setState({ gameType: type, step: "load-new-custom" });
        } else {
            this.setState({ gameType: type, step: "load-new-standard" });
        }
    }

    loadNewCustom(idDict, defs, promos, playerType) {
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
        this.gameData["game_name"] = this.gameName;
        this.gameData["pt"] = playerType; //2.
        this.gameData["type"] = JSON.parse(JSON.stringify(this.gameType));
        this.gameData["promos"] = promos; //4.
        this.gameData["id_dict"] = idDict; //4.
        this.gameData["piece_defs"] = {}; //4.

        let name;
        for (const id of Object.keys(idDict)) {
            if (id !== "k" && id !== "p") {
                name = idDict[id];
                this.gameData["piece_defs"][name] = defs[name]; //4.
            }
        }

        const dataEntry = firstUpdate(
            this.gameData["board"],
            this.gameData["json_records"],
            "W",
            this.gameData["pt"],
            this.gameData["piece_defs"],
            this.gameData["id_dict"]
        );
        this.gameData["moves"] = dataEntry["moves"];
        this.gameData["ranges"] = dataEntry["ranges"];
        this.gameData["enemy_ranges"] = dataEntry["enemy_ranges"];
        this.gameData["status"] = JSON.parse(JSON.stringify(status));

        this.setState({ playerType: playerType, step: "play-game" });
    }

    loadNewStandard(playerType) {
        this.gameData = JSON.parse(JSON.stringify(newData));
        this.gameData["game_name"] = this.gameName;
        this.gameData["pt"] = JSON.parse(JSON.stringify(this.playerType));
        this.gameData["type"] = JSON.parse(JSON.stringify(this.gameType));
        this.gameData["promos"] = JSON.parse(JSON.stringify(standard_promo_names));
        this.gameData["id_dict"] = JSON.parse(JSON.stringify(id_dict));
        this.gameData["piece_defs"] = JSON.parse(JSON.stringify(piece_defs));
        this.gameData["moves"] = JSON.parse(JSON.stringify(moves));
        this.gameData["ranges"] = JSON.parse(JSON.stringify(ranges));
        this.gameData["enemy_ranges"] = JSON.parse(JSON.stringify(enemyRanges));
        this.gameData["status"] = JSON.parse(JSON.stringify(status));
        if (this.gameType === "council") this.gameData.promos.push("King");
        this.setState({ playerType: playerType, step: "play-game" });
    }

    play() {
        return (
            <Redirect
                to={{
                    pathname: "/NewGame/Play",
                    state: {
                        currentPath: "/NewGame/Play",
                        gameName: JSON.parse(JSON.stringify(this.state.gameName)),
                        gameType: JSON.parse(JSON.stringify(this.state.gameType)),
                        playerType: JSON.parse(JSON.stringify(this.state.playerType)),
                        gameData: JSON.parse(JSON.stringify(this.gameData)),
                    },
                }}
            />
        );
    }

    render() {
        return (
            <>
                {this.state.step === "pick-type" && <PickType setType={this.setGameType} />}
                {this.state.step === "pick-name" && <PickName setName={this.setGameName} />}
                {this.state.step === "load-new-standard" && <PlayAs loadNewStandard={this.loadNewStandard} />}
                {this.state.step === "load-new-custom" && <Customize loadNewCustom={this.loadNewCustom} />}
                {this.state.step === "play-game" && this.play()}
            </>
        );
    }
}

export default NewGame;
