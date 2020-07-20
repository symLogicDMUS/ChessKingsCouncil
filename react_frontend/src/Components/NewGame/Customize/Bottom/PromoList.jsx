import React from "react";
import { PromoListScrollArrow } from "./PromoListScrollArrow";
import "./PromoList.css";


export class PromoList extends React.Component {

    constructor(props) {
    
        super(props);
        this.state = {bValue: true};
        this.divideList();
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
    }
    
    divideList() {
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
        this.promos = this.props.promos;
        let remaining = 0;
        if (this.promos.length > 5) {
            remaining = this.promos.length - 5;
            let lenTop = Math.floor(remaining / 2);
            for (let i = 0; i < lenTop; i++) {
                this.aboveView.push(this.promos[i])
            }
            let current = lenTop;
            for (let i = 0; i < 5; i++) {
                this.inView.push(this.promos[current]);
                current++;
            }
            for (let i = current; i < this.promos.length; i++) {
                this.belowView.push(this.promos[i]);       
            }
        }
        else 
            this.inView = this.promos;
    }

    moveUp() {
        if (this.belowView.length != 0) {
            let firstIn = this.inView.shift();
            this.aboveView.push(firstIn);
            let firstBelow = this.belowView.shift();
            this.inView.push(firstBelow);    
        }
        this.setState({bValue: ! this.state.bValue})
    }
    
    moveDown() {
        if (this.aboveView.length != 0) {
            let firstAbove = this.aboveView.pop();
            this.inView.unshift(firstAbove);
            let lastIn = this.inView.pop();
            this.belowView.unshift(lastIn);    
        }
        this.setState({bValue: ! this.state.bValue})
    }
    
    render() {

        if (this.promos != this.props.promos)
            this.divideList();

        return (
            <div className="new-game-promo-list">
                <PromoListScrollArrow class_="promo-list-up-arrow" move={this.moveUp} />
                <div className="promo-list-item p-list-item1">{this.inView[0]}</div>
                <div className="promo-list-item p-list-item2">{this.inView[1]}</div>
                <div className="promo-list-item p-list-item3">{this.inView[2]}</div>
                <div className="promo-list-item p-list-item4">{this.inView[3]}</div>
                <div className="promo-list-item p-list-item5">{this.inView[4]}</div>
                <PromoListScrollArrow class_="promo-list-down-arrow" move={this.moveDown} />
            </div>
        )
    }
}


