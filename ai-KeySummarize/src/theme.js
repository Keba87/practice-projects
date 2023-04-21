import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  };
  
  const colors = {
    light: {
      bg: 'gray.50',
      text: 'gray.800',
      primary: 'blue.500',
    },
    dark: {
      bg: 'gray.800',
      text: 'gray.100',
      primary: 'blue.300',
    },
  };
  
  const theme = extendTheme({ config, colors });
  
  export default theme;