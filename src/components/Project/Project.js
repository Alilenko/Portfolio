import React from 'react';
import './project.css';
import shop from '../../img/shop.png';
import todo from '../../img/todo.png'
import conv from '../../img/conv.png'


const Project = () => {
    return (
        <div className='skills'>
               <h2 className='title'>Project</h2>
               <div className='text'>
                </div>
           <div className='card-row'>
           <div className="card">
                    <div className="card-image">
                    <img src={shop}/>
                    </div>
                    <div className="card-content">
                    <span className="card-title">Интернет магазин</span>
                    <p>React+Redux. приложение в котором реализованно: Получение товаров с помощью fetch запроса. Динамическое формирование карточки товаров. Поиск товаров на странице. Добавление и удаление товаров из корзины и количества. Формирование общей стоимости товаров. </p>

                    </div>
                    <div className='card-buttons'>
                        <a href='https://alilenko.github.io/TestShop/' className='link'>Посмотреть</a>
                        <a href='https://github.com/Alilenko/TestShop' className='link'>Посмотреть код</a>
                     </div>
                </div>
                <div className="card">
                    <div className="card-image">
                    <img src={todo}/>
                    
                    </div>
                    <div className="card-content">
                    <span className="card-title">Список дел/покупок</span>
                    <p>React+Redux. Простое приложение в котором реализовано добавление и удаление записей, фильтрация, поиск. </p>
                   
                    </div>
                    <div className='card-buttons'>
                        <a href='https://alilenko.github.io/TodoList/' className='link'>Посмотреть</a>
                        <a href='https://github.com/Alilenko/TodoList' className='link'>Посмотреть код</a>
                     </div>
                </div>
                <div className="card">
                    <div className="card-image">
                    <img src={conv}/>
                    
                    </div>
                    <div className="card-content">
                    <span className="card-title">Конвертор валют</span>
                    <p>Приложение конвертор валют</p>
 
                    </div>
                    <div className='card-buttons'>
                        <a href='https://codepen.io/Alilenko/pen/qBXXrNv' className='link'>Посмотреть</a>
                        <a href='https://github.com/Alilenko/converter' className='link'>Посмотреть код</a>
                     </div>
                </div>
            </div>
       </div>

       
    )
}

export default Project
