import { HeaderTwo } from './HeaderTwo';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import plusBtn from '../pics/icon_plus_white.svg';
import trashBtn from '../pics/icon_trashcan.svg';
import '../css/MyRecipes.css';

export const MyRecipes = () => {
    return (
        <>
        <HeaderTwo />
        <div className='my-recipes-body'>
            <div className='my-recipes-wrapper'>
                <div className='my-recipes-title'>
                    <h1>My Recipes</h1>
                    <Link to='/my-recipes/create'>
                        <img src={plusBtn} alt="plus-btn" className='plus-btn'/>
                    </Link>
                </div>
                <div className='my-recipes-content'>
                    <div className='recipe-labels'>
                        <label htmlFor="" className='recipe-name-label'>Recipe Name</label>
                        <label htmlFor="" className='category-label'>Category</label>
                        <label htmlFor="" className='created-on-label'>Created On</label>
                        <label htmlFor="" className='delete-label'>Delete</label>
                    </div>
                    <Link to='/my-recipes/create' className='card-link'>
                        <div className='recipe-links-rectangle'>
                            <span className='recipe-name recipe-item'>Homemade Pizza</span>
                            <span className='category recipe-item'>Brunch</span> 
                            <span className='created-on recipe-item'>22.11.2020</span> 
                            <Link to='/my-recipes/create'>
                                <img src={trashBtn} alt="trashcan-btn" className='trashcan-btn recipe-item'/>
                            </Link>
                        </div>
                    </Link>
                    <Link to='/my-recipes/create' className='card-link'>
                        <div className='recipe-links-rectangle'>
                            <span className='recipe-name recipe-item'>Sea Spaghetti</span>
                            <span className='category recipe-item'>Lunch</span> 
                            <span className='created-on recipe-item'>13.10.2020</span> 
                            <Link to='/my-recipes/create'>
                                <img src={trashBtn} alt="trashcan-btn" className='trashcan-btn recipe-item'/>
                            </Link>
                        </div>
                    </Link>
                    <Link to='/my-recipes/create' className='card-link'>
                        <div className='recipe-links-rectangle'>
                            <span className='recipe-name recipe-item'>Easy Tacos</span>
                            <span className='category recipe-item'>Dinner</span> 
                            <span className='created-on recipe-item'>01.09.2020</span> 
                            <Link to='/my-recipes/create'>
                                <img src={trashBtn} alt="trashcan-btn" className='trashcan-btn recipe-item'/>
                            </Link>
                        </div>
                    </Link>
                    <Link to='/my-recipes/create' className='card-link'>
                        <div className='recipe-links-rectangle'>
                            <span className='recipe-name recipe-item'>Mexican Burrito</span>
                            <span className='category recipe-item'>Breakfast</span> 
                            <span className='created-on recipe-item'>01.09.2020</span> 
                            <Link to='/my-recipes/create'>
                                <img src={trashBtn} alt="trashcan-btn" className='trashcan-btn recipe-item'/>
                            </Link>
                        </div>
                    </Link>
                    <Link to='/my-recipes/create' className='card-link'>
                        <div className='recipe-links-rectangle'>
                            <span className='recipe-name recipe-item'>Energy Booster</span>
                            <span className='category recipe-item'>Dinner</span> 
                            <span className='created-on recipe-item'>07.08.2020</span> 
                            <Link to='/my-recipes/create'>
                                <img src={trashBtn} alt="trashcan-btn" className='trashcan-btn recipe-item'/>
                            </Link>
                        </div>
                    </Link>
                    <Link to='/my-recipes/create' className='card-link'>
                        <div className='recipe-links-rectangle'>
                            <span className='recipe-name recipe-item'>Mac & Bacon</span>
                            <span className='category recipe-item'>Brunch</span> 
                            <span className='created-on recipe-item'>02.08.2020</span> 
                            <Link to='/my-recipes/create'>
                                <img src={trashBtn} alt="trashcan-btn" className='trashcan-btn recipe-item'/>
                            </Link>
                        </div>
                    </Link>
                    <Link to='/my-recipes/create' className='card-link'>
                        <div className='recipe-links-rectangle'>
                            <span className='recipe-name recipe-item'>Caesar Salad</span>
                            <span className='category recipe-item'>Brunch</span> 
                            <span className='created-on recipe-item'>27.07.2020</span> 
                            <Link to='/my-recipes/create'>
                                <img src={trashBtn} alt="trashcan-btn" className='trashcan-btn recipe-item'/>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};
