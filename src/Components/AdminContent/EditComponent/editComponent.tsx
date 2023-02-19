
import React from 'react';
import './editComponent.css';
import {Input, FormGroup } from 'reactstrap';

const EditComponent: React.FC = () => {

    return (

        <FormGroup className={'AdmPageNameSystem-prompts'}>
            <Input className={'AdmPageNameSystem-promptType'} placeholder={'Тип подсказки'} />
            <Input className={'AdmPageNameSystem-promptTitle'} placeholder={'Заголовок'} />
            <Input type='textarea' className={'AdmPageNameSystem-promptDesc'} placeholder={'Описание'} />
        </FormGroup>

    );
}

export default EditComponent




