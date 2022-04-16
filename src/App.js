import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound404 from './components/NotFound404/NotFound404';
import Header from './components/Partials/Header/Header';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/checkout" element={
      <RequireAuth>
      <CheckOut></CheckOut>
      </RequireAuth>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>

      {/* not found 404 route */}
      <Route path="*" element={<NotFound404></NotFound404>}></Route>
     </Routes>
    </div>
  );
}

export default App;
