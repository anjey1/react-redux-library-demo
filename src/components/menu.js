import React from "react";
import {Nav, NavItem, Navbar, Badge} from "react-bootstrap";

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Shop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Menu;
