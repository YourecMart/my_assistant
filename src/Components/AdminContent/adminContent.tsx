
import React from 'react';
import '../mainAdminPage.css';
import CreateContentBlock from './CreateContentBlock/createContentBlock';
import NameSpaceBlock from './NameSpaceBlock/nameSpaceBlock';



const AdminContent: React.FC = () => {
    return (
        <div className={'AdmPageContent-wrapper'}>
            <CreateContentBlock />
            <NameSpaceBlock/>
        </div>
    );
}

export default AdminContent




