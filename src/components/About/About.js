import React from 'react'
import './about.css';
import about from '../../img/about.jpg'
import about2 from '../../img/about2.jpg'
import about3 from '../../img/about3.jpg'

const About = () => {
    return (
        <div className='about'>
            <h2 className='title'></h2>
            <div className='text'> 
            <div className='text_content'>
                <div className='about__content'>
                    <div className='about__subtitle'>Обо мне</div>
                    <p>Я очень ответственный человек, и всегда стараюсь выполнять работу качественно и с максимальной отдачей. 
                    Я люблю учится, Я получаю огромное удовольствие когда изучаю новые интересные сферы для меня.
                    Всегда стараюсь выполнять свои обещания.
                    Я очень спокойный, уравновешенный, стрессоустойчивый и неконфликтный человек.</p> 
                </div>  
                <img className='about__img' src={about2} alt='about'/></div>
            <div className='text_content img__two'>
                <img className='about__img ' src={about}  alt='about'/>
                <div className='about__content'>
                <div className='about__subtitle'>Про обучение </div> 
                <p>В сферу ИТ я пришла из за своего интереса к чему то новому для меня. Свое обучение я начала с html и css, научившись верстать странички, мне захотелось добавить к ним динамики, слайдеров, бургеров, модальных окон и тд поэтому я приступила к изучению JavaScript. После того как я изучила базовые навыки в JavaScript я познакомилась с React и была просто в восторге от того как легко можно добавить динамические данные на странице, как круто можно комбинировать html и javaScript в jsx, как легко можно переходить по разным страницам приложения не перезагружая страницу используя  BrowserRouter, научилась получать данные с сервера, добавлять и удалять элементы со страницы и много других классных фишек. Дальше я познакомилась с библиотекой Redux, и училась использовать React + Redux в своих проектах.  Параллельно изучала React Hooks.</p>
                <br/>
                <p>Также у меня был период когда я изучала тестирование ПО, но со временем я поняла что для мне это не интересно.  В процессе обучения я узнала про методологии разработки, что такое баги, их классификации, как выглядят тест кейсы и баг репорты и много чего другого, это позволило мне больше узнать об ИТ сфере, не только со стороны разработчика.</p>
                </div>
            </div>
            <div className='text_content'>
                <div className='about__content'>
                    <p>У меня за спинной длительный процесс обучения, и я знаю что мне еще многому нужно научится, и если честно, это меня вдохновляет!</p>
                    <br/>
                    <p>Мои цели на ближайшее время это продолжить изучать React совершенствуя свои навыки, получить опыт работы на реальных проектах,  углубится в изучение английского языка, что бы легко общаться с коллегами и заказчиками.</p></div>
                
                <img className='about__img' src={about3}  alt='about'/>
            </div>
            </div>  
            </div>
    )
}

export default About
