import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Roboto",
        bg: "brand.bg",
      },
    },
  },
  colors: {
    brand: {
      bg: "rgba(246, 247, 251, 1)",
      text: "rgba(51, 70, 128, 1)",
      shadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
      placeholder: "#B9BDCF",
      buttons: "rgba(30, 134, 255, 1)",
    },
  },
});

export default theme;
