import React from 'react';
const Cover = ({img, heading, subHeading}) => {
    return (
      <div
        className="hero h-[600px] bg-fixed"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 rounded-lg md:px-60 md:py-14 px-8 py-5">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
            <p className="mb-5">
             {subHeading}
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default Cover;