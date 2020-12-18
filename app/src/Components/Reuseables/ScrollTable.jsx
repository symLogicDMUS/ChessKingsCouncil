import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {styles} from "./ScrollTable.jss";

class ScrollTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true};
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
        this.setState({bValue: !this.state.bValue});
    }

    moveDown() {
        if (this.aboveView.length !== 0) {
            let firstAbove = this.aboveView.pop();
            this.inView.unshift(firstAbove);
            let lastIn = this.inView.pop();
            this.belowView.unshift(lastIn);
        }
        this.setState({bValue: !this.state.bValue});
    }

    render() {
        if (this.props.listItems !== this.listItems) {
            this.reset();
            this.divideList();
        }

        return (
            <div className={this.props.classes.scroll_table}>
                {this.props.title && (<Box className={this.props.classes.title}>{this.props.title}</Box>)}
                <Button
                    onClick={this.moveDown}
                    variant="outlined"
                    fullWidth={true}
                    className={this.props.classes.arrow_button}
                    style={{
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderBottom: '0.05em solid #2b2b2b'
                    }}
                    disableElevation={true}
                >
                    <ArrowDropUpIcon/>
                </Button>
                <Typography className={this.props.classes.list_item_odd} noWrap={true}>{this.inView[0]}</Typography>
                <Typography className={this.props.classes.list_item_even} noWrap={true}>{this.inView[1]}</Typography>
                <Typography className={this.props.classes.list_item_odd} noWrap={true}>{this.inView[2]}</Typography>
                <Typography className={this.props.classes.list_item_even} noWrap={true}>{this.inView[3]}</Typography>
                <Typography className={this.props.classes.list_item_odd} noWrap={true}>{this.inView[4]}</Typography>
                <Button
                    onClick={this.moveDown}
                    variant="outlined"
                    fullWidth={true}
                    disableElevation={true}
                    className={this.props.classes.arrow_button}
                    style={{borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTop: '0.05em solid #2b2b2b'}}
                >
                    <ArrowDropDownIcon/>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(ScrollTable);
