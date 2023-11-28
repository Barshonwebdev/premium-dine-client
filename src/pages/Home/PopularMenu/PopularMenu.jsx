import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem=data.filter(item=>item.category==='popular');
            console.log(popularItem);
            setMenu(popularItem);
        })
    },[])
    return (
        <div className='mb-10'>
            <section>
                <SectionTitle heading={'From our menu'} subHeading={'Popular Items'}></SectionTitle>
            </section>
            <section className='my-5 grid md:grid-cols-2 gap-9'>
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </section>
        </div>
    );
};

export default PopularMenu;