import React from "react";
import {Card, ListGroup} from "react-bootstrap";

const CardPokemon = ({image, title, text }) => {

    return (
    <Card
        style={{
            width: "40%",
            height: "75vh",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            //alignItems: "center",
            justifyContent: "center",
            // border: "2px solid black",
            borderRadius: "20px",
        }}
    >
        <Card.Header
            style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: '2rem',
                padding: '1rem',
                margin: "0.5rem",
                borderBottom: "3px solid #292B33",
            }}
        >
            {title}
        </Card.Header>
        <Card.Body style={{ width: "100%", height: "10vh", display: 'flex', flexDirection:'row' }}>
        <Card.Img
        style={{ width: "60%", objectFit: "contain", margin:'1rem'}}
        variant="top"
        src={image}
        alt={title}
            />
        <Card.Text style={{width: "40%", display: 'flex', flexDirection: 'column', justifyContent:'center',textAlign:'center', borderLeft:"3px solid #292B33" }}>
            <>
            <Card.Subtitle style={{fontWeight: "bold", textAlign:"left", marginLeft: '1.5rem'}}>Tipo:</Card.Subtitle>
            <ListGroup style={{display: 'flex', flexDirection: 'column', margin: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                {text.tipo.map((type, index) => (
                    <ListGroup.Item style={{width: '80%', fontWeight: 'bold', border:'1px solid black', margin: '0.2rem', borderRadius:'inherit', transition: 'background-color 0.3s'}}
                        onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#3B5094';
                        e.target.style.color = 'white' // Cambia el color de fondo al hacer hover
                        }}
                        onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'initial'; 
                        e.target.style.color = 'initial'// Restaura el color de fondo al salir del hover
                        }}  key={index}>{type.toUpperCase()}</ListGroup.Item>
                ))}
            </ListGroup>
            </>
            <>
            <Card.Subtitle style={{fontWeight: "bold", textAlign:"left", marginLeft: '1.5rem'}}>Habilidades:</Card.Subtitle>
            <ListGroup style={{display:'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem'}}>
                {text.habilidades.map((ab, index) => {
                    return (
                        <ListGroup.Item style={{width:'80%', textTransform: 'capitalize'}} key={`${index}`}>{ab}</ListGroup.Item>
                    )}
                )} 
            </ListGroup>
            </>  
            <Card.Subtitle style={{fontWeight: "bold", textAlign:"left", marginLeft: '1.5rem'}}>Base XP: {text.xp}</Card.Subtitle>
        </Card.Text>
        </Card.Body>
    </Card>
    );
};

export default CardPokemon;
