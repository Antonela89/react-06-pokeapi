import React, { useState } from 'react';
import './Footer.css';
import Pokebola from '../../assets/imagenes/Pokebola.png'

const Footer = () => {
    const [hoveredLinkId, setHoveredLinkId] = useState(null);

    const handleMouseEnter = (id) => {
    setHoveredLinkId(id);
    moveImage(id);
};

const moveImage = (id) => {
    const enlace = document.getElementById(id);
    const imagen = document.getElementById('imagen');

    if (enlace && imagen) {
        const enlaceRect = enlace.getBoundingClientRect();
        const imagenRect = imagen.getBoundingClientRect();

        const offsetX = enlaceRect.left - imagenRect.left;

        imagen.style.transform = `translateX(${offsetX}px)`;
    }
};

const handleMouseLeave = () => {
    setHoveredLinkId(null);
    resetImagePosition();
};

const resetImagePosition = () => {
    const imagen = document.getElementById('imagen');
    if (imagen) {
        imagen.style.transform = 'translateX(0)';
    }
};
    return (
    <div className='contenedorFooter'>
        <img id='imagen' src={Pokebola} alt='pokebola' className={hoveredLinkId ? 'imagenVisible' : ''}/>
        <ul className='listaIntegrantes'>
            <li className='itemLista' onMouseEnter={() => handleMouseEnter('enlace1')} onMouseLeave={handleMouseLeave}>
                <a className='linkLista' id='enlace1'  href='https://www.linkedin.com/in/antonela-borgogno'>Antonela Borgogno</a>
            </li>
            <li className='itemLista' onMouseEnter={() => handleMouseEnter('enlace2')} onMouseLeave={handleMouseLeave}>
                <a className='linkLista' id='enlace2' href='https://www.linkedin.com/in/neuyinherrerasunico'>Neuyin Herrera Súnico</a>
            </li>
            <li className='itemLista' onMouseEnter={() => handleMouseEnter('enlace3')} onMouseLeave={handleMouseLeave} >
                <a className='linkLista' id='enlace3' href='https://www.linkedin.com/in/julian-sa'>Julián Silveira Annoni</a>
            </li>
            <li className='itemLista' onMouseEnter={() => handleMouseEnter('enlace4')} onMouseLeave={handleMouseLeave}>
                <a className='linkLista' id='enlace4' href='https://www.linkedin.com/in/soledadshk/'>Daniela Soledad Shukuya</a>
            </li>
            <li className='itemLista' onMouseEnter={() => handleMouseEnter('enlace5')} onMouseLeave={handleMouseLeave}>
                <a className='linkLista' id='enlace5' href='https://www.linkedin.com/in/ai-laura-huallpa-arce/'>Laura Huallpa Arce</a>
            </li>
            <li className='itemLista' onMouseEnter={() => handleMouseEnter('enlace6')} onMouseLeave={handleMouseLeave}>
                <a className='linkLista'  id='enlace6'href='https://www.linkedin.com/in/coxmau77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Mauricio Cox</a>
            </li>
            <li className='itemLista' onMouseEnter={() => handleMouseEnter('enlace7')} onMouseLeave={handleMouseLeave}>
                <a className='linkLista' id='enlace7' href='https://www.linkedin.com/in/marcelomelogno'>Marcelo Melogno</a>
            </li>
        </ul>
    </div>
    )
}

export default Footer