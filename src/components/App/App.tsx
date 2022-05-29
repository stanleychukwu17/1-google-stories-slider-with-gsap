import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TopBar } from '../tobar/TopBar';
import { Home } from '../Home/Home';
import './app.scss';
import { Toppings } from '../Toppings/Toppings';
import { Base } from '../Base/Base';
import { Order } from '../Order/Order';
// import background from '../../images/background.jpg'
// import { useState } from 'react';


const App = () => {

    return (
        <Router>
            <div className='AppMain'>
                <TopBar />
                <div>
                    <Routes>
                        <Route path='home' element={<Home />} />
                        <Route path='toppings' element={<Toppings />} />
                        <Route path='base' element={<Base />} />
                        <Route path='order' element={<Order />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;