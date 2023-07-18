import React, { useState, useEffect } from 'react';
import uparrow from '../assets/images/up-arrow.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header';
import HighlightedTitle from '../components/TituloDestacado/HighlightedTitle';
import Video from '../components/Video/Video';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';

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
            <Analytics />
            <div className="container">
                <div id="header" data-aos="fade-right"><Header /></div>
                <HighlightedTitle />
                <div id="video" data-aos="fade-up"><Video /></div>
                <div id="services" data-aos="fade-up"><Services /></div>
                <div id="projects" data-aos="fade-up"><Projects /></div>
                <div id="banner" data-aos="fade-up"><Banner /></div>  
                <div id="footer"><Footer /></div>
                {showUp && (
                    <button className="show-up-button" onClick={scrollToTop}>
                        <Image src={uparrow} alt="arrow-up" className="arrow-up"/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Main;
