import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
      <div>
        <section>
          <SectionTitle
            subHeading={"check it out"}
            heading={"Featured items"}
          ></SectionTitle>
        </section>

        <section className="md:flex text-white justify-center items-center md:py-48 md:px-40 featured-bg my-10">
          <div>
            <img src={featuredimg} alt="" />
          </div>
          <div className="md:ml-10 mt-10 bg-zinc-800 bg-opacity-50 p-2 rounded">
            <div className='font-semibold text-lg'>
              <p>November 29,2023</p>
              <p>Where can I get some?</p>
            </div>
            <p>
              Check out our featured item of this month! Our roasted duck is
              made with the help of our top chefs and staffs to ensure it goes
              well with all our guests pallate and they indulge in the most
              authentic experience of duck roast.
            </p>
            <button className="btn btn-primary mt-5">Order Now</button>
          </div>
        </section>
      </div>
    );
};

export default Featured;