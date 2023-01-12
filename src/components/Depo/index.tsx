import React from "react";
import "./styles.css";

export interface DepoProps {
  text: string;
  user: string;
  image: string;
  color?: string;
}

export function Depo(props: DepoProps) {
  const { text, user, image, color = "#FF4081" } = props;
  return (
    <div className="depo">
      <div className="avatar__cicle" style={{ border: `3px solid ${color}` }}>
        <img src={image} />
      </div>
      <div className="depoimento">
        <p>{text}</p>
        <span>{user}</span>
      </div>
    </div>
  );
}
