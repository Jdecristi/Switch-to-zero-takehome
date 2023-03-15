import React, { Children } from "react";

interface Props {
  children: string;
  color?: string;
}

const H3: React.FC<Props> = ({ children, color = "var(--bs-dark)" }) => {
  return <h3 style={{ fontSize: "39.06", color }}>{children}</h3>;
};

export default H3;
