import React from "react";
import { Link } from "react-router-dom";

const Frame = ({ item }) => {
  const {
    text,
    img,
    ref,
    position,
    paragraph,
    textPos,
    bgFrame,
    linkShow,
    linkCode,
    btn,
    to,
  } = item;

  let pos;
  if (position === "left") {
    pos = "frame-media_left";
  } else {
    pos = "frame-media_right";
  }

  let textPosition;
  if (textPos === "right") {
    textPosition = "text-right";
  } else {
    textPosition = "text-left";
  }

  let bgColor;
  if (bgFrame) {
    bgColor = "frame_bg";
  }

  return (
    <div
      className={`frame ${bgFrame ? bgColor : null} ${
        textPos ? textPosition : null
      }`}
      ref={ref}
    >
      <div className="frame-content">
        {text ? <h2>{text}</h2> : null}
        {img ? (
          <img src={img} alt="Project" className={`frame-media ${pos}`}></img>
        ) : null}
        {paragraph ? (
          <>
            <h3>{paragraph.h3}</h3>

            <p>{paragraph.text}</p>
            <a
              href={linkShow}
              target="_blank"
              rel="noreferrer"
              className="text-btn"
            >
              Дивитися
            </a>
            <a
              href={linkCode}
              target="_blank"
              rel="noreferrer"
              className="text-btn"
            >
              Дивитися код
            </a>
          </>
        ) : null}
        {btn && (
          <Link className="text-btn" to={to}>
            {btn}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Frame;
