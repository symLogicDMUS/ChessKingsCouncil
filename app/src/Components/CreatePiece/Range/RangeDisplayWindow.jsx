import React from "react";
import {offsetToText} from "../../helpers/offsetToText";
import {spanToText} from "../../helpers/spanToText";
import {ScrollArrow} from "./ScrollArrow";
import {RangeTable} from "./RangeTable";
import {ShowSpansCheckbox} from "./ShowSpansCheckbox";
import {ShowOffsetsCheckbox} from "./ShowOffsetsCheckbox";
import "./RangeDisplayWindow.css";

export class RangeDisplayWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {bValue: true};
        this.offsets = null;
        this.spans = null;
        this.ranges = [];
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
    }

    splitTopMiddleBottom() {
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
        let remaining = 0;
        if (this.ranges.length > 5) {
            remaining = this.ranges.length - 5;
            let lenTop = Math.floor(remaining / 2);
            for (let i = 0; i < lenTop; i++) {
                this.aboveView.push(this.ranges[i])
            }
            let current = lenTop;
            for (let i = 0; i < 5; i++) {
                this.inView.push(this.ranges[current]);
                current++;
            }
            for (let i = current; i < this.ranges.length; i++) {
                this.belowView.push(this.ranges[i]);       
            }
        }
        else
            this.inView = this.ranges;
    }
    
    setRanges() {
        this.ranges = [];
        this.spans = this.props.spans;
        this.offsets = this.props.offsets;
        for (var span of this.spans) {
            this.ranges.push(spanToText(span));
        }
        for (var offset of this.offsets) {
            this.ranges.push(offsetToText(offset));
        }
        this.splitTopMiddleBottom();
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

        if (this.offsets != this.props.offsets || this.spans != this.props.spans) {
            this.setRanges();
        }

        return (
            <div className="range-display-window">
                <div className="show-spans-label">span text squares</div>
                <ShowSpansCheckbox togleSpanText={this.props.togleSpanText} />
                <div className="show-offsets-label">offset text squares</div>
                <ShowOffsetsCheckbox togleOffsetText={this.props.togleOffsetText} />
                <ScrollArrow id={"up"}   move={this.moveUp} />
                <RangeTable displayList={this.inView} />
                <ScrollArrow id={"down"} move={this.moveDown} />
            </div>
        )
    }
}