import React, { useEffect, useState, memo } from 'react';
import { Piece2 } from './Piece2';
const styles = {
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)',
};
export const PieceDragPreview = memo(({ src }) => {
    const [tickTock, setTickTock] = useState(false);
    useEffect(function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500);
        return () => clearInterval(interval);
    }, [tickTock]);
    return (<div style={styles}>
        <Piece2 src={src}/>
    </div>);
});