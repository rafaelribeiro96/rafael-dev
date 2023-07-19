// FileManager.js
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';
import ImageManager from '../../components/GESTOR/imageManager/imageManager';
import GestorHome from '../../components/GESTOR/gestorHome/GestorHome';
import GestorBlog from '../../components/GESTOR/gestorBlog/GestorBlog';
import HeaderGestor from '../../components/GESTOR/headerGestor/HeaderGestor';
import Head from 'next/head';

const GestorPage = () => {
    const { user, isLoadingUser, setUser, logout } = useContext(AuthContext);
    const router = useRouter();
    const [selectedManager, setSelectedManager] = useState('home');
    const [headerTitle, setHeaderTitle] = useState('Gestor Home');

    useEffect(() => {
        if (!user && !isLoadingUser) {
            const savedUsername = localStorage.getItem('savedUsername');
            if (savedUsername) {
                setUser({ username: savedUsername });
            } else {
                router.push('/login');
            }
        }
    }, [user, isLoadingUser, setUser, router]);

    const handleLogout = async () => {
        try {
            await logout();
            setUser(null);
            localStorage.removeItem('savedUsername');
            router.push('/login');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
            throw new Error('Erro ao fazer logout. Por favor, tente novamente.');
        }
    };

    const renderManager = () => {
        switch (selectedManager) {
        case 'home':
            return <GestorHome />;
        case 'image':
            return <ImageManager />;
        case 'post':
            return <GestorBlog />;
        default:
            return <GestorHome />;
        }
    };

    return (
        <div className="file-container">
            <Head>
                <title>Rafael Dev Gestor - Desenvolvimento Web Personalizado</title>
            </Head>
            <div>
                <HeaderGestor headerTitle={headerTitle} handleLogout={handleLogout} />
                <div className="gestor-container container-gestor">
                    <aside className="gestor-menu">
                        <button
                            className={`gestor-menu-button ${
                                selectedManager === 'home' ? 'activebutton' : ''
                            }`}
                            onClick={() => {
                                setSelectedManager('home');
                                setHeaderTitle('Gestor Home');
                            }}
                        >
                            Home
                        </button>
                        <button
                            className={`gestor-menu-button ${
                                selectedManager === 'image' ? 'activebutton' : ''
                            }`}
                            onClick={() => {
                                setSelectedManager('image');
                                setHeaderTitle('Gestor de Imagens');
                            }}
                        >
                            Imagens
                        </button>
                        <button
                            className={`gestor-menu-button ${
                                selectedManager === 'post' ? 'activebutton' : ''
                            }`}
                            onClick={() => {
                                setSelectedManager('post');
                                setHeaderTitle('Gestor de Posts');
                            }}
                        >
                            Posts
                        </button>
                    </aside>
                    <div className="gestor-content">
                        {renderManager()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GestorPage;
