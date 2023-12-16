import React, { useState } from 'react';
import Cover from '../../Shared/Cover';
import shopImage from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../../../hooks/useMenu';
import OrderFood from '../OrderFood/OrderFood';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const {category}=useParams();
    const categories=['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const [menu]=useMenu();
    const initialIndex=categories.indexOf(category);
    const [tabIndex,setTabIndex]= useState(initialIndex);
    console.log(category);
     const dessert = menu.filter((item) => item.category === "dessert");
     const soup = menu.filter((item) => item.category === "soup");
     const salad = menu.filter((item) => item.category === "salad");
     const pizza = menu.filter((item) => item.category === "pizza");
     const drinks = menu.filter((item) => item.category === "drinks");
    return (
      <div>
        <Helmet>
          <title>Premium Dine | Shop</title>
        </Helmet>

        <Cover img={shopImage} heading={"Order Food"}></Cover>

        <div className="mt-10 ">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="flex justify-center my-5 font-bold">
              <Tab>Salad</Tab>
              <Tab>Pizza </Tab>
              <Tab>Soup </Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>

            <TabPanel>
              <OrderFood items={salad}></OrderFood>
            </TabPanel>
            <TabPanel>
              <OrderFood items={pizza}></OrderFood>
            </TabPanel>
            <TabPanel>
              <OrderFood items={soup}></OrderFood>
            </TabPanel>
            <TabPanel>
              <OrderFood items={dessert}></OrderFood>
            </TabPanel>
            <TabPanel>
              <OrderFood items={drinks}></OrderFood>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default Shop;