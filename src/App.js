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
import OrderReview from './Pages/OrderReview/OrderReview';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';


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
        <Route  path= '/register'>
        <Register></Register>
        </Route>
        <Route exact path= '/product'>
        <Products></Products>
        </Route>
        <PrivateRoute path= '/orderreview'>
        <OrderReview></OrderReview>
        </PrivateRoute>
        <PrivateRoute path= '/manageorder'>
        <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>
        <PrivateRoute  path= '/product/:id'>
        <ProductDetails></ProductDetails>
        </PrivateRoute>
      </Switch>
    
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
