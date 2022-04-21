
import React from 'react';
import './../App.scss';
import Store from '../components/Store';


const StorePage = ()  => {
  return (
    <div className='app-wrapper'>
        <div className='store'>
            <Store />
        </div>
    </div>
  );
}

export { StorePage };
