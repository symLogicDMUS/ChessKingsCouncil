import React from 'react';
import {useDragLayer} from 'react-dnd';
import { DragLayer } from 'react-dnd'
import {collect} from "./collect";
import {ItemTypes} from "./ItemTypes";
import {PieceDragPreview} from './PieceDragPreview';
import {getItemStyles} from "./getItemStyles";
import {layerStyles} from "./layerStyles.jss";

const CustomDragLayer = (props) => {
    const {itemType, isDragging, item, initialOffset, currentOffset} = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }));

    function renderItem() {
        if (ItemTypes.includes(itemType)) {
            return <PieceDragPreview src={item.src}/>;
        } else {
            return null;
        }
    }

    if (!isDragging) {
        return null;
    }
    return (<div style={layerStyles}>
        <div style={getItemStyles(initialOffset, currentOffset, props.snapToGrid)}>
            {renderItem()}
        </div>
    </div>);
};

export default DragLayer(collect)(CustomDragLayer)