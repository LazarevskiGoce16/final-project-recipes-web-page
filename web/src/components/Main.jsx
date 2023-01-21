import axios from "axios";
import { Card } from "./Card";
import { useEffect, useState } from "react";

export const Main = () => {
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
        <h1>Main Page</h1>
        {freshRecipes.map(recipe => (
            <Card 
                title={recipe.title}
                imageUrl='https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667'
                body={recipe.description}
                courseType={recipe.category}
            />))}
        {popularRecipes.map(recipe => (
            <Card 
                title={recipe.title}
                imageUrl='https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667'
                body={recipe.description}
                courseType={recipe.category}
            />))}
        {/* <Card 
            title='Homemade Pizza'
            imageUrl='https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667'
            body='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
            courseType='breakfast'
            time={timeClock}
            persons={plate}
            stars={star}
            nextArrows={nextArrows}
        /> */}
        </>        
    )
};

/*
---Prashanja---
-kako da se prikazhuvaat podatocite za sekoj recept posebno vo kartichkata
-kako da se prikazhat kartichkite spored vreme (fresh and new)
-> sort na listata pod date created
-kako da se prikazhat kartichkite spored dzvezdi (most popular recipes)
-> sort na listata po stars
-kako onclick na kartichkata da se pokazhe modalot
-kako da se sortiraat receptite posebno po kategorii (breakfast, brunch, lunch, dinner)
-> group by na listata
-kako da se napravi account
-> da napravam useState za site podatoci, pa posle toa metod post vo baza
-kako da se logira so token
-> vnesuvame podatoci, prakjame req.body kon backend, proverka dali se tochni, generira token i go vrakja vo local storage
-kako da se smenat podatoci vo my profile
-> isto kako registerot
-kako da se smeni slika (avatar)
-kako da se zachuva
-> smenetite raboti kje se vratat kon backend (so put metod)
-kako da se prikazhuvaat receptite vo listata vo my recipes
-> kje treba da ima pole created_by kade se chuva userot shto go kreiral receptot i koga se zemaat receptite kje se filtriraat spored user(array.filter)
-kako da se editiraat onclick
-> istoto kako so my profile
-kako da se brishat so kopcheto za delete
-> se povikuva delete metod so axios
-kako da se zachuva promenata/editiranjeto
-kako da se prikachi slika za receptot
-kako da se dodade novokreiraniot recept vo listata
-> prvo se kreira post metod, pa se prakja povik kon backend
*/