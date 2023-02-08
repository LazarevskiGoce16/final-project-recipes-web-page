import { Routes, Route } from 'react-router-dom';
// PAGES
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Breakfast } from './pages/Breakfast';
import { Brunch } from './pages/Brunch';
import { Lunch } from './pages/Lunch';
import { Dinner } from './pages/Dinner';
import { MyRecipes } from './pages/MyRecipes';
import { CreateRecipe } from './pages/CreateRecipe';
import { MyProfile } from './pages/MyProfile';
// COMPONENTS
import { RecipeModal } from './components/RecipeModal';
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
      <Route path='/my-recipes'>
        <Route index element={<MyRecipes />}/>
        <Route path='create' element={<CreateRecipe />}/>
      </Route>
      <Route path='/my-profile' element={<MyProfile />}/>
    </Routes>
    </>
  );
};

export default App;
