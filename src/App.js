import { auth } from './Firebase';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() =>{
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
  }, []);
  
return(
  <div className='app'>
    <Header />
    <Login user={user} />
    <Main user={user} />
    <Footer />
  </div>
)  
}

export default App;