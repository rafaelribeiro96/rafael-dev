/* eslint-disable react/prop-types */
import React from 'react';
import whatsapp from '../../assets/images/whatsapp.png';
import Link from 'next/link';
import Image from 'next/image';

class FloatingButton extends React.Component {
  render() {
    return (
      <div className="float-buttons-div">
        <Link
          href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!"
          target="_blank"
          className="floating-button"
          title="link whatsapp glayde ribeiro"
          rel="noreferrer"
        >
          <Image
            src={whatsapp}
            alt="botão whatsapp"
            className="button-whatsapp"
          />
        </Link>
      </div>
    );
  }
}

export default FloatingButton;
