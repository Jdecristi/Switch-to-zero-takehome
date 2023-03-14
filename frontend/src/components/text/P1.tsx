import React, { Children } from "react";

interface Props {
  children: string;
  color?: string;
}

const P1: React.FC<Props> = ({ children, color = "var(--bs-dark)" }) => {
  return <p style={{ fontSize: "20px", color }}>{children}</p>;
};

export default P1;
