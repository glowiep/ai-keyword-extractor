import { Heading, Text } from "@chakra-ui/react";
import applicationText from "../const/applicationText";

function Header() {
  return (
    <>
      <Heading color="white" marginBottom="1rem">
        {applicationText.Header.heading}
      </Heading>
      <Text fontSize='normal' textAlign="center">
      {applicationText.Header.description}
      </Text>
    </>
  )
};

export default Header;