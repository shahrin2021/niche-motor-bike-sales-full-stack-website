import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useRouteMatch } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const AdminRoute = ({children,...rest}) => {
    const {user,admin, isLoading} = useAuth();

    if(isLoading){
        return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="danger" />
        </div>);
        
    }
   
    return (
        <Route
        {...rest}
        render={({location})=>
             user.email && admin ? children : <Redirect
             
             to={{
                pathname:'/home',
                state:{from: location}
            }}
             
             />   
       }
           
        
        
        
        >
            
        </Route>
    );
};

export default AdminRoute;