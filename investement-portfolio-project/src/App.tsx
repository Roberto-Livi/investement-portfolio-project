import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Entry from './components/Entry';
import Homepage from './components/Homepage';
import AddAsset from './components/forms/AddAsset';
import ModifyAsset from './components/forms/ModifyAsset';
import NavigationBar from './components/NavigationBar';
import UpdateLiquidity from './components/forms/UpdateLiquidity';
import DeleteAsset from './components/forms/DeleteAsset';

const App: React.FC = () => {

  const loggedIn: boolean = useSelector((state: AppState) => state.loggedIn);

  return (
    <Router>
      <header>
        { loggedIn && <NavigationBar /> }
      </header>
    
      <Routes>
        <Route path="/" element={<Entry />}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/add-asset" element={<AddAsset/>}/>
        <Route path="/modify-asset" element={<ModifyAsset/>}/>
        <Route path="/update-liquidity" element={<UpdateLiquidity/>}/>
        <Route path="/delete-asset" element={<DeleteAsset/>}/>
      </Routes>
    </Router>
  );
}

export default App;
