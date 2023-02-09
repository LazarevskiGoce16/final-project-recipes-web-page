import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderTwo } from '../components/HeaderTwo';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import returnBtn from '../pics/icon_back_white.svg';
import * as strings from '../templates.json';
import '../css/CreateRecipe.css';

export const CreateRecipe = () => {
    const {short_recipe_desc} = strings;
    const {long_recipe_desc} = strings;

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [description, setDescription] = useState('');
    const [fullRecipe, setFullRecipe] = useState('');

    const shouldDisableSubmit = (
        !title || 
        !category ||
        !prepTime ||
        !numOfPeople ||
        !description ||
        !fullRecipe
    );

    const handleSubmit = () => {
        axios.post('http://127.0.0.1:10003/api/v1/auth/recipes', {
            title : title,
            category : category,
            preparation_time : prepTime,
            num_of_people : numOfPeople,
            description : description,
            full_recipe : fullRecipe,
        })
        .then(() => {
            navigate('/my-recipes');
        })
        .catch(err => {
            console.error(err);
        })
    };

    return (
        <>
        <HeaderTwo />
        <div className='create-recipe-body'>
            <div className='create-recipe-wrapper'>
                <div className='create-recipe-title'>
                    <h1>My Recipes</h1>
                    <Link to='/my-recipes'>
                        <img src={returnBtn} alt="return-btn" className='return-btn'/>
                    </Link>
                </div>
                <div className='create-recipe-content'>
                    <div className='create-recipe-left-content'>
                        <label htmlFor="">Recipe Image</label>
                        <br />
                        <img 
                            src="https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667" 
                            alt="recipe-img" 
                        />
                        <br />
                        <button className='upload-img-btn'>Upload Image</button>
                    </div>
                    <div className='create-recipe-middle-content'>
                        <div className='first-row'>
                            <label htmlFor="">Recipe Title</label>
                            <br />
                            <input 
                                type="text" 
                                placeholder='Homemade Pizza' 
                                onChange={e => setTitle(e.target.value)} 
                                value={title} 
                                required />
                        </div>
                        <div className='second-row'>
                            <div>
                                <label htmlFor="">Category</label>
                                <br />
                                <select 
                                    name="recipe-category-selector" 
                                    onChange={e => setCategory(e.target.value)} 
                                    value={category} 
                                    required>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="brunch">Brunch</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Preparation Time</label>
                                <br />
                                <input 
                                    type="number" 
                                    placeholder='45' 
                                    onChange={e => setPrepTime(e.target.value)} 
                                    value={prepTime} 
                                    required />
                            </div>
                            <div>
                                <label htmlFor="">No. People</label>
                                <br />
                                <input 
                                    type="number" 
                                    placeholder='4'
                                    onChange={e => setNumOfPeople(e.target.value)}
                                    value={numOfPeople}
                                    required />
                            </div>
                        </div>
                        <div className='third-row'>
                            <label htmlFor="">Short Description</label>
                            <br />
                            <textarea 
                                placeholder={short_recipe_desc}
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                required>
                            </textarea>
                            <br />
                            <button 
                                className='save-button' 
                                onClick={handleSubmit} 
                                disabled={shouldDisableSubmit}>
                                SAVE
                            </button>
                        </div>
                    </div>
                    <div className='create-recipe-right-content'>
                        <label htmlFor="">Recipe</label>
                        <br />
                        <textarea 
                            type="text" 
                            placeholder={long_recipe_desc}
                            onChange={e => setFullRecipe(e.target.value)}
                            value={fullRecipe}
                            required>
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};
