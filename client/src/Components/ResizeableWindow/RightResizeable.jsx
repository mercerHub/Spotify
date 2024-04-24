import React, { useState, useEffect } from 'react';
import CardL1 from '../Cards/CardL1';
import CardL2 from '../Cards/CardL2';
import CardFoot from '../Cards/CardFoot';

const RightResizable = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [width, setWidth] = useState(350); // Initial width

    const handleMouseDown = () => setIsDragging(true);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isDragging) {
                const newWidth = event.clientX; // Use clientX for simplicity, adjust as needed
                setWidth(newWidth);
            }
        };

        const handleMouseUp = () => setIsDragging(false);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]); // Dependency on isDragging to add/remove event listeners

    return (
        <div className="resizableElement" style={{ width: `${Math.min(Math.max(350,width),600)}px` }}>
            <div className='min-w-50 h-full p-3 border-r-2 border-gray-800 flex flex-col'>
                <CardL1/>
                <CardL2/>
                <CardFoot/>
            </div>
            <div className='resizeBar' onMouseDown={handleMouseDown}></div>
        </div>
    );
};

export default RightResizable;
