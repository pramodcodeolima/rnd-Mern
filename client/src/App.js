import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProdcuts from './Components/UpdateProdcuts';
import DeleteProdcuts from './Components/DeleteProducts';
import CreateProduct from './Components/CreateProduct';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/edit' element={<UpdateProdcuts />}></Route>
        <Route path='/delete' element={<DeleteProdcuts />}></Route>
        <Route path='/create' element={<CreateProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
