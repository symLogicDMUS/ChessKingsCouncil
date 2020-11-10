import React from "react";
import "./ScrollTable.scss";

export class ScrollTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { start: 0, bValue: true };
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
    }

    getDisplayList() {
        const displayList = [];
        for (let i = this.state.start; i < this.props.listItems.length; i++) {
            displayList.push(
                <div className={`scroll-table-item${i + 1}`} fontStyleObject={this.props.fontStyleObject}>
                    {this.props.listItems[i]}
                </div>
            );
        }
        if (displayList.length < 5) {
            for (let i = displayList.length; i < 5; i++) {
                displayList.push(
                    <div className={`scroll-table-item${i + 1}`} fontStyleObject={this.props.fontStyleObject}>
                        {null}
                    </div>
                );
            }
        }
        return displayList;
    }

    moveUp() {
        if (this.state.start > 0) {
            this.setState({ start: this.state.start - 1 });
        }
    }

    moveDown() {
        if (this.state.start < this.props.listItems.length - 5) {
            this.setState({ start: this.state.start + 1 });
        }
    }

    render() {
        return (
            <div className={this.props.className} style={this.props.objectStyle}>
                <div className="up-arrow" onClick={this.moveUp}>
                    <img src="/Images/arrows/up-arrow.svg" className="scroll-arrow" />
                </div>
                {this.getDisplayList()}
                <div className="down-arrow" onClick={this.moveDown}>
                    <img src="/Images/arrows/down-arrow.svg" className="scroll-arrow" />
                </div>
            </div>
        );
    }
}
