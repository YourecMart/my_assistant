
import React, { useState } from 'react';
import './cubePreviewEl.css'


import { Button, Modal, InputGroup, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export interface ICubeButton{
    text: string;
    isPurple: boolean
}
export interface ICubePreviewEl{
    buttons: ICubeButton[]
}
const CubePreviewEl: React.FC<ICubePreviewEl> = ({buttons}) => {
   
    return (
        <div className={'AdmPageExample-wrapper'}>
        
            <div>
                {
                    buttons && buttons.map(button => 
                        
                            button.isPurple 
                            ?
                            <div className='cube_answer' style={{backgroundColor: '#8C69D6'}}>{button.text}</div>
                            :
                            <div className='cube_answer' style={{backgroundColor: '#FAA619'}}>{button.text}</div>
                    )
                }
            </div>
            <img className='cube' src={require('./img.png')}/>
        </div>

    );
}

export default CubePreviewEl




