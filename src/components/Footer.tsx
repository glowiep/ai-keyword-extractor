import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        {/* <Image src={logo-url} /> */}
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  )
};

export default Footer;