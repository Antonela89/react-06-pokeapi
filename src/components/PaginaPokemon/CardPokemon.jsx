import React from "react";
import Card from "react-bootstrap/Card";

const CardPokemon = ({image, title, text }) => {
    return (
    <Card
        style={{
            // width: "30%",
            height: "75vh",
            margin: "0.5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid black",
            borderRadius: "20px",
        }}
    >
        <Card.Img
        style={{ width: "100%", height: "65vh", objectFit: "10vh", margin: '1rem'}}
        variant="top"
        src={image}
        />
        <Card.Body style={{ width: "100%", height: "10vh" }}>
        <Card.Title
            style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                margin: "0.5rem",
            }}
        >
            {title}
        </Card.Title>

        <Card.Text>
            <ul style={{ display: 'flex', listStyleType: 'none', padding:'0' }}>
                {text.tipo.map((type, index) => (
                    <button style={{margin:'1rem', fontWeight: 'bold'}} key={index}>{type.toUpperCase()}</button>
                ))}
            </ul>
                    
            <div>
                <h6 style={{ alignItems: 'center' }}>Habilidades:</h6>
                <ul>
                    {text.habilidades.map((ab, index) => {
                        return (
                            <li key={`${index}`}> {ab} </li>
                        )}
                    )} 
                </ul>  
            </div>

            <h6 style={{ alignItems: 'center' }}>Base XP: {text.xp}</h6>
        </Card.Text>
                
        </Card.Body>
    </Card>
    );
};

export default CardPokemon;
