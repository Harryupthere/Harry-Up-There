import React,{useEffect,useState} from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import config from "./config/config";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";

const App = () =>{
   return(
    <BrowserRouter>
    <Routes>
        <Route path={`${config.baseUrl}`} element={<Home/>}/>
    </Routes>
</BrowserRouter>
   )
}
export default App;