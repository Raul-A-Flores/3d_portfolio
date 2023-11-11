import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) =>(
    <div className='info-box'>
        <p className='font-medium sm:text0xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>

    </div>
)

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalisim-blue py-4 px-8 text-white mx-5'>Yo, I am <span className='font-semibold'> Raul</span></h1>
    ),
    2:(
        <h1>2</h1>
    ), 
    3:(
        <h1>3</h1>

    ),
    4:(
        <InfoBox 
            text='Need a project done or looking for a dev?'
            link='/contact'
            btnText='Learn More'
            />

    )
}
const HomeInfo = ({currentStage}) => {

  return renderContent[currentStage] || null;
}

export default HomeInfo