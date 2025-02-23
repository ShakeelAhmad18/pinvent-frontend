
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { useEffect } from 'react';
import { getLoginStatus } from './services/authServices';
import { useDispatch } from 'react-redux';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import AddProduct from './pages/addProduct/AddProduct'
import ProductDetails from './components/productDetails/ProductDetails';
import EditProduct from './pages/editProduct.js/EditProduct';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
import Contact from './pages/contact/Contact';

axios.defaults.withCredentials=true;

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    async function loginStatus(){
    const status= await getLoginStatus()
    dispatch(SET_LOGIN(status))
    }
    loginStatus();
  },[dispatch])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='forgot' element={<Forgot/>}/>
          <Route path='/resetpassword/:resetToken' element={<Reset/>}/>
          <Route path='/dashboard' element={<Sidebar>
             <Layout>
              <Dashboard/>
             </Layout>
          </Sidebar>}/>
          <Route path='/add-product' element={<Sidebar>
             <Layout>
              <AddProduct/>
             </Layout>
          </Sidebar>}/>
          <Route path='/product-detail/:id' element={<Sidebar>
             <Layout>
              <ProductDetails/>
             </Layout>
          </Sidebar>}/>
          <Route path='/edit-product/:id' element={<Sidebar>
             <Layout>
              <EditProduct/>
             </Layout>
          </Sidebar>}/>
          <Route path='/profile' element={<Sidebar>
             <Layout>
              <Profile/>
             </Layout>
          </Sidebar>}/>
          <Route path='/edit-profile' element={<Sidebar>
             <Layout>
              <EditProfile/>
             </Layout>
          </Sidebar>}/>
          <Route path='/contact-us' element={<Sidebar>
             <Layout>
              <Contact/>
             </Layout>
          </Sidebar>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
