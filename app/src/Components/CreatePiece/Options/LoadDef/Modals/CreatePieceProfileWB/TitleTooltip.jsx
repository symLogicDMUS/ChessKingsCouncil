import React, { useState } from 'react';

class TitleTooltip extends React.Component {

    constructor(props) {
        super(props);
        this.isVisible = null;
        this.show = null;
        this.togleShow = this.togleShow.bind(this);
    }

    togleShow() {
        [this.isVisible, this.show] =  useState(false);
    }

    render() {
        return (
            <div onMouseEnter={() => this.show(true)} onMouseLeave={() => this.show(false)}>

            </div>
            {this.isVisible && this.props.}
        )
    }
}