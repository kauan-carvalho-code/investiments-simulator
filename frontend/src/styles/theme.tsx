import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#ebebeb",
    orange600: "#eb783f",
    gray200: "#f2f2f2",
    gray600: "#c4c4c4",
  },
};

interface AuxProps {
  children: ReactNode;
}

export default function Theme({ children }: AuxProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
