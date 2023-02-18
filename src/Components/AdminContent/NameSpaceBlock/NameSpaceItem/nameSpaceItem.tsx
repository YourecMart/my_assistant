
import React, { useState } from 'react';
import '../nameSpaceBlock.css';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditComponent from '../../EditComponent/editComponent';

interface INameSpaceItem {
    itemName: string
}
const NameSpaceItem: React.FC<INameSpaceItem> = ({ itemName }) => {

    const [modalEdit, setModalEdit] = useState(false)

    const toggleEdit = () => {
        setModalEdit(!modalEdit)
    }

    return (

        <div className={'AdmPageNameSystem-item'}>

            <div className={'AdmPageNameSystem-itemName'}>
                <p>{itemName}</p>
            </div>
            <div className={'AdmPageNameSystem-itemActions'}>
            
                <a style={{cursor: 'pointer', color: 'black', fontWeight: '500' }}
                    onClick={ toggleEdit}
                >
                   Редактировать
                </a>
                <a style={{ color: 'gray', fontWeight: '500' }}>Удалить</a>
            </div>


            <Modal Modal isOpen={modalEdit} toggle={toggleEdit} centered>
                <ModalHeader toggle={toggleEdit}>{itemName}</ModalHeader>
                <ModalBody>
                    <EditComponent />
                </ModalBody>
                <ModalFooter>

                    <Button color="secondary" onClick={() => {
                        toggleEdit()
                    }}>
                        Добавить
                    </Button>
                    <Button color="secondary" onClick={() => {
                        toggleEdit()
                    }}>
                        Закрыть
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NameSpaceItem




