import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#dbdbdb",
    orange600: "#eb783f",
  },
};

interface AuxProps {
  children: ReactNode;
}

export default function Theme({ children }: AuxProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
