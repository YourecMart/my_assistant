
import React, { useState } from 'react';
import './propertyBtnEl.css';

interface IPropertBtnEl{
    onColorChange: any
}

const PropertyBtnEl: React.FC<IPropertBtnEl> = ({onColorChange}) => {
    const [purpleBtnActive, setpurpleBtnActive] = useState(false)
    const handleColorChange = (isPurple: boolean) =>{
        setpurpleBtnActive(isPurple)
        onColorChange(isPurple)
    }
    return (
        <div className='AdmPagePropertyButtons'>

                    <div style={{ display: 'flex', gap: '5px' }}>
                        <button className={`color__btn${purpleBtnActive ? '_active': ''}`}
                            style={{ backgroundColor: '#8C69D6' }}
                            onClick={() => handleColorChange(true)}
                        />
                        <button className={`color__btn${purpleBtnActive ? '': '_active'}`}
                            style={{ backgroundColor: '#FAA619' }}
                            onClick={() => handleColorChange(false)}                       
                        />
                    </div>
        </div>
    );
}

export default PropertyBtnEl




