import React from 'react'
import {useState} from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = ({extractKeywords, summarizeText}) => {
    const [text, setText] = useState('');

    const toast = useToast();

     // Function to handle submission of text and call the appropriate function
    const submitText = (submitFunction) => {
        // Check if text field is empty
        if (text === '') {
             // Show error toast if text field is empty
            toast({
                title: 'Text field is empty', 
                description: 'Please enter some text',
                status: 'error',
                duration: 3000,
                isClosable: false,
            });
        } else {
            // Call the submitFunction with the entered text as argument
            submitFunction(text);
        }
    }

    return (
        <>
            {/* Textarea component for inputting text */}
            <Textarea
                bg='blue.100'
                color='gray.600'
                padding={4}
                marginTop={6}
                height={300}
                value={text}
                onChange={ (e) => setText(e.target.value) }
            />
            {/* Button for submitting text and calling extractKeywords and summarizeText functions */}
            <Button
                bg='blue.200'
                color='gray.600'
                marginTop={4}
                _hover={{bg: 'blue.400'}}
                onClick= {() => {
                    // Call submitText function with extractKeywords function as argument
                    submitText(extractKeywords);
                    // Call submitText function with summarizeText function as argument
                    submitText(summarizeText);
                }}
            >
                Extract keywords and summarize text
            </Button>
        </>
    )
}

export default TextInput