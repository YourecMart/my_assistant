
import React, { useState } from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const SpeechModule: React.FC = () => {

    const { transcript, resetTranscript, listening} = useSpeechRecognition({
        
    });
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }
    return (
        <div>
            <p>Mic: {listening ? 'on' : 'off'}</p>
            <button onClick={() => SpeechRecognition.startListening()}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
    </div>
    );
}



export default SpeechModule




