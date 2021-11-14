import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/Cnotext/AuthProvider';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import DashBoard from './Pages/DashBoard/DashBoard';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import AddReview from './Pages/AddReview/AddReview';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import OrderReview from './Pages/OrderReview/OrderReview';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import AdminRoute from './Pages/PrivateRoute/AdminRoute/AdminRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path= '/'>
        <Home></Home>
        </Route>
        <Route  path= '/home'>
        <Home></Home>
        </Route>
        <Route  path= '/login'>
        <Login></Login>
        </Route>
        <AdminRoute  path= '/updateProduct/:id'>
        <UpdateProduct></UpdateProduct>
        </AdminRoute>
        <Route  path= '/contact'>
        <Contact></Contact>
        </Route>
        <Route exact path= '/products'>
        <Products></Products>
        </Route>
        <Route  path= '/register'>
        <Register></Register>
        </Route>
        <PrivateRoute path= '/dashboard'>
        <DashBoard></DashBoard>
        </PrivateRoute>
        <PrivateRoute  path='/product/:id'>
        <ProductDetails></ProductDetails>
        </PrivateRoute>
        <PrivateRoute path= '/myorder'>
        <OrderReview></OrderReview>
        </PrivateRoute>
        <Route path= '*'>
        <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
