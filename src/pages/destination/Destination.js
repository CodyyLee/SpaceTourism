import React, { useContext } from 'react';
import './destination.scss';
import data from '../../assets/data.json';
import { AppContext } from '../../context';

export default function Destination() {

const {store, setStore} = useContext(AppContext);

  return (
    <div className='destContainer'>
        <div className='header'>
            <div className='titleContainer'>
                <p className='title'><span className='number'>01 </span>PICK YOUR DESTINATION</p>
            </div>
            <img className='image' src={process.env.PUBLIC_URL + data.destinations[store.destination].images.webp} alt={`The body of ${data.destinations[store.destination].name}`} />
        </div>
        <div className='content'>
            <div className='optionsContainer'>
                {data.destinations.map((dest, i) => {
                    return (
                        <button id={i} style={{borderBottom: store.destination === i ? '3px solid white' : 'none'}} className='option'
                        onClick={() => {
                            setStore({...store, destination: i})
                        }}>
                            {dest.name.toUpperCase()}
                        </button>
                    )
                })}
            </div>
            <h1 className='name'>{data.destinations[store.destination].name.toUpperCase()}</h1>
            <p className='description'>{data.destinations[store.destination].description}</p>
            <hr className='line'/>
        </div>

        <div className='facts'>
            {/* distance */}
            <div className='distance'>
                <h3 className='factsTitle'>AVG. DISTANCE</h3>
                <p className='fact'>{data.destinations[store.destination].distance}</p>
            </div>
            {/* travel time */}
            <div className='travel'>
                <h3 className='factsTitle'>EST. TRAVEL TIME</h3>
                <p className='fact'>{data.destinations[store.destination].travel}</p>
            </div>
        </div>
    </div>
  )
}
