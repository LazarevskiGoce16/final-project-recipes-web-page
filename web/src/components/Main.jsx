import axios from "axios";
import { Card } from "./Card";
import timeClock from '../pics/icon_time.svg';
import plate from '../pics/icon_plate.svg';
import star from '../pics/icon_star.svg';
import nextArrows from '../pics/icon_arrows_white.svg';
import { useEffect } from "react";

export const Main = () => {
    useEffect(() => {
        axios.get('http://127.0.0.1:10003', {
            headers: {
                "Content-Type": "application/json",   
            }
        })
        .then(res => {
            res.headers("Access-Control-Allow-Origin", "*");
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
        <h1>Main Page</h1>
        <Card 
            title='Homemade Pizza'
            imageUrl='https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667'
            body='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
            courseType='breakfast'
            time={timeClock}
            persons={plate}
            stars={star}
            nextArrows={nextArrows}
        />
        </>        
    )
};
