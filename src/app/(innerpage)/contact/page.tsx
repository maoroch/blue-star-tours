import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Contact from '../../Components/Contact/Contact';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.webp"
                Title="Связаться"
            ></BreadCumb>
            <Contact></Contact>        
    </div>
  );
};

export default page;