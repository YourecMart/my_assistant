
import React, { useState } from 'react';
import './cubePreviewEl.css'


import { Button, Modal, InputGroup, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export interface ICubeButton{
    text: string;
    color: string;
}
export interface ICubePreviewEl{
    buttons: ICubeButton[]
}
const CubePreviewEl: React.FC<ICubePreviewEl> = ({buttons}) => {

    return (
        <div className={'AdmPageExample-wrapper'}>
        
            <div>
                {
                    buttons && buttons.map(button => {
                


                       return <div className='cube_hint' style={{ backgroundColor: `${button.color}`}}>{button.text}</div>
                    })
                }
            </div>
            <img className='cube' src={require('./img.png')}/>
        </div>

    );
}

export default CubePreviewEl




