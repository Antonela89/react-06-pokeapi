import React from "react";
import Card from "react-bootstrap/Card";

const CardPokemon = ({image, title }) => {
    return (
    <Card
        style={{
            width: "30%",
            height: "75vh",
            margin: "0.5rem",
            display: "flex",
            flexDirection: "column",
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
        </Card.Body>
    </Card>
    );
};

export default CardPokemon;
