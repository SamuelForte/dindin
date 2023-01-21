import { ReactNode } from "react";
import classNames from "classnames";
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
    | "dark"
    | "link"
    | string;

  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  flat?: boolean;
  clazz?: any;

  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
}

export default function Button(props: ButtonProps) {
  const { color, size, rounded, flat, onClick, children } = props;
  return (
    <button
      className={classNames([
        "btn",
        `btn--${color}`,
        `btn--${size}`,
        {
          "btn--rounded": rounded,
          "btn--flat": flat,
        },
      ])}
    >
      {children}
    </button>
  );
}

// btn--secundary
// btn--sm
