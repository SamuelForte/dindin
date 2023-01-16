import { ReactNode } from "react";
import "./styles.css";

export interface ButtonProps {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  flat?: boolean;

  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
}

export default function Button(props: ButtonProps) {
  const { color, size, rounded, flat, onClick, children } = props;
  return <button className="btn">{children}</button>;
}
