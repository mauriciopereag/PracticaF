import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './ImageCarousel.css';

function ImageCarousel() {
    const items = [
        {
            name: "Porshe 911 GT3 RS",
            image: "/assets/auto1.jpg"
        },
        {
            name: "Ferrari F430",
            image: "/assets/auto2.jpg"
        },
        {
            name: "Mercedes Benz AMG GT",
            image: "/assets/auto3.jpg"
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item({ item }) {
    return (
        <Paper className="carousel-item">
            <img src={item.image} alt={item.name} className="carousel-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </Paper>
    );
}

export default ImageCarousel;