import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg="white"
      rounded="lg"
      shadow="lg" 
      color="black"
      >
        <Image src={imageSrc} alt={title} rounded="lg"/>
        <VStack alignItems="flex-start" px={4} py={5}>
          <Heading as="h3" size="md" >
            {title}
          </Heading> 
          <Text fontSize="sm" color="grey">
            {description}
          </Text>       
        </VStack>
        <HStack  w="full" justify="flex-start" px={4} py={5}>
          <Text fontSize="sm" >See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
    </VStack>
    )
};

export default Card;
