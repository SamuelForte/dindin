import { ReactNode } from "react";
import "./styles.css";

export interface CardProps {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}

export function Card(props: CardProps) {
  const { title, description, image, children } = props;
  return (
    <div className="card">
      <img className="investimentImg" src={image} />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      {children && children}
    </div>
  );
}
