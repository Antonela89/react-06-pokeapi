import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import './CardPokemon.css';

const CardPokemon = ({image, title, text }) => {

    return (
    <Card id='card'>
        <Card.Header id='nombrePokemon'>{title}</Card.Header>
        <Card.Body id='cardBody'>
            <Card.Img id='imagenPokemon' variant="left" src={image} alt={title}/>
            <div id='cardTexto'>
            <>
                <Card.Subtitle id='subtitulo'>Tipo:</Card.Subtitle>
                <ListGroup id='lista'>
                    {text.tipo.map((type, index) => (
                        <ListGroup.Item  id='listaItem_tipo' key={index}>{type.toUpperCase()}</ListGroup.Item>
                    ))}
                </ListGroup>
            </>
            <>
                <Card.Subtitle id='subtitulo'>Habilidades:</Card.Subtitle>
                <ListGroup id='lista'>
                    {text.habilidades.map((ab, index) => {
                        return (
                            <ListGroup.Item id='listaItem' key={`${index}`}>{ab}</ListGroup.Item>
                        )}
                    )} 
                </ListGroup>
            </>  
            <Card.Subtitle id='subtitulo'>Base XP: {text.xp}</Card.Subtitle>
        </div>
        </Card.Body>
    </Card>
    );
};

export default CardPokemon;
