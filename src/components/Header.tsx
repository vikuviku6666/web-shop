import React from 'react';
import {Div, A} from './../styles/Header'



const Header: React.FC = () =>{
    return (
      <Div>
        <span>
          <A>Home</A>
          <A>About</A>
          <A>Movies</A>
            </span>
            <span>
        <A>Login</A>
        <A>Sigup</A>
            </span>  
       
      </Div>
    );
}

export default Header;
