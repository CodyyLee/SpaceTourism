import React from 'react';
import './landing.scss';

export default function Landing() {
  return (
    <div className='container'>
        <div className='header'>
            <h1 className='title'>SO, YOU WANT TO TRAVEL TO</h1>
            <h1 className='big'>SPACE</h1>

            <p className='text'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
        </div>

        <div className='actionContainer'>
            <button className='cta'>
                EXPLORE
            </button>
        </div>
    </div>
  )
}
