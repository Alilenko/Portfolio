import React from "react";
import myPhoto from "../../img/2.jpg";

import "./main.css";

export const Main = () => {
  return (
    <div className="main">
      <img className="main__img" src={myPhoto} alt="Alina" />
      <div className="main__content">
        <div className="about__content">
          <h1 className="about_name">Алина Павленко</h1>
          <h2 className="about_prof">React Software engineer</h2>
          <div className="about_location">
            <i className="fas fa-map-marker-alt"></i>Киев
          </div>
          <div className="about_phone">
            <a href="tel:+380958413742">
              <i className="fas fa-phone-alt"></i> +38(095)841-37-42
            </a>
          </div>
          <div className="about_mail">
            <i className="far fa-envelope"></i>pavlenkoalina9694@gmail.com
          </div>
          <div className="about_social">
            <a href="https://github.com/Alilenko" className="about_link">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:pavlenkoalina9694@gmail.com" className="about_link">
              <i className="far fa-envelope"></i>
            </a>
            <a
              href="https://www.instagram.com/alilenko__/"
              className="about_link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://t.me/Alilenko" className="about_link">
              <i className="far fa-paper-plane"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alilenko"
              className="about_link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="card-buttons main__button">
            <a
              href="https://drive.google.com/file/d/1L4w9t24au5D9cy-PN8v1EP200A5NpRnU/view?usp=sharing"
              className="link"
            >
              Резюме
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
