import React, { useEffect } from "react";
import about3 from "../../img/My-photo.jpg";
import "./about.css";

const About = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.style.height = "100vh";
  }, []);

  return (
    <div className="about">
      <div className="text">
        <div className="text_content">
          <div className="about__content">
            <h3 className="about__subtitle">Про мене</h3>
            <p>
              Я дуже відповідальна людина, і завжди намагаюся виконувати роботу
              якісно та з максимальною віддачею. Я люблю вчитися, Я отримую
              велике насолоду коли вивчаю нові цікаві сфери для мене. Завжди
              намагаюсь виконувати свої обіцянки. Я дуже спокійний,
              врівноважена, стресостійка і неконфліктна людина.
            </p>
          </div>
          <img className="about__img" src={about3} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
