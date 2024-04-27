import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
// import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Nav />
     <Routes>

       <Route path="/signup" element={<SignUp />} />

     </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
