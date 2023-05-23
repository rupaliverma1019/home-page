import React from "react";
import './App.css';
import Navbar from './component/Navbar';
import Time from './component/Time';
import Data from "./component/Data";
import Search from "./component/Search";
import Footer from "./component/Footer";



function App(){
    return ( 
    <div>
        <Navbar></Navbar>
        <Time></Time>
        <Data></Data>
        <Search></Search>
        <Footer></Footer>
        

    </div>
    )
}
export default App;