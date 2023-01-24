import axios from "axios";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../css/Main.css";

export const Main = () => {
    const cardBody = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal';
    const bkgImgUrl = 'https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667';

    const [freshRecipes, setFreshRecipes] = useState([]);
    const [popularRecipes, setPopularRecipes] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:10003/api/v1/auth/recipes', {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",  
            }
        })
        .then(res => {
            setFreshRecipes(res.data.fn);
            setPopularRecipes(res.data.mpr);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
        <Header />
        <div className="main-body">
            <div className="main-wrapper">
                <div className="main-fresh-and-new-title">
                    <h1>Fresh & New</h1>
                </div>
                <div className="main-fresh-and-new-content">
                    {freshRecipes.map(recipe => (
                        <Card 
                            title={recipe.title}
                            imageUrl={bkgImgUrl}
                            body={cardBody}
                            courseType={recipe.category}
                            stars={recipe.stars}
                            persons={recipe.num_of_people}
                            time={recipe.preparation_time}
                        />
                    ))}
                </div>
                <div className="main-most-popular-recipes-title">
                    <h1>Most Popular Recipes</h1>
                </div>
                <div className="main-most-popular-recipes-content">
                    {popularRecipes.map(recipe => (
                        <div className="main-recipe-card">
                            <Card
                                title={recipe.title}
                                imageUrl={bkgImgUrl}
                                body={cardBody}
                                courseType={recipe.category}
                                stars={recipe.stars}
                                persons={recipe.num_of_people}
                                time={recipe.preparation_time}
                            />
                        </div>
                    ))}
                </div>
            </div> 
        </div>
        <Footer />
        </>        
    )
};

