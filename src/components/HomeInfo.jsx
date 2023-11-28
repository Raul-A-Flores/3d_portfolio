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
        <InfoBox 
        text="Hello, I'm Raul, A Software Developer from Los Angeles"
        link='/about'
        btnText='Learn More'
        />
    ),
    2:(
        <InfoBox 
        text='Worked with multiple clients on projects'
        link='/about'
        btnText='Learn More'
        />
    ), 
    3:(
        <InfoBox 
        text='Created multiple projects throughout the years'
        link='/projects'
        btnText='Learn More'
        />

    ),
    4:(
        <InfoBox 
            text='Need a project done or looking for a dev?'
            link='/contact'
            btnText="Let's Talk"
            />

    )
}
const HomeInfo = ({currentStage}) => {

  return renderContent[currentStage] || null;
}

export default HomeInfo