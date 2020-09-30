import React from "react";
import "./NewGameRangeTable.css";
import { NewGameScrollArrow } from "./NewGameScrollArrow";


export class NewGameRangeTable extends React.Component {

    constructor(props) {
    
        super(props);
        this.state = {bValue: true};
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
    
        let remaining = 0;
        if (this.props.ranges.length > 5) {
            remaining = this.props.ranges.length - 5;
            let lenTop = Math.floor(remaining / 2);
            for (let i = 0; i < lenTop; i++) {
                this.aboveView.push(this.props.ranges[i])
            }
            let current = lenTop;
            for (let i = 0; i < 5; i++) {
                this.inView.push(this.props.ranges[current]);
                current++;
            }
            for (let i = current; i < this.props.ranges.length; i++) {
                this.belowView.push(this.props.ranges[i]);       
            }
        }
        else 
            this.inView = this.props.ranges;
        
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
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
    
    getLabel(text) {
        if (text === undefined)
            return null;
        if (text.includes("-"))
            return "Span: "
        return "Offset: "
    }
    
    render() {

        return (
            <div className={this.props.table}>
                <NewGameScrollArrow class_={this.props.upArrow} move={this.moveUp} />
                <div className="range-list-item list-item1">{this.getLabel(this.inView[0])}{this.inView[0]}</div>
                <div className="range-list-item list-item2">{this.getLabel(this.inView[1])}{this.inView[1]}</div>
                <div className="range-list-item list-item3">{this.getLabel(this.inView[2])}{this.inView[2]}</div>
                <div className="range-list-item list-item4">{this.getLabel(this.inView[3])}{this.inView[3]}</div>
                <div className="range-list-item list-item5">{this.getLabel(this.inView[4])}{this.inView[4]}</div>
                <NewGameScrollArrow class_={this.props.downArrow} move={this.moveDown} />
            </div>
        )
    }
}


