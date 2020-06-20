import React from "react";

export class Customize extends React.Component {
    
    constructor(props) {
        super(props);
        this.loadNewCustom = this.loadNewCustom.bind(this);
        //names and subs are hardcoded until implement ui for choosing piece:
        this.names = [
        "Jester",
        "Duke",
        "Joker",
        "Morty"
        ]
        this.subs = {"Morty": "Queen", "Joker": "Bishop"}

    }

    async assignIds() {
        let response = await fetch('/assign_ids', {
            method:'POST',
            body:JSON.stringify({"names":this.names, "subs":this.subs})
        });
        let idDict = await response.json();
        return idDict;
    }

    loadNewCustom(dataDict) {
        return Promise.all([this.assignIds()]);
    }

    render() {
        this.loadNewCustom().then( ([idDict]) => this.props.loadNewCustom(idDict))
        return(
            <div>Loading...</div>
        )
    }
}