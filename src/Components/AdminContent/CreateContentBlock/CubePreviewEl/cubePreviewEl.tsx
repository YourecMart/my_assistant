
import React, { useState } from 'react';
import './cubePreviewEl.css'


import { Button, Modal, InputGroup, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


interface ICubePreviewEl{
    buttons: string[
       
    ]
}
const CubePreviewEl: React.FC<ICubePreviewEl> = ({buttons}) => {
   
    return (
        <div className={'AdmPageExample-wrapper'} style={{width: '401px', height: '252px', borderRadius: '15px', backgroundColor: 'gray' }}>
        
            <div>
                {
                    buttons && buttons.map(button => 
                        <div className='cube_answer'>{button}</div>
                    )
                }
            </div>
            <img className='cube' src={require('./img.png')}/>
        </div>

    );
}

export default CubePreviewEl




