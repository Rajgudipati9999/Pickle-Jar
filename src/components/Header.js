import React from "react";
import { NavElement, Logo ,NavItems ,NavLinks ,NavButton } from "./styledComponents";


const Header = () => {
  return (
    <NavElement>
     <Logo src='favicon.ico' alt="logo"/>
      <NavItems>
          <NavLinks style={{color:'purple' , listStyle :'none'}}>
              <li>Home</li>
                <li>About</li>
              <li>Products</li>
          </NavLinks>
          <NavButton style={{width : '150px' , backgroundColor :'purple' , padding :'10px' , color : '#fff' ,borderWidth :'0px'}}>Logout</NavButton>
      </NavItems>
    </NavElement>
  );
};
export default Header;
