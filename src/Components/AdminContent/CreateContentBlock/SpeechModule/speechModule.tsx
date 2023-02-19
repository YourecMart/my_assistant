
import React, { useState } from 'react';
import './speechModule.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from 'reactstrap';


const SpeechModule: React.FC = () => {

    const { transcript, resetTranscript, listening } = useSpeechRecognition({

    });
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }
    return (
        <div>
            {
                listening
                    ?
                   
                        <svg  style={{display:'flex', justifyContent: 'center', margin: '0 auto'}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 12C18 15.3137 15.3137 18 12 18M12 18C8.68629 18 6 15.3137 6 12M12 18V21M12 21H15M12 21H9M15 6V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                  
                    :
                  
                        <svg style={{display:'flex', justifyContent: 'center', margin: '0 auto'}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.40137 4.5C9.92008 3.6033 10.8896 3 12 3C13.6569 3 15 4.34315 15 6V10M18 12C18 12.3407 17.9716 12.6748 17.9171 13M3 3L21 21M12 18C8.68629 18 6 15.3137 6 12M12 18C12.3407 18 12.6748 17.9716 13 17.917M12 18V21M12 21H15M12 21H9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                  
            }
            <p style={{display:'flex', justifyContent: 'center', margin: '0 auto'}}>Mic: {listening ? 'on' : 'off'}</p>
            <Button  outline className='speech_module_btn' onClick={() => SpeechRecognition.startListening()}>Запись</Button>
            <Button  outline className='speech_module_btn' onClick={SpeechRecognition.stopListening}>Стоп</Button>
            <Button  outline className='speech_module_btn' onClick={resetTranscript}>Отчистить</Button>
            <p>{transcript}</p>
        </div>
    );
}



export default SpeechModule




