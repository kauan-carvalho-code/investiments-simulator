import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      orange600: string;
      gray200: string;
      gray600: string;
    };
  }
}
