import React,{Fragment} from 'react';
import Header from './Header';

const Layout = (props) => {
    
    return ( 
        <Fragment>
           <Header userSesion={props.userSesion} setUserSesion={props.setUserSesion}/>
           <div className="container">
                {props.children}
           </div>
          
        </Fragment>
        
    );
}
 
export default Layout;