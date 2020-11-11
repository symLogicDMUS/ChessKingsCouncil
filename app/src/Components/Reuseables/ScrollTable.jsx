import React from "react";
import "./ScrollTable.scss";

export class ScrollTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true};
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
    
        let remaining = 0;
        if (this.props.listItems.length > 5) {
            remaining = this.props.listItems.length - 5;
            let lenTop = Math.floor(remaining / 2);
            for (let i = 0; i < lenTop; i++) {
                this.aboveView.push(this.props.listItems[i])
            }
            let current = lenTop;
            for (let i = 0; i < 5; i++) {
                this.inView.push(this.props.listItems[current]);
                current++;
            }
            for (let i = current; i < this.props.listItems.length; i++) {
                this.belowView.push(this.props.listItems[i]);       
            }
        }
        else 
            this.inView = this.props.listItems;
        
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

    render() {
        return (
            <div className="scroll-table" style={this.props.objectStyle}>
                <div className="up-arrow" onClick={this.moveUp}>
                    <img src="/Images/arrows/up-arrow.svg" className="scroll-arrow-img" />
                </div>
                <div className="scroll-table-item1">{this.inView[0]}</div>
                <div className="scroll-table-item2">{this.inView[1]}</div>
                <div className="scroll-table-item3">{this.inView[2]}</div>
                <div className="scroll-table-item4">{this.inView[3]}</div>
                <div className="scroll-table-item5">{this.inView[4]}</div>
                <div className="down-arrow" onClick={this.moveDown}>
                    <img src="/Images/arrows/down-arrow.svg" className="scroll-arrow-img" />
                </div>
            </div>
        );
    }
}
