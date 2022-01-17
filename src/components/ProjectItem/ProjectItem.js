import React from 'react'

const ProjectItem = ({item}) => {
    const {img, title, descr, linkCode, linkShow} = item
    return (
        <div className="card">
        <div className="card-image">
        <img src={img} alt='project1'/>
        </div>
        <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{descr}</p>
        </div>
        <div className='card-buttons'>
            <a href={linkShow} className='link'>Посмотреть</a>
            <a href={linkCode} className='link'>Посмотреть код</a>
         </div>
    </div>
    )
}

export default ProjectItem
