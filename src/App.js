import "./App.css";
import Directory from './components/DirectoryComponent';
import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";

class App extends Component {
  render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory />
            </div>
        );
    }
}

export default App;
