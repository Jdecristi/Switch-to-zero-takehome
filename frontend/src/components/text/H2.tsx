import React, { Children } from "react";

interface Props {
  children: string;
  color?: string;
}

const H2: React.FC<Props> = ({ children, color = "var(--bs-dark)" }) => {
  return <h2 style={{ fontSize: "61.04", color }}>{children}</h2>;
};

export default H2;
