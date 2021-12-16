import React from 'react'
import './education.css';

const Education = () => {
    return (
        <div className='about'>
            <h2 className='title'>Educations</h2>
            <div className='title_content'> 
            
                    <div className='text'><span>2021</span><a href='https://www.udemy.com/course/javascript_full/'>JavaScript + React.</a></div>
                    <div className='text'><span>2021</span><a href='https://www.udemy.com/course/react-from-scratch/'> React для начинающих.</a> </div> 
                    <div className='text'><span>2021</span><a href='https://www.udemy.com/course/webdeveloper/'> WEB-разработчик.</a> </div>
                    <div className='text'><span>2021</span><a href='https://www.youtube.com/watch?v=wdViO9OcQzs&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=36'> Курс по JavaScript. </a></div>
                    <div className='text'><span>2020</span><a href='https://www.youtube.com/watch?v=z3GS5oYGq5U&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=3'> Курс по верстке HTML,CSS. </a> </div>
                    </div>
            <div className='subtitle'>Высшее образование:</div>
                <div className='text'>
                    <span>2017</span> "Криворожский национальный университет"
                    <p>специальность: Економика предприятия</p>
            </div> 
        </div>
    )
}

export default Education
