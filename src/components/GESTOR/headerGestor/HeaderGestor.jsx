/* eslint-disable react/prop-types */
import React from 'react';
import logoRafael from '../../../assets/images/logoRafael.svg';
import logoutSvg from '../../../assets/images/logout.svg';
import Image from 'next/image';

const HeaderGestor = ({ headerTitle, handleLogout }) => {

    return (
        <header className="gestor-header header-gestor">
            <Image className="logo-header-menu" src={logoRafael} alt="logo" />
            <h1 className="file-header-title">{headerTitle}</h1>
            <button className="logout-button-menu" onClick={handleLogout}>
                <Image src={logoutSvg} alt="logout" className="icon-logout" />
            </button>
        </header>
    );
};

export default HeaderGestor;
