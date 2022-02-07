import React from 'react'
import './about.css';
import about3 from '../../img/about3.jpg'


const About = () => {
    return (
        <div className='about'>
            <div className='text'> 
            <div className='text_content'>
                <div className='about__content'>
                <div className='about__subtitle'>Обо мне</div>
                    <p>Я очень ответственный человек, и всегда стараюсь выполнять работу качественно и с максимальной отдачей. 
                    Я люблю учится, Я получаю огромное удовольствие когда изучаю новые интересные сферы для меня.
                    Всегда стараюсь выполнять свои обещания.
                    Я очень спокойный, уравновешенный, стрессоустойчивый и неконфликтный человек.</p> 
                </div>  
                <img className='about__img' src={about3 } alt='about'/></div>
  
            </div>
            </div>
    )
}



export default About
