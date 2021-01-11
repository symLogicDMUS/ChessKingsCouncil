import React, {useState, useCallback} from 'react';
import {Container} from './Container';
import CustomDragLayer from './CustomDragLayer';

export const Example = ({gameroot}) => {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false);
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);
    return (
        <div>
            <Container snapToGrid={snapToGridAfterDrop} gameroot={gameroot}/>
            <CustomDragLayer snapToGrid={snapToGridWhileDragging}/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                border: '1px dashed #b1faae',
                position: "absolute",
                width: 200,
                top: 512,
                left: 0,
            }}>
                <label htmlFor="snapToGridWhileDragging">
                    <input id="snapToGridWhileDragging" type="checkbox" checked={snapToGridWhileDragging}
                           onChange={handleSnapToGridWhileDraggingChange}/>
                    <small style={{color: 'white'}}>Snap to grid while dragging</small>
                </label>
                <br/>
                <label htmlFor="snapToGridAfterDrop">
                    <input id="snapToGridAfterDrop" type="checkbox" checked={true}
                           onChange={handleSnapToGridAfterDropChange}/>
                    <small style={{color: 'white'}}>Snap to grid after drop</small>
                </label>
            </div>
        </div>);
};
