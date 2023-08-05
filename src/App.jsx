import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Films from './components/Films/Films'
import Listing from './components/Listing/Listing'
import Chat from './components/Chat/Chat'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <Films />
            <Listing />
            <Chat />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
