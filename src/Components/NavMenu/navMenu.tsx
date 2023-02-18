import React from 'react';
import '../mainAdminPage.css';
import {Nav, NavItem, NavLink} from 'reactstrap';

const NavMenu: React.FC = () => {
    return (
        <div className={'AdmPageSideMenu-wrapper'}>
            <div className={'AdmPageSideMenuContent-wrapper'}>
                <p style={{fontSize: '18px', marginLeft: '10px', fontWeight: 'bold'}}>Административная панель</p>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="/main" active={true} style={{color: '#8C69D6', fontWeight: '600'}}>
                            Главная страница
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/grantfilling" style={{color: 'black', fontWeight: '500'}}>
                            Заполнение грантов
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/events" style={{color: 'black', fontWeight: '500'}}>
                            Список мероприятий
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" style={{color: 'black', fontWeight: '500'}}>
                            Мои проекты
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );
}

 export default NavMenu
