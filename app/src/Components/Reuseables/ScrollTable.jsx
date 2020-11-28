import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "./ScrollTable.jss";

class ScrollTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bValue: true };
        this.listItems = this.props.listItems;
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];

        this.divideList();

        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
    }

    reset() {
        this.listItems = this.props.listItems;
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
    }

    divideList() {
        let remaining = 0;
        if (this.props.listItems.length > 5) {
            remaining = this.props.listItems.length - 5;
            let lenTop = Math.floor(remaining / 2);
            for (let i = 0; i < lenTop; i++) {
                this.aboveView.push(this.props.listItems[i]);
            }
            let current = lenTop;
            for (let i = 0; i < 5; i++) {
                this.inView.push(this.props.listItems[current]);
                current++;
            }
            for (let i = current; i < this.props.listItems.length; i++) {
                this.belowView.push(this.props.listItems[i]);
            }
        } else this.inView = this.props.listItems;
    }

    moveUp() {
        if (this.belowView.length !== 0) {
            let firstIn = this.inView.shift();
            this.aboveView.push(firstIn);
            let firstBelow = this.belowView.shift();
            this.inView.push(firstBelow);
        }
        this.setState({ bValue: !this.state.bValue });
    }

    moveDown() {
        if (this.aboveView.length !== 0) {
            let firstAbove = this.aboveView.pop();
            this.inView.unshift(firstAbove);
            let lastIn = this.inView.pop();
            this.belowView.unshift(lastIn);
        }
        this.setState({ bValue: !this.state.bValue });
    }

    render() {
        if (this.props.listItems !== this.listItems) {
            this.reset();
            this.divideList();
        }

        return (
            <div className={this.props.classes.scrollTable}>
                <div className={this.props.classes.upArrow} onClick={this.moveUp}>
                    <img src="/Images/arrows/up-arrow.svg" className={this.props.classes.arrowImg} />
                </div>
                <div className={this.props.classes.item1}>
                    {this.inView[0]}
                </div>
                <div className={this.props.classes.item2}>
                    {this.inView[1]}
                </div>
                <div className={this.props.classes.item3}>
                    {this.inView[2]}
                </div>
                <div className={this.props.classes.item4}>
                    {this.inView[3]}
                </div>
                <div className={this.props.classes.item5}>
                    {this.inView[4]}
                </div>
                <div className={this.props.classes.downArrow} onClick={this.moveDown}>
                    <img src="/Images/arrows/down-arrow.svg" className={this.props.classes.arrowImg} />
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(ScrollTable)