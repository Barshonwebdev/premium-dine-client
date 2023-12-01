import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==="popular");
   
    return (
        <div className='mb-10'>
            <section>
                <SectionTitle heading={'From our menu'} subHeading={'Popular Items'}></SectionTitle>
            </section>
            <section className='my-5 grid md:grid-cols-2 gap-9'>
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </section>
        </div>
    );
};

export default PopularMenu;