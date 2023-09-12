import {useNavigate,Route, Routes } from 'react-router-dom';
import About from './Container/About';
import Profile from './Container/Profile';
import { AppContext } from './AppContext';
import { useState } from 'react';
function App() {
  const navigate=useNavigate()
  const [state,setState]=useState(10)
  return (
    <div className="App">  
        <button onClick={()=>navigate('/about')}>About</button>
        <button onClick={()=>navigate('/profile')}>Profile</button>
  
      <AppContext.Provider value={{data:state}}>
      <Routes>
       
    <Route path='/about' element={<About/>} />
    <Route path='/profile' element={<Profile/>} />

    
     
       </Routes>
      </AppContext.Provider>
   
    </div>
  );
}

export default App;
