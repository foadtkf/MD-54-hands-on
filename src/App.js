import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import OrderReview from './Components/OrderReview/OrderReview';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
    </Routes>
    </div>
  );
}

export default App;
