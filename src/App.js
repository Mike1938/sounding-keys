import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const App = ()=>{
    return(
        <div className='cont'> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}

export default App