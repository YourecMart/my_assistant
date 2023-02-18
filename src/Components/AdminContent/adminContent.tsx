
import React from 'react';
import '../mainAdminPage.css';
import CreateContentBlock from './NameSpaceBlock/nameSpaceBlock';

import NameSpaceBlock from './CreateContentBlock/createContentBlock';

const AdminContent: React.FC = () => {
    return (
        <div className={'AdmPageContent-wrapper'}>
            <NameSpaceBlock/>
            <CreateContentBlock />
        </div>
    );
}

export default AdminContent




