import React from 'react';
import './project.css';
import shop from '../../img/shop.png';
import todo from '../../img/todo.png'
import conv from '../../img/conv.png'
import hunger from '../../img/hunger.png'

const Project = () => {
    return (
        <div className='skills'>
               <h2 className='title'></h2>
               <div className='text'>
                </div>
           <div className='card-row'>
           <div className="card">
                    <div className="card-image">
                    <img src={shop} alt='project1'/>
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
                    <img src={todo} alt='project2'/>
                    
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
                    <div className="card-image" >
                    <img src={conv} alt='project3'/>
                    
                    </div>
                    <div className="card-content">
                    <span className="card-title">Конвертор валют</span>
                    <p>Приложение конвертор валют. В проекте реализованно: получение данных из API с помощью fetch.
                        использование хуков useState, useEffect.
                        получение значения от пользователя и конвертация в четыре валюты.</p>
 
                    </div>
                    <div className='card-buttons'>
                        <a href='https://codepen.io/Alilenko/pen/qBXXrNv' className='link'>Посмотреть</a>
                        <a href='https://github.com/Alilenko/converter' className='link'>Посмотреть код</a>
                     </div>
                </div>
                <div className="card">
                    <div className="card-image">
                    <img src={hunger}  alt='project4'/>
                    
                    </div>
                    <div className="card-content">
                    <span className="card-title">Landing Page страница ресторана</span>
                    <p>HTML, CSS, JavaScript. В проекте  реализованно: Адаптивная верстка.
                        Фиксированный header который исчезает при скролле вниз и выезжает при прокрутке вверх.
                        Слайдер с помощью библиотеки Swiper.
                        При клике на кнопки навигации плавная прокрутка к якорю.
                        Секция меню которая меняется в зависимости от выбраной категории.
                        Галерея.
                        добавленна Google карта.</p>
 
                    </div>
                    <div className='card-buttons'>
                        <a href='https://alilenko.github.io/Restaurant/' className='link'>Посмотреть</a>
                        <a href='https://github.com/Alilenko/Restaurant/tree/main' className='link'>Посмотреть код</a>
                     </div>
                </div>
            </div>
       </div>

       
    )
}

export default Project
