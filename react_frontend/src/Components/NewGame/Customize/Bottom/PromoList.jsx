import React from "react";
import { PromoListScrollArrow } from "./PromoListScrollArrow";
import "./PromoList.css";


export class PromoList extends React.Component {

    constructor(props) {
    
        super(props);
        this.state = {bValue: true};
        this.aboveView = this.props.aboveView;
        this.inView = this.props.inView;
        this.belowView = this.props.belowView;
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
    }
    
    moveUp() {
        if (this.props.belowView.length !== 0) {
            let firstIn = this.props.inView.shift();
            this.props.aboveView.push(firstIn);
            let firstBelow = this.props.belowView.shift();
            this.props.inView.push(firstBelow);    
        }
        this.setState({bValue: ! this.state.bValue})
    }
    
    moveDown() {
        if (this.props.aboveView.length !== 0) {
            let firstAbove = this.props.aboveView.pop();
            this.props.inView.unshift(firstAbove);
            let lastIn = this.props.inView.pop();
            this.props.belowView.unshift(lastIn);    
        }
        this.setState({bValue: ! this.state.bValue})
    }
    
    render() {

        return (
            <div className="new-game-promo-list">
                <PromoListScrollArrow class_="promo-list-up-arrow" move={this.moveUp} />
                <div className="promo-list-item p-list-item1">{this.props.inView[0]}</div>
                <div className="promo-list-item p-list-item2">{this.props.inView[1]}</div>
                <div className="promo-list-item p-list-item3">{this.props.inView[2]}</div>
                <div className="promo-list-item p-list-item4">{this.props.inView[3]}</div>
                <div className="promo-list-item p-list-item5">{this.props.inView[4]}</div>
                <PromoListScrollArrow class_="promo-list-down-arrow" move={this.moveDown} />
            </div>
        )
    }
}


