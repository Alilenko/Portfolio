import React, { useEffect, useState } from "react";
import about3 from "../../img/My-photo.jpg";
import Spinner from "../Spinner/Spinner";
import "./about.css";

const AboutImg = ({ setLoading, loading }) => {
  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <img
      className="about__img"
      src={about3}
      alt="about"
      onLoad={() => setLoading(false)}
    />
  );
};

const About = () => {
  const [loading, setLoading] = useState(false);
  console.log(loading);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.style.height = "100vh";
  }, []);
  useEffect(() => {}, [loading]);

  if (loading) return <Spinner />;

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
          <AboutImg setLoading={setLoading} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default About;
