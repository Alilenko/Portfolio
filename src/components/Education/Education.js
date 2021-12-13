import React from 'react'
import './education.css';

const Education = () => {
    return (
        <div className='about'>
            <h2 className='title'>Educations</h2>
            <div className='title_content'> 
            
                    <div className='text'><span>2021</span> JavaScript + React. Иван Петриченко</div>
                    <div className='text'><span>2021</span> React для начинающих. Михаил Непомнящий</div> 
                    <div className='text'><span>2021</span> WEB-разработчик. Иван Петриченко</div>
                    <div className='text'><span>2021</span> Курс по JavaScript. Евгений Андриканич</div>
                    <div className='text'><span>2020</span> Курс по верстке HTML,CSS. Евгений Андриканич</div>
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
