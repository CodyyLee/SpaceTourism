import React, { useContext } from 'react';
import './crew.scss';
import data from '../../assets/data.json';
import { AppContext } from '../../context';

export default function Crew() {

const { store, setStore } = useContext(AppContext);

  return (
    <div className='crewContainer'>
        <h1 className='title'><span className='number'>02</span>Meet your crew</h1>

        <div className='imageContainer'>
            <img className='crewImage' src={process.env.PUBLIC_URL + data.crew[store.crew].images.webp} alt='crew member' />
        </div>

        <div className='content'>
            <div className='navigationContainer'>
                {data.crew.map((el, i) => {
                    return (
                        <button style={{opacity: store.crew === i ? '1' : '.17'}} key={`crew${i}`} className='navBtn' onClick={() => {
                            setStore({...store, crew: i})
                        }}></button>
                    )
                })}
            </div>

            <div className='nameContainer'>
                <p className='role'>{data.crew[store.crew].role}</p>
                <p className='name'>{data.crew[store.crew].name}</p>
            </div>

            <p className='bio'>{data.crew[store.crew].bio}</p>
        </div>
    </div>
  )
}
