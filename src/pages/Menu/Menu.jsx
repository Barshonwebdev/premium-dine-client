import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../Shared/Cover';
import coverImage from '../../assets/menu/banner3.jpg'
import soupCoverImage from '../../assets/menu/soup-bg.jpg'
import pizzaCoverImage from '../../assets/menu/pizza-bg.jpg'
import saladCoverImage from '../../assets/menu/salad-bg.jpg'
import DessertCoverImage from '../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert=menu.filter(item=>item.category==="dessert");
    const soup=menu.filter(item=>item.category==="soup");
    const salad=menu.filter(item=>item.category==="salad");
    const pizza=menu.filter(item=>item.category==="pizza");
    const offered=menu.filter(item=>item.category==="offered");
    
    console.log(menu);
    return (
        <div>
            <Helmet>
                <title>Premium Dine | Menu</title>
            </Helmet>

            <Cover heading={'Our Menu'} subHeading={'Would you like to try a dish ?'} img={coverImage}></Cover>

            <SectionTitle heading={"Browse through the menu"} subHeading={"Get your desired dish"}></SectionTitle>
            
            <MenuCategory items={dessert} title={'dessert'} coverimg={DessertCoverImage}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} coverimg={soupCoverImage}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} coverimg={pizzaCoverImage}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} coverimg={saladCoverImage}></MenuCategory>
            
        </div>
    );
};

export default Menu;