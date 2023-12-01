import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../Shared/Cover';
import coverImage from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Premium Dine | Menu</title>
            </Helmet>

            <Cover heading={'Our Menu'} subHeading={'Would you like to try a dish ?'} img={coverImage}></Cover>
            
        </div>
    );
};

export default Menu;