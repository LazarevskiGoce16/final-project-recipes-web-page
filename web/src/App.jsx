import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { RecipeModal } from './components/RecipeModal';
import { Breakfast } from './components/Breakfast';
import { Brunch } from './components/Brunch';
import { Lunch } from './components/Lunch';
import { Dinner } from './components/Dinner';
import { MyRecipes } from './components/MyRecipes';
import { CreateRecipe } from './components/CreateRecipe';
import { MyProfile } from './components/MyProfile';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/header' element={<Header />}/>
        <Route path='/footer' element={<Footer />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/recipes'>
          <Route path='breakfast' element={<Breakfast />}/>
          <Route path='brunch' element={<Brunch />}/>
          <Route path='lunch' element={<Lunch />}/>
          <Route path='dinner' element={<Dinner />}/>
          <Route path=':id' element={<RecipeModal />}/>
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
