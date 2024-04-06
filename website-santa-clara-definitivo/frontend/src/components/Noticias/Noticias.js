import './Noticias.css'
import React from 'react'
import NoticiasData from './NoticiasData'
import pic1 from '../Fcimages/luciapapa.jpg'
import pic2 from '../Fcimages/luciaplat.jpg'
import pic3 from '../Fcimages/luciaref.png'


function Noticias() {
  return (
    <div className='news-card'>
        <h1 className='news-title'>ULTIMAS NOTICIAS</h1>
        <div className='newscards-container'>
        <div className='news-wrapper'>
        <ul className='newscard'>
            <NoticiasData
            image={pic1}
            heading='Sor lucia vista el Papa'
            text='Sor Lucia visita roma y lanca la nueva campaña para el hospital de campaña'
            button='Leer mas'
            path='/project'
            />
            <NoticiasData
            image={pic2}
            heading='Sor lucia vista el Papa'
            text='Sor Lucia visita roma y lanca la nueva campaña para el hospital de campaña'
            button='Leer mas'
            path='/project'

            />
            <NoticiasData
            image={pic3}
            heading='Sor lucia vista el Papa'
            text='Sor Lucia visita roma y lanca la nueva campaña para el hospital de campaña'
            button='Leer más'
            path='/project'

            />
            
        </ul>
        </div>
        </div>
    
    </div>
  )
}

export default Noticias