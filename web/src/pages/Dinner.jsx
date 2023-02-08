import axios from "axios";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import "../css/Categories.css";

export const Dinner = () => {
    const cardBody = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal';
    const bkgImgUrl = 'https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667';

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:10003/api/v1/auth/recipes/category', {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",  
            }
        })
        .then(res => {
            let arr = [];
            for (let i = 0; i < res.data.rs.length; i++) {
                if(res.data.rs[i].category === 'dinner') {
                    arr.push(res.data.rs[i]);
                }
            }
            setCategory(arr);
            console.log(res.data.rs);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
        <Header />
        <div className="all-categories-body">
            <div className="all-categories-wrapper">
                <div className="all-categories-title dinner-title">
                    <h1>Dinner</h1>
                </div>
                <div className="all-categories-content">
                    {category.map(c => (
                        <Card 
                            title={c.title}
                            imageUrl={bkgImgUrl}
                            body={cardBody}
                            courseType={c.category}
                            stars={c.stars}
                            persons={c.num_of_people}
                            time={c.preparation_time}
                        />
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};
