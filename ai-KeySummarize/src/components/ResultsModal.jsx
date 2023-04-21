import React, { useState } from 'react'
import {Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, CircularProgress} from '@chakra-ui/react' 

const ResultsModal = ({ keywords, summary, loading, isOpen, closeModal }) => {
    // State for controlling whether to show keywords or summary
    const [showKeywords, setShowKeywords] = useState(true);

    // Handler for clicking on the Keywords button
    const handleKeywordsClick = () => {
        setShowKeywords(true);
    };
    // Handler for clicking on the Summary button
    const handleSummaryClick = () => {
        setShowKeywords(false);
    };
  return (
    <>
        <Modal isOpen={ isOpen } onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Keywords / Summary
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody 
                    display='flex' 
                    alignItems='center' 
                    justifyContent='center'
                    maxHeight='50vh'
                    overflow='auto'
                >
                    {/* Conditional rendering based on loading and showKeywords state */}
                    {loading ? (
                        <CircularProgress isIndeterminate color='blue.300' />
                    ) : showKeywords ? (
                        <Text>Keywords: {keywords}</Text>
                    ) : (
                            <Text>Summary: {summary}</Text>
                    )}
                </ModalBody>
                <ModalFooter>
                    {/* Button to switch to Keywords view */}
                    <Button
                        colorScheme={showKeywords ? 'blue' : 'gray'}
                        mr={3}
                        onClick={handleKeywordsClick}
                    >
                        Keywords
                    </Button>
                    {/* Button to switch to Summary view */}
                    <Button
                        colorScheme={!showKeywords ? 'blue' : 'gray'}
                        onClick={handleSummaryClick}
                    >
                        Summary
                    </Button>
                    {/* Button to close the modal */}
                    <Button colorScheme="blue" ml={3} onClick={closeModal}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default ResultsModal