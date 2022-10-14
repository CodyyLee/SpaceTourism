import React, {useContext, useEffect, useState} from 'react';
import './technology.scss';
import data from '../../assets/data.json';
import { AppContext } from '../../context';

export default function Technology() {
  const { store, setStore } = useContext(AppContext);
  const [width, setWidth] = useState(window.innerWidth);

  const windowResize = () => {
    const {innerWidth} = window;

    return innerWidth;
  }

  useEffect(() => {
    const resizeHandler = () => {
        setWidth(windowResize());
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
        window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  return (
    <div className='techContainer'>
      <div className='titleContainer'>
        <h1 className='title'><span className='number'>03</span>Space Launch 101</h1>
      </div>

      <div className='imgContainer'>        
        {width < 1440 ? <img className='img' src={process.env.PUBLIC_URL + data.technology[store.technology].images.landscape} alt='technology' /> : <img className='img' src={process.env.PUBLIC_URL + data.technology[store.technology].images.portrait} alt='technology' />}
      </div>

      <div className='content'>
        <div className='navContainer'>
          <div className='nav'>
            {data.technology.map((el, i) => {
              return (
                <button className='btn'
                style={{background: store.technology === i ? '#fff' : 'transparent', color: store.technology === i ? '#000' : '#fff'}}
                onClick={() => {
                  setStore({...store, technology: i})
                }}>{i + 1}</button>
              )
            })}
          </div>
        </div>

        <div className='textContainer'>
          <div className='titleContainer'>
            <h3 className='textSubheader'>The Terminology ...</h3>
            <h2 className='contentTitle'>{data.technology[store.technology].name}</h2>
          </div>
          
          <div className='infoContainer'>
            <p className='info'>{data.technology[store.technology].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
