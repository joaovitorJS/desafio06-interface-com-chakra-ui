import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    gray: {
      500: "#47585B",   // Dark/Headings and Text
      400: "#999999",   // Dark/Info
      100: "#DADADA",   // Light/Info
      50: "#F5F8FA",    // Light/Headings and Text
    },
  },

  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  },

  styles: {
    global: {
      body: {
        bg: 'gray.100', // background
        color: 'gray.500'
      }
    }
  },
});