import React, { useState, useEffect } from 'react';
import './index.css';
import uparrow from '../../assets/images/up-arrow.svg';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header/Header';
import HighlightedTitle from '../../components/TituloDestacado/HighlightedTitle';
import Video from '../../components/Video/Video';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

const Main = () => {
    const [showUp, setShowUp] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setShowUp(prevScrollPos > currentScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="div__body">
            <Helmet>
                <title>Rafael Ribeiro Dev - Transformando ideias em realidade digital </title>
                <meta
                    name="description"
                    content="Desenvolvimento web personalizado utilizando React, Node.js e muito mais que há de mais moderno digitalmente"
                />
            </Helmet>
            <div className="container">
                <Header />
                <HighlightedTitle />
                <Video />
                <div id="services"><Services /></div>
                <Projects />
                <div id="banner"><Banner /></div>  
                <Footer />
                {showUp && (
                    <button className="show-up-button" onClick={scrollToTop}>
                        <img src={uparrow} alt="arrow-up" className="arrow-up"/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Main;
