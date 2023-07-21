import React, { useEffect } from 'react';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';

function RedesSociais() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="redes" data-aos="zoom-in">
      <ul className="redes__list">
        <li className="redes__item">
          <Link
            target="_blank"
            title="link whatss app glayde ribeiro"
            href="https://wa.me/5531991525735?text=Olá%20Glayde%20Te%20encontrei%20através%20do%20seu%20site"
            className="redes__link"
            rel="noreferrer"
          >
            <Image
              className="whatsapp__image"
              src={whatsapp}
              alt="botao-whatsapp glayde ribeiro"
              width={120}
              height={120}
            />
          </Link>
        </li>

        <li className="redes__item">
          <Link
            target="_blank"
            title="link instagram glayde ribeiro"
            href="https://www.instagram.com/glayderibeiro/"
            className="redes__link"
            rel="noreferrer"
          >
            <Image
              className="instagram__image"
              src={instagram}
              alt="botao instagram glayde ribeiro"
              width={120}
              height={120}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default RedesSociais;
