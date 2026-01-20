'use client';
import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Tour from '../../Components/Tour/Tour';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#1ca8cb', height: '90px', width: '100%'}}></div>
{/*         <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.webp"
                Title="Tour"
            ></BreadCumb> 
            */}   
                  <Suspense fallback={<div>Loading tours...</div>}>

            <Tour />    
                  </Suspense>

    </div>
  );
};

export default page;