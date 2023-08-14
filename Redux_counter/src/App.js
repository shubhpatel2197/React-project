import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);


 const fetchMoviesHandler = async () => {
    
      const response = await fetch('https://first-f6385-default-rtdb.firebaseio.com/movies.json');
      

  console.log(response);
 }

  return (
    <Fragment >
      <Header/>
      
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
