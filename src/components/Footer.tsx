import { Box, Flex, Text } from "@chakra-ui/react";
import applicationText from "../const/applicationText";

function Footer() {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        {/* <Image src={logo-url} /> */}
        <Text>{applicationText.Footer.credits}</Text>
      </Flex>
    </Box>
  )
};

export default Footer;