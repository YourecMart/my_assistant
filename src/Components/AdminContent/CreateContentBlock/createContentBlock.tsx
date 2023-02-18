
import React, { useState } from 'react';
import './createContentBlock.css';
import { Button, Modal, InputGroup, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropertyBtnEl from './PropertyBtnEl/propertyBtnEl';


const NameSpaceBlock: React.FC = () => {
    const [buttons, setButtons] = useState<string[]>([])
    const [modal, setModal] = useState(false)
    const [buttonText, setButtonText] = useState('')
    
    const toggle = () => setModal(!modal)
    return (
        <div className={'AdmPageCreateContent-wrapper'}>
            <div className={'AdmPageAddContent-wrapper'}>
                <div>
                    <h6 style={{ fontSize: '28px' }}>Функционал кубика</h6>
                </div>
                <div className={'AdmPageAddContentActions'}>
                    <div>
                        <p style={{ color: 'gray' }}>Текст плашки</p>
                        <div className={'AdmPageAddContentButtons'}>
                            {
                                buttons.length ? buttons.map(button =>
                                    <Button color={'white'} style={{ width: '300px', border: '1px solid black' }}>{button}</Button>
                                )
                                    :
                                    <></>
                            }
                        </div>

                        <Button color={'white'}
                            style={{ width: '200px', border: '1px solid black', marginTop: '5px' }}
                            onClick={toggle}
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
                                        setButtonText('')
                                        setButtons([...buttons, buttonText])
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
                        <p style={{ color: 'gray' }}>Свойство</p>
                        <div className={'AdmPageAddPropertyButtons'}>
                            {
                                buttons.map(btn =>
                                  <PropertyBtnEl/>
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={'AdmPageExample-wrapper'} style={{ width: '401px', height: '252px', borderRadius: '15px', backgroundColor: 'gray' }}>

                </div>
            </div>
        </div>
    );
}

export default NameSpaceBlock




