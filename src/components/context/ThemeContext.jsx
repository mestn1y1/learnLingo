import { createContext } from "react";

export const themes = {
  yellow: {
    bgColor: "#F4C550",
    textColor: "#121417",
    primaryColor: "#FBE9BA",
    image: "/images/yellow.png",
  },
  blue: {
    bgColor: "#9FB7CE",
    textColor: "#121417",
    primaryColor: "#BFD6EA",
    image: "/images/blue.png",
  },
  greyblue: {
    bgColor: "#9fbaae",
    textColor: "#121417",
    primaryColor: "#CBDED3",
    image: "/images/greyblue.png",
  },
  pink: {
    bgColor: "#E0A39A",
    textColor: "#121417",
    primaryColor: "#F2C0BD",
    image: "/images/pink.png",
  },
  lightpink: {
    bgColor: "#F0AA8D",
    textColor: "#121417",
    primaryColor: "#F4C8BA",
    image: "/images/lightpink.png",
  },
};

export const ThemeContext = createContext();
