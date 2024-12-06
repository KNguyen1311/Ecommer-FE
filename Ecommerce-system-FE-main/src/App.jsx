import '../src/App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './LoginSignup/login'
import Header from './home/header';
import SignUp from './LoginSignup/SignUp';
import Body from './home/Body';
import ErrorPage from './home/ErrorPage';
import { UserProvider } from './context/UserContext';
import ShopManage from './shop/shopManage';
import ProductManage from './shop/productManage';
import AddProductForm from './componentChild/Shop/AddProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login, logout } from './store/authSlice';
import LoginAdmin from './adminPage/LoginAdmin';
import AdminHome from './adminPage/AdminHome';
function App() {
const authStore = useSelector(state => state.auth);
const dispatch = useDispatch();
useEffect(()=>{
  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user || !accessToken || !refreshToken){
      dispatch(logout())
    }
    dispatch(login({
      accessToken,refreshToken,user
    }))
  } catch (error) {
     dispatch(logout())
  }
},[])

if(authStore.isLoading){
  return <div>Loading...</div>
}
  return (
    <>
      <UserProvider>
        <div >
          <Header />
          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<ShopManage />}></Route>
            <Route path='/productManage' element={<ProductManage />}>
              <Route path='addProduct' element={<AddProductForm />} />
            </Route>
            <Route path='/:rest' element={<ErrorPage />} />
            <Route path='/' element={<Body />} exact></Route>
            <Route path='/loginAdmin' element={<LoginAdmin />}/>
            <Route path='/AdminHome' element={<AdminHome />}/>
            
          </Routes>
        </div>
      </UserProvider>
    </>

  )

}

export default App
