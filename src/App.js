import './App.css';
import NavBar from './components/NavBar';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import MyBook from './components/MyBooks';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/Register';
import Allbooks from './components/AllBooks';
import AllBooks from './components/AllBooks';
import WishList from './components/WishList';
import DarkModeSwitch from './components/DarkModeSwitch';
import BookSearch from './forms/BookSearch';

function App() {
  return (
    <>
    <NavBar/>
    {/* <RegisterForm/> */}
    {/* <LoginForm/> */}
    {/* <BookSearch/> */}
    {/* <AllBooks/> */}
    <WishList/>
    <MyBook/>
    <SimpleBottomNavigation/>
    </>
  );
}

export default App;
