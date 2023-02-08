import { HeaderTwo } from '../components/HeaderTwo';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import returnBtn from '../pics/icon_back_white.svg';
import '../css/CreateRecipe.css';

export const CreateRecipe = () => {
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
                        <img src="https://www.nourishedlife.co.uk/media/qm4js31t/pizza-beer-1200x628-facebook-1200x628.jpg?width=500&height=261.6666666666667" alt="" />
                        <br />
                        <button className='upload-img-btn'>Upload Image</button>
                    </div>
                    <div className='create-recipe-middle-content'>
                        <div className='first-row'>
                            <label htmlFor="">Recipe Title</label>
                            <br />
                            <input type="text" placeholder='Homemade Pizza'  />
                        </div>
                        <div className='second-row'>
                            <div>
                                <label htmlFor="">Category</label>
                                <br />
                                <select name="recipe-category-selector">
                                    <option value="breakfast">Breakfast</option>
                                    <option value="brunch">Brunch</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Preparation Time</label>
                                <br />
                                <input type="number" placeholder='45'/>
                            </div>
                            <div>
                                <label htmlFor="">No. People</label>
                                <br />
                                <input type="number" placeholder='4'/>
                            </div>
                        </div>
                        <div className='third-row'>
                            <label htmlFor="">Short Description</label>
                            <br />
                            <textarea placeholder='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage'></textarea>
                            <br />
                            <button className='save-button'>SAVE</button>
                        </div>
                    </div>
                    <div className='create-recipe-right-content'>
                        <label htmlFor="">Recipe</label>
                        <br />
                        <textarea type="text" placeholder='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures'></textarea>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};
