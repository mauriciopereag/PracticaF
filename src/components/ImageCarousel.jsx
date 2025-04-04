/* eslint-disable react/prop-types */
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './ImageCarousel.css';
import autoImg1 from '/assets/auto1.jpg';
import autoImg2 from '/assets/auto2.jpg';
import autoImg3 from '/assets/auto3.jpg';

function ImageCarousel() {
    const items = [
        {
            name: "Porshe 911 GT3 RS",
            image: autoImg1
        },
        {
            name: "Ferrari F430",
            image: autoImg2
        },
        {
            name: "Mercedes Benz AMG GT",
            image: autoImg3
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