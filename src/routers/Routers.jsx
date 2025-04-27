import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import Navbar2 from '../Navbar/Navbar2';
import Navbar from '../Navbar/Navbar';

const Routers = () => {
    return (
        <div>
            {/* Add your routes here */}




            <div className=''>
                <Navbar></Navbar>
                {/* <Navbar2></Navbar2> */}
                
            </div>
            <div className='mb-[200px]'>
                <Outlet></Outlet>
            </div>

            <div className='mt-[200px]'>
                <Footer></Footer>
            </div>




        </div>
    );
};

export default Routers;