import React, { useState, useEffect } from 'react';
import { InstaFeed } from '../../components/InstaFeed/InstaFeed.jsx';
import FloatingButton from '../../components/botaoContato/FloatingButton.jsx';
import uparrow from '../assets/images/up-arrow.svg';
import { fetchImages } from '../../services/apiUpload.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from '../../components/gallery/Gallery.jsx';
import CarrosselJs from '../../components/carrosselJs/carrosselJs.jsx';
import ButtonSlide from '../../components/GESTOR/extras/ButtonSlide.jsx';
import ButtonDelete from '../../components/GESTOR/extras/ButtonDelete.jsx';
import ButtonNewPost from '../../components/GESTOR/extras/ButtonNewPost.jsx';
import ButtonGenerate from '../../components/GESTOR/extras/ButtonGenerate.jsx';
import Image from 'next/image';

const Main = () => {
    const [images1, setImages1] = useState([]);
    const [images2, setImages2] = useState([]);
    const [showUp, setShowUp] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchImages();
                const data = response.data.images;
                const images1Filtered = data.filter(
                    (image) => image.category === '1'
                );
                setImages1(images1Filtered);

                const images2Filtered = data.filter(
                    (image) => image.category === '2'
                );
                setImages2(images2Filtered);
            } catch (error) {
                console.error('Erro ao obter as imagens:', error);
            }
        };

        fetchData();
    }, []);

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
            <div className="container">
                <CarrosselJs />
                <div className="spinner-cube">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ButtonSlide text={'button'} />
                <ButtonDelete />
                <ButtonNewPost />
                <ButtonGenerate text={'Obter Ideias'} />
                <Gallery images={images1} />
                <InstaFeed data-aos="fade-up" />
                {showUp && (
                    <button className="show-up-button" onClick={scrollToTop}>
                        <Image src={uparrow} alt="arrow-up" className="arrow-up"/>
                    </button>
                )}
                <FloatingButton />
            </div>
        </div>
    );
};

export default Main;
