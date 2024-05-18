import { Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize='normal' textAlign="center">
        Enter a text snippet below and we will extract the keywords for you.
      </Text>
    </>
  )
};

export default Header;