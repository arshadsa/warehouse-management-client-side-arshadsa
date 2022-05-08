import React from 'react';
import FourZero from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='container'>
            <br /><br /><br />
            <img className='w-100' src={FourZero} alt="" />
        </div>
    );
};

export default NotFound;