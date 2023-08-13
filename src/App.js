// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import DataTrans from './components/DataTrans';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <h1>E-dashboard</h1> */}
        <Routes>
          <Route path='/' element={<h1>Product listing component</h1>} />
          <Route path='/Add Products' element={<h1>Add Product component</h1>} />
          <Route path='/Update Product' element={<h1>Update Product component</h1>} />
          <Route path='/Logout' element={<h1>Logout Product component</h1>} />
          <Route path='/Profile' element={<h1>Profile Editing</h1>} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/api/data' element={<DataTrans />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
