import React from 'react'
import Tilt from 'react-parallax-tilt';


const Exemplar = ({exemplar}) => {
  return (
    <div>
        
        <section id={exemplar.name} key={exemplar.id}>
            <div className='r-charName'>The {exemplar.name}</div>
            <video src={exemplar.charVid} type="video/mp4" className='r-charImg' alt={exemplar.name} loop autoPlay muted></video>                    
            <div className='r-charInfoCont'>
                <div className='r-charDescription'>{exemplar.description}</div>
                <img src={exemplar.abilImg} className='r-abilImg' alt={exemplar.ability}></img>
                <div className='r-abilName'><span>ABILITY NAME:</span> {exemplar.abilityName}</div>
                <div className='r-abilDesc'><span>ABILITY DESCRIPTION:</span>{exemplar.ability}</div>
            </div>
        </section>

    </div>
  )
}

export default Exemplar