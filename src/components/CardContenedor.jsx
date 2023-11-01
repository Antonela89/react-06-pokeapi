import React from "react";
import Card from "react-bootstrap/Card";

const CardContenedor = ({ image, title }) => {
    return (
    <Card
        style={{
            width: "30%",
            height: "50vh",
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
        style={{ width: "50%", height: "50vh", objectFit: "cover" }}
        variant="top"
        src={image}
        />
        <Card.Body style={{ width: "80%", height: "15vh" }}>
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

export default CardContenedor;
