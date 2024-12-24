import React, {useEffect, useReducer,  } from 'react';
import { text } from 'stream/consumers';

const CURSOR_INTERVAL_TIEM = 500;
const TEXT_INTERVAL_TIME = 200;

interface TypingWrapperProps {
    textList: string[];
}

interface TypingState {
    displayText: string;
    currentTextIndex: number;
    currentProcessIndex: number;
    cursor: boolean;
    textList: string[];
}

interface Action {
    type: string;
    payload?: {textInterval : number};
}

function handleTextTyping(state: TypingState): TypingState {
    const newState : TypingState = {...state};

    if (state.currentTextIndex < state.textList[state.currentProcessIndex].length) {
        newState.currentTextIndex = state.currentTextIndex + 1;
    } else if (state.currentProcessIndex < state.textList.length - 1) {
        newState.currentProcessIndex = state.currentProcessIndex + 1;
        newState.currentTextIndex = 0;
    } 

    newState.displayText = state.textList[state.currentProcessIndex].slice(0, state.currentTextIndex);
    
    return newState;
}


function reducer(state: TypingState, action: Action): TypingState {
    switch (action.type) {
        case 'cursor':
            return {...state, cursor: !state.cursor};
        case 'text':
            return handleTextTyping(state);
        default:
            return state;
    }
}

const Intro = ({videoRef, setShowStarted, textList}) => {
    const [toClick, setToClick] = React.useState(false);

    if (toClick) {
        return <ClickBtn videoRef={videoRef} setShowStarted={setShowStarted} />
    } else {
        return <TypingWrapper textList={textList} setToClick={setToClick}/>
    }
}

const ClickBtn: React.FC<> = ({videoRef, setShowStarted}) => {

    function onClick() {
        videoRef.current?.play();
        setShowStarted(true);
    }

    return (
        <button 
            onClick={onClick}
            className='text-white bg-red-500 hover:bg-green-700 font-bold py-4 px-8 rounded-full text-2xl'
        >
            LOVE ME & CLICK ME !!!!
        </button>
    )
}


const TypingWrapper: React.FC<TypingWrapperProps> = ({ textList, setToClick, style}) => {
    const [state, dispatch] = useReducer<TypingState, any>(reducer, {
        displayText: '',
        currentTextIndex: 0, 
        currentProcessIndex: 0, 
        textList
    });

    useEffect(() => {
        const cursorInterval =  setInterval(() => {
            dispatch({type: 'cursor'});
        }, CURSOR_INTERVAL_TIEM);

        const textInterval = setInterval(() => {
            dispatch({type: 'text'});
        }, TEXT_INTERVAL_TIME);

        if (state.displayText == textList[textList.length - 1]) {
            setTimeout(() => {
                setToClick(true);
            }, TEXT_INTERVAL_TIME)

            clearInterval(cursorInterval);
            clearInterval(textInterval);
        }

        return () => {
            clearInterval(cursorInterval);
            clearInterval(textInterval)
        }
    }, [state.displayText, textList]);


        return (
            <h1 className="text-7xl text-white" style={style}>
                {state.displayText}
                {state.displayText != textList[textList.length -1]  && <span>_</span>}
            </h1>
        );
};
export {TypingWrapper}

export default Intro;