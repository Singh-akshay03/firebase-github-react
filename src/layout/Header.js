import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Firebase-Github-App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">{context.user?.email ? context.user.email:"" }</NavbarText>
      <NavbarToggler onClick={toggler} />
      <Collapse isOpen={isOpen} navbar style={{ justifyContent: "flex-end" }}>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink onClick={()=>{context.setUser(null)}} to="/" className="text-white">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Sign up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/login">Sign in</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
