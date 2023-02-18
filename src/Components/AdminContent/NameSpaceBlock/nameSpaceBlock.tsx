
import React, { useCallback, useEffect, useState } from 'react';
import './nameSpaceBlock.css';
import { InputGroup, Input, InputGroupText } from 'reactstrap';
import NameSpaceItem from './NameSpaceItem/nameSpaceItem';

const CreateContentBlock: React.FC = () => {
    const items = ['rosnmol_input', 'rosnmol_btn', '_font_rosnmol_1', 'rosnmol_input2']
    const [filteredItems, setFilteredItems] = useState([''])
    
    useEffect(()=>{
    setFilteredItems(items)
    }, [])

    const onSearch = useCallback(
        (searchQuery: string) => {
            if (searchQuery) {
                setFilteredItems(
                    [...items].filter((item)=>
                        item.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                ) 
            } else items ? setFilteredItems(items) : setFilteredItems([''])
        }, [items]
    )
   
    return (
        <div className={'AdmPageNameSystem-wrapper'}>
            <div className={'AdmPageNameSystem-head'}>
                <div className={'AdmPageNameSystem-title'}>
                    <h6 style={{ fontSize: '28px' }}>Система имён</h6>
                </div>
                <div className={'AdmPageNameSystem-search'}>
                    <InputGroup>
                        <Input placeholder='Поиск...' 
                        
                        onChange = {(e) => onSearch(e.target.value)}
                        />
                        
                    </InputGroup>
                </div>
            </div>
            <div className={'AdmPageNameSystem-items'}>
                {
                  filteredItems && filteredItems.map((item) =>
                        <NameSpaceItem key = {item + Date.now()} itemName={item}/>
                    )
                }

            </div>
        </div>
    );
}

export default CreateContentBlock




