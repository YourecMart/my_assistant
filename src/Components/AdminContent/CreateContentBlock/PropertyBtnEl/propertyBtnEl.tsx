
import React, { useState } from 'react';
import './propertyBtnEl.css';
import { Button } from 'reactstrap';


const PropertyBtnEl: React.FC = () => {
    const [purpleBtnActive, setpurpleBtnActive] = useState(false)
    return (
        <div className='AdmPagePropertyButtons'>

                    <div style={{ display: 'flex', gap: '5px' }}>
                        <Button className='ColorBtn'
                            style={{ backgroundColor: '#8C69D6' }}
                            onClick={() => setpurpleBtnActive(true)}
                            disabled = {purpleBtnActive}
                        />


                        <Button className='ColorBtn'
                            style={{ backgroundColor: '#FAA619' }}
                            onClick={() => setpurpleBtnActive(false)}
                            disabled = {!purpleBtnActive}
                        />
                    </div>
        </div>
    );
}

export default PropertyBtnEl




