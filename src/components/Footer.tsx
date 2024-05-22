import { Box, Flex, Text, Image } from "@chakra-ui/react";
import applicationText from "../const/applicationText";

function Footer() {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Box paddingRight="0.5em">
          <Image
            bg="white"
            boxSize="1.5em"
            borderRadius="full"
            padding="0.2em"
            src="https://raw.githubusercontent.com/glowiep/ai-keyword-extractor/486b9b41f1f5eaa003d35761134757f1cb34d1b6/src/assets/openai-logo.svg"
            alt="OpenAI logo"
          />
        </Box>
        <Text>{applicationText.Footer.credits}</Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Box paddingRight="0.5em">
          <Image
            bg="white"
            boxSize="1.5em"
            borderRadius="full"
            padding="0.2em"
            src="https://raw.githubusercontent.com/glowiep/ai-keyword-extractor/486b9b41f1f5eaa003d35761134757f1cb34d1b6/src/assets/openai-logo.svg"
            alt="Github"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
