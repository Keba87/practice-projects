import React from 'react'
import { Heading, Image, Text, useColorMode, Button} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/keysumLogo.png'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button 
        onClick={() => toggleColorMode()} 
        pos='absolute' 
        top='0' 
        right='0' 
        m='1rem'
      >
        {colorMode ==='dark' ? <SunIcon color='orange.200' /> : <MoonIcon color='blue.700'/>}
      </Button>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem'/>
      <Heading color={colorMode === 'light' ? 'light.text' : 'dark.text'} marginBottom='1rem'>
          AI KeySummarize
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Paste in your text below
      </Text>
    </>
  );
};

export default Header;