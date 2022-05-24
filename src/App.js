import logo from './logo.svg';
import './App.css';
import PButton from './Pages/Shared/PButton';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import RequireAuth from './Pages/Auth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Payment from './Pages/Dashboard/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddTool from './Pages/Dashboard/AddTool';
import AddReview from './Pages/Dashboard/AddReview';
import ManageOrders from './Pages/Dashboard/ManageOrders';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='makeAdmin' element={<MakeAdmin />}></Route>
          <Route path='addTool' element={<AddTool />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='manageOrder' element={<ManageOrders />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
