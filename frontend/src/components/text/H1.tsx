import React, { Children } from "react";

interface Props {
  children: string;
  color?: string;
}

const H1: React.FC<Props> = ({ children, color = "var(--bs-dark)" }) => {
  return <h1 style={{ fontSize: "76.29px", color }}>{children}</h1>;
};

export default H1;
