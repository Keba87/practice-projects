import React from 'react'
import { Heading, Image, Text} from '@chakra-ui/react'
import logo from '../assets/keysumLogo.png'

const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={100} marginBottom='1rem'/>
        <Heading color='white' marginBottom='1rem'>
            AI KeySummarize
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your text below
        </Text>
    </>
  );
};

export default Header;