import React,{useState, useEffect} from "react";
import Card from "react-bootstrap/Card";

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
    <Card
        onClick={handleClick}
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

export default CardPrincipal;
