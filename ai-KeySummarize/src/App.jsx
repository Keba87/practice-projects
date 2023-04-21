import React from 'react'
import {useState} from 'react'
import {Container, Box, useColorMode } from '@chakra-ui/react'
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import ResultsModal from './components/ResultsModal';

// Define the main component of the app
const App = () => {
  // Set up state variables using useState hook
  const [keywords, setKeywords] = useState('');
  const [summary, setSummary] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();

  // Define a function to extract keywords from the text
  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    // Set up API call with required options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.5
      })
    }

    // Fetch data from API and parse response
    const response = await fetch (import.meta.env.VITE_OPENAI_API_URL, options);
    const json = await response.json();
    const data = json.choices[0].text.trim();

    console.log(data);
    setKeywords(data);  // Update keywords state with extracted keywords
    setLoading(false);
  };

    // Define a function to summarize the text
  const summarizeText = async (text) => {
    setLoading(true);
    setIsOpen(true);

    // Set up API call with required options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-002',
        prompt: 'Summarize the following text maximum in three sentences:\n\n' + text,
        temperature: 0.5,
        max_tokens: 150,
        frequency_penalty: 0.5
      })
    }

    // Fetch data from API and parse response
    const response = await fetch (import.meta.env.VITE_OPENAI_API_URL, options);
    const json = await response.json();
    const data = json.choices[0].text.trim();

    console.log(data);
    setSummary(data); // Update summary state with summarized text
    setLoading(false);
  };

  // Define a function to close the results modal
  const closeModal = () => {
    setIsOpen(false);
  }

  // Render the app component
  return (
    <Box bg={colorMode === 'light' ? 'light.bg' : 'dark.bg'} color={colorMode === 'light' ? 'light.text' : 'dark.text'} height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} summarizeText={summarizeText}/>
        <Footer />
      </Container>
      <ResultsModal 
        keywords={keywords}
        summary={summary}  
        loading={loading} 
        isOpen={isOpen} 
        closeModal={closeModal} 
      />
    </Box>
  );
};

export default App;