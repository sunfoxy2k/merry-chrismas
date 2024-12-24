import React, { useState, useEffect } from 'react';

interface TypingWrapperProps {
    text: string[];
    speed?: number;
}

const TypingWrapper: React.FC<TypingWrapperProps> = ({ text, speed = 300 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text[0].substring(0, index));
            if (index === text.length) {
                clearInterval(interval);
            }            
            index++;

        }, speed);
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval)
        }
    }, []);

    return (
        <h1 className="text-7xl text-white">
            {displayedText}
            {displayedText != text[0] && showCursor && <span>_</span>}
        </h1>
    );
};

export default TypingWrapper;