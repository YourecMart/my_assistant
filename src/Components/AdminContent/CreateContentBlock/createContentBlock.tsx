
import React, { useState } from 'react';
import './createContentBlock.css';
import { Button, Modal, InputGroup, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropertyBtnEl from './PropertyBtnEl/propertyBtnEl';
import CubePreviewEl from './CubePreviewEl/cubePreviewEl';
import ICubeButton from "./CubePreviewEl/cubePreviewEl"


const CreateContentBlock: React.FC = () => {
    const [buttons, setButtons] = useState<{
        text: string;
        color: string;
    }[]>([])
    const [modal, setModal] = useState(false)
    const [buttonText, setButtonText] = useState('')
    const toggle = () => setModal(!modal)

    const removeButton = (index: number) => {
        console.log(buttons);
        let btnsClone = [...buttons].filter((v,i) => i !== index )
        setButtons(btnsClone)
    }
   const handleBtnColor = (buttons: any[]) => {
    setButtons(buttons)
   }

    return (
        <div className={'AdmPageCreateContent-wrapper'}>
            <div className={'AdmPageAddContent-wrapper'}>
                <div>
                    <h6 style={{ fontSize: '28px' }}>Функционал кубика</h6>
                </div>
                <div className={'AdmPageAddContentActions'}>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <p style={{ color: 'gray' }}>Текст кнопки</p>
                            <p style={{ color: 'gray' }}>Цвет</p>
                        </div>
                        <div className={'AdmPageAddContentButtons'}>
                            {
                                buttons.length ? buttons.map((button, index) =>
                                    <div style={{display: 'flex', gap: '10px' }}>
                                        <div>
                                            <div className='ContentButton'>
                                                {button.text}
                                            </div>
                                            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                                <a>
                                                 редактировать
                                                    </a>
                                                <p style={{cursor: 'pointer'}} onClick={()=>removeButton(index)}>удалить</p>
                                            </div>
                                        </div>
                                        <PropertyBtnEl onColorChange={handleBtnColor} buttons = {buttons} buttonIndex = {index}/>
                                    </div>

                                )
                                    :
                                    <></>
                            }
                        </div>

                        <Button color={'white'}
                            style={{ width: '200px', border: '2px solid black', marginTop: '5px' }}
                            onClick={toggle}
                            disabled={buttons.length < 5 ? false : true}
                        >
                            Добавить кнопку
                        </Button>
                        <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle}>Добавление кнопки</ModalHeader>
                            <ModalBody>
                                <InputGroup>
                                    <Input placeholder={'Текс плашки'} value={buttonText} onChange={(e) => setButtonText(e.target.value)} />
                                </InputGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={() => {
                                    if (buttonText) {
                                        let button = {
                                            text: buttonText,
                                            color:  '#8C69D6',
                                          
                                        }
                                        setButtonText('')
                                        
                                        setButtons([...buttons, button])
                                        toggle()
                                    }
                                }}>
                                    Добавить
                                </Button>
                                <Button color="secondary" onClick={() => {
                                    setButtonText('')
                                    toggle()
                                }}>
                                    Закрыть
                                </Button>
                            </ModalFooter>
                        </Modal>

                    </div>
                    <div>
              
                    </div>
                </div>
            </div>
            <div>
                <CubePreviewEl buttons={buttons} />
            </div>
        </div>
    );
}

export default CreateContentBlock




