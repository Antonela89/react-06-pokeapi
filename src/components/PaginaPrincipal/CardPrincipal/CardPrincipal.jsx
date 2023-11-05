import React,{useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import './CardPrincipal.css';

const CardPrincipal = ({url, title, onClick }) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        async function fetchImage() {
            const response = await fetch(url);
            const data = await response.json();
            setImage(data.sprites.other.dream_world.front_default);
    }
    fetchImage();
    }, [url]);

    const handleClick = () => {
        const id = url.split('/').filter((str) => str !== '').pop(); // Extrae el ID del URL
        onClick(id);
        };

    return (
    <Card id='cardPrincipal' onClick={handleClick}>
        <Card.Img id='imagenPokemonPrincipal' variant="top" src={image}/>
        <Card.Body id='cardBodyPrincipal'>
            <Card.Title id='PokemonNombrePrincipal'>{title}</Card.Title>
        </Card.Body>
    </Card>
    );
};

export default CardPrincipal;
