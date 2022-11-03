import React, { useEffect } from "react";
import "./education.css";

const Education = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.style.height = "100vh";
  }, []);

  return (
    <div className="about">
      <div className="title_content">
        <div className="subtitle">Навчання</div>
        <div className="text">
          <span>2022 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.udemy.com/course/complete-guide-to-redux-toolkit-rtk-query-with-react-js/"
          >
            Complete Guide to Redux-Toolkit RTK Query with React JS - Udemy
          </a>
        </div>
        <div className="text">
          <span>2022 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/"
          >
            Complete React Native in 2022 - Udemy
          </a>
        </div>

        <div className="text">
          <span>2021 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.udemy.com/course/javascript_full/"
          >
            Полный курс по JavaScript + React - Udemy
          </a>
        </div>
        <div className="text">
          <span>2021 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.udemy.com/course/react-from-scratch/"
          >
            React с нуля для начинающих - Udemy
          </a>
        </div>
        <div className="text">
          <span>2021 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.udemy.com/course/webdeveloper/"
          >
            WEB-разработчик 2021 - Udemy
          </a>
        </div>
        <div className="text">
          <span>2021 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=wdViO9OcQzs&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=36"
          >
            Курс по JavaScript. Фрилансер по жизни - IT и фриланc (HTML,
            JavaScript) - Youtube
          </a>
        </div>
        <div className="text">
          <span>2020 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pluralsight.com/courses/html-fundamentals"
          >
            HTML Fundamentals - Pluralsight{" "}
          </a>
        </div>
        <div className="text">
          <span>2020 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=z3GS5oYGq5U&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=3"
          >
            Курс по верстке HTML,CSS. Фрилансер по жизни - IT и фриланc (HTML,
            JavaScript) - Youtube
          </a>
        </div>
      </div>
      <br />
      <div className="subtitle">Вища освіта</div>
      <div className="text">
        <span>2017</span> "Кріворізькій Національний Універсітет"
        <p>спеціальність: Економіка підпріємства</p>
      </div>
    </div>
  );
};

export default Education;
