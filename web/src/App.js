import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Recipe } from './components/Recipe';
import { Breakfast } from './components/Breakfast';
import { Brunch } from './components/Brunch';
import { Lunch } from './components/Lunch';
import { Dinner } from './components/Dinner';
import { MyRecipes } from './components/MyRecipes';
import { CreateRecipe } from './components/CreateRecipe';
import { MyProfile } from './components/MyProfile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/recipes'>
          <Route path='breakfast' element={<Breakfast />}/>
          <Route path='brunch' element={<Brunch />}/>
          <Route path='lunch' element={<Lunch />}/>
          <Route path='dinner' element={<Dinner />}/>
          <Route path=':id' element={<Recipe />}/>
        </Route>
        <Route path='my-recipes'>
          <Route index element={<MyRecipes />}/>
          <Route path='create' element={<CreateRecipe />}/>
        </Route>
        <Route path='/my-profile' element={<MyProfile />}/>
      </Routes>
    </>
  );
};

export default App;
