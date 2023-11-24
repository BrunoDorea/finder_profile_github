import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  backgroundColor:
    "linear-gradient(112deg, #A43EC5 -0.67%, #6523A2 14.54%, #19044D 25.55%, #160B29 32.22%, #000 44.37%, #000 53.86%, #160B29 67.91%, #19044D 77.34%, #6523A2 88.47%, #A43EC5 100%)",
  color: {
    textColor: "#fff",
    primary: "#c23aff",
    border: "#fff",
  },
  header: {
    backgroundColor: "#000",
    textColor: "#fff",
  },
};

export const lightTheme: DefaultTheme = {
  backgroundColor:
    "linear-gradient(112deg, #FF41E8 -0.67%, #FB94BD 14.54%, #FEC5C6 25.55%, #FFE7E7 32.22%, #FFF 44.37%, #FFF 53.86%, #FFE7E7 66.97%, #FEC5C6 75.88%, #FB94BD 88.47%, #FF41E8 100%)",
  color: {
    textColor: "#383838",
    primary: "#ff1d81",
    border: "#7e7e7e",
  },
  header: {
    backgroundColor: "#fff",
    textColor: "#000",
  },
};
