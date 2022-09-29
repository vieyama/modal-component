import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "primary" | "default";
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  type,
  ...restProps
}) => {
  return (
    <button className={`btn btn-${type}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
