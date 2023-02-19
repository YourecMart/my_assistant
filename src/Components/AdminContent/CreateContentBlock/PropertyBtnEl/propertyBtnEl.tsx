
import React, { useState } from 'react';
import './propertyBtnEl.css';
import { ICubeButton } from '../CubePreviewEl/cubePreviewEl';

interface IPropertBtnEl{
    onColorChange: Function
    buttons: ICubeButton[]
    buttonIndex: number;
}

const PropertyBtnEl: React.FC<IPropertBtnEl> = ({onColorChange, buttons, buttonIndex}) => {
    const [isLeftBtnActive, setIsLeftBtnActive] = useState(true)

    const handleColorChange = (isLeftBtnActive: boolean) =>{
        setIsLeftBtnActive(isLeftBtnActive)
        let buttons_copy = [...buttons]
        if (isLeftBtnActive) {
            buttons_copy[buttonIndex].color = '#8C69D6'
        } else buttons_copy[buttonIndex].color = '#FAA619'
        onColorChange(buttons_copy)
        
    }
    return (
        <div className='AdmPagePropertyButtons'>

                    <div style={{ display: 'flex', gap: '5px' }}>
                        <button className={`color__btn${isLeftBtnActive ? '_active': ''}`}
                            style={{ backgroundColor: '#8C69D6' }}
                            onClick={() => handleColorChange(true)}
                        />
                        <button className={`color__btn${isLeftBtnActive ? '': '_active'}`}
                            style={{ backgroundColor: '#FAA619' }}
                            onClick={() => handleColorChange(false)}                       
                        />
                    </div>
        </div>
    );
}

export default PropertyBtnEl




