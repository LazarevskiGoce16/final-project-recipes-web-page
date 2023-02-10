import axios from 'axios';
import { Link } from 'react-router-dom';
import trashBtn from '../pics/icon_trashcan.svg';
import '../css/MyRecipes.css';

export const RecipeLinkCard = ({title, category, date, id}) => {
    const removeRecipeHandler = () => {
        const token = localStorage.getItem('jwt');
        axios.delete(`http://127.0.0.1:10003/api/v1/auth/recipes/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",  
                "Authorization": token ? `Bearer ${token}` : ""
            }
        })
        .then(() => {
            alert('Recipe has been deleted!');
            document.getElementsByClassName('item-list')[0].remove();
            console.log('Successfully deleted the recipe!');
        })
        .catch(err => {
            console.error(err);
        });
    };

    return (
        <div className='item-list'>
            <Link to='/my-recipes/create' className='card-link'>
                <div className='recipe-links-rectangle'>
                    <span className='recipe-name recipe-item'>{title}</span>
                    <span className='category recipe-item'>{category}</span> 
                    <span className='created-on recipe-item'>{date}</span>
                </div>
            </Link>
            <img 
                src={trashBtn} 
                alt="trashcan-btn" 
                className='trashcan-btn recipe-item' 
                onClick={removeRecipeHandler}/>
        </div>
    )
};
